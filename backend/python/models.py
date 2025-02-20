from datetime import datetime


# Need to add an ORM to this
class Status:
    id: int
    status_type: str


class ChatType:
    id: int
    type: str


class User:
    id: int
    username: str
    hashed_password: str
    salt: str
    first_name: str
    last_name: str
    bio: str
    status: Status
    created_at: datetime


class Chat:
    id: int
    name: str
    type: ChatType
    created_at: datetime


class UserChat:
    id: int
    user: User
    chat: Chat


class Message:
    id: int
    user: User
    chat: Chat
    body: str
    timestamp: datetime
