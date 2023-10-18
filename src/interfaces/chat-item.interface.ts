export interface ChatItemInterface {
    id: number
    categoryId: number
    name: string
    sender: string | null
    photoUrl: string
    lastMessage: string | null
    isOnline?: boolean
    dateTime: string
}
