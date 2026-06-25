import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom as ChatRoomComponent } from "../../../components/ChatRoom";

async function getroomId(slug: string) {
    const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
    return response.data.room.id;
}

export default async function ChatRoom({
    params
}: {
    params: {
        slug: string
    }
}) {
    const slug = params.slug;
    const roomId = await getroomId(slug);
    return <ChatRoomComponent id={roomId.toString()} />
}