
export interface Notification {
  type: string
  unreadCount: number
}

export interface User {
  id: number
  name: string
  title: string
  email: string
  avatarUrl: string
  notifications: Notification[]
  bio: string
  role: "learner" | "instructor"
  rating: number
  joinedAt: string
}

export const learners: User[] = [
  {
    id: 1,
    name: "John Smith",
    title: "Fresher",
    email: "john.smith@example.com",
    avatarUrl: "https://res.cloudinary.com/dqgdjmyrs/image/upload/v1738749944/o0kuma8cvklsombutc8q.jpg",
    notifications: [
      { type: "reviewReply", unreadCount: 3 },
      { type: "newCourse", unreadCount: 1 },
    ],
    bio: "",
    role: "learner",
    rating: 0,
    joinedAt: "2024-08-01T09:15:00Z",
  },
]

export const instructors: User[] = [
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Cloud Architecture Expert",
    email: "michael-chen@example.com",
    avatarUrl: "https://res.cloudinary.com/dqgdjmyrs/image/upload/v1724142786/atrvyo6k4spa8q3fxx7v.jpg",
    notifications: [
      { type: "reviewReply", unreadCount: 3 },
      { type: "newCourse", unreadCount: 1 },
    ],
    bio: "Dr. Chen has 15 years of experience…",
    role: "instructor",
    rating: 4.9,
    joinedAt: "2024-08-01T09:15:00Z",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Cybersecurity Analyst",
    email: "sarah.johnson@example.com",
    avatarUrl: "https://res.cloudinary.com/dqgdjmyrs/image/upload/v1724124769/dizlohblxkluqtrdbhyu.jpg",
    notifications: [
      { type: "reviewReply", unreadCount: 0 },
      { type: "newCourse", unreadCount: 0 },
    ],
    bio: "Sarah is a seasoned cybersecurity analyst with over 10 years of experience in network security and threat intelligence.",
    role: "instructor",
    rating: 4.7, 
    joinedAt: "2024-11-15T14:30:00Z",
  },
]