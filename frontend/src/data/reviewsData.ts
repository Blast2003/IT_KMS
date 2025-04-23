import { instructors } from "./users";

export const reviewsData = [
    {
      id: instructors[0].id,
      name: instructors[0].name,
      avatarUrl: instructors[0].avatarUrl,
      rating: instructors[0].rating,
      text: `This course exceeded my expectations. The instructor's teaching style is clear and engaging, and the practical exercises helped me grasp complex concepts easily.`,
      date: "2 days ago",
    },
    {
      id: instructors[1].id,
      name: instructors[1].name,
      avatarUrl: instructors[1].avatarUrl,
      rating: instructors[1].rating,
      text: `Great course content and structure. Would have liked more advanced examples, but overall it's a solid foundation for beginners.`,
      date: "1 week ago",
    },
  ];