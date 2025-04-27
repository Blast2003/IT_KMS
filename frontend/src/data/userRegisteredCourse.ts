export interface UserRegisteredCourse {
    courseTitle: string;
    progress: string;
    summary : string;
    rating: number;
    createdAt: string;
    imgUrl: string;
    courseUrl: string;
  }


  export const userRegisteredCourses: UserRegisteredCourse[] = [
    {
      courseTitle: "Advanced Network Security",
      summary: "Master essential concepts of network security protocols, firewall configuration, and threat detection systems.",
      progress: "In Progress",
      rating : 4.5,
      createdAt: "2025-01-15T10:00:00Z" ,
      imgUrl: "https://dnsnetworks.com/_next/image?url=https%3A%2F%2Fblog.dnsnetworks.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fbenefits-of-network-security-services-ottawa-managed-IT-services.png&w=3840&q=75",
      courseUrl: "https://www.youtube.com/watch?v=pbLE7HxbhuM",
    },
    {
      courseTitle: "Cloud Architecture Fundamentals",
      summary: "Master the fundamentals of cloud architecture with hands-on exercises and real-world examples. Learn to design scalable, secure, and cost-effective cloud solutions.",
      rating: 4.9,
      createdAt: "2025-01-15T10:00:00Z",
      progress: "Completed",
      imgUrl: "https://miro.medium.com/v2/resize:fit:933/1*BmnhE-Z5m-lu1_r9H9JS9A.png",
      courseUrl: "https://www.youtube.com/watch?v=FxI9wQBOMco",
    },
      {
      courseTitle: "Cybersecurity Best Practices",
      progress: "In Progress",
      summary: "Learn the best practices in cybersecurity to defend against real-world attacks. This course walks you through securing networks, systems, and data using industry-standard tools and strategies. Ideal for IT professionals and anyone looking to build a strong foundation in cybersecurity.",
      rating: 5.0,
      createdAt: "2025-01-15T10:00:00Z",
      imgUrl: "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses.jpg",
      courseUrl: "https://www.youtube.com/watch?v=8oyeKteNWx0",
    },
    {
      courseTitle: "Data Center Management",
      progress: "Not Started",
      summary: "Master the essential components of data center management including hardware provisioning, power and cooling systems, infrastructure monitoring, and disaster recovery. Learn to manage data center operations at scale with best practices from real-world environments.",
      rating: 4.9,
      createdAt: "2025-01-15T10:00:00Z",
      imgUrl: "https://www.corporatevision-news.com/wp-content/uploads/2022/02/Data-Centre.jpg",
      courseUrl: "https://www.youtube.com/watch?v=DlA2p5L_osM",
    },
    {
         courseTitle: "Complete Guide to Modern Development",
          progress: "Not Started",
          summary: "A comprehensive guide covering all aspects of modern development practices and tools.",
          rating: 4.7,
          createdAt: "2025-04-22T12:00:00Z",
          imgUrl: "https://img-c.udemycdn.com/course/480x270/6314561_a452_3.jpg",
          courseUrl: "example.com/modern-dev-course",
    },
    {
          courseTitle: "Code Examples Repository",
          progress: "Not Started",
          summary: "Collection of practical code examples and solutions for common programming challenges.",
          rating: 4.5,
          createdAt: "2025-04-22T12:00:00Z",
          imgUrl: "https://repository-images.githubusercontent.com/427843760/9305a492-4243-4e02-b8eb-ace047dc57b1",
          courseUrl: "example.com/code-repo",
    },
      {
          courseTitle: "Advanced Techniques Workshop",
          progress: "Not Started",
          summary: "Video workshop covering advanced programming techniques and best practices.",
          rating: 4.8,
          createdAt: "2025-04-22T12:00:00Z",
          imgUrl: "https://www.springboard.com/blog/wp-content/uploads/2022/11/14-best-computer-programming-courses-to-upskill-your-career.jpg",
          courseUrl: "example.com/advanced-workshop",
      },
  ];