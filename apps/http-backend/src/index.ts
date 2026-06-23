import express from "express";
import jwt from "jsonwebtoken"; 
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";  
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);

    if(!parsedData.success) {
        res.json({
            message: "Incorrect credential"
        })
        return; 
    }

    const { username, password, name } = parsedData.data as { username: string; password: string; name: string };
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
    const user = await prismaClient.user.create({
        data: {
            email: username,
            //Hash 
            password: hashedPassword,
            name: name,
            photo: "",
        }
    })
    res.json({
        userId: user.id
    })
    } catch (e) {
        res.status(411).json({
            message: "User already exists with this username"
        })
    }
}) 

app.post("/signin", (req, res) => {
    const data = SigninSchema.safeParse(req.body);

    if(!data.success) {
        res.json({
            message: "Incorrect credential"
        })
        return; 
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware , async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);

    if(!parsedData.success) {
        res.json({
            message: "Incorrect credential"
        })
        return; 
    }
    //@ts-ignore
    const userId = req.userId;

    try { 
    const room = await prismaClient.room.create({
        data: {
            slug: parsedData.data.name,
            admin: userId

        }
    })
    

    res.json({
        roomId: room.id
    })
    } catch(e) {
        res.status(411).json({
            message: "Room already exists with this name"
        })
        
    }
})
    app.get("/chats/:roomId", async (req, res) => {
    const roomId = Number(req.params.roomId);
    const messages = await prismaClient.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    });

    res.json({
        messages
    })
})

app.get("/chats/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    });

    res.json({
        room
    })
})



app.listen(3001);