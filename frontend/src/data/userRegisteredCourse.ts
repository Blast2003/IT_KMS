export interface UserRegisteredCourse {
    courseTitle: string;
    progress: string;
    imgUrl: string;
    courseUrl: string;
  }


  export const userRegisteredCourses: UserRegisteredCourse[] = [
    {
      courseTitle: "Advanced Network Security",
      progress: "In Progress",
      imgUrl: "https://dnsnetworks.com/_next/image?url=https%3A%2F%2Fblog.dnsnetworks.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fbenefits-of-network-security-services-ottawa-managed-IT-services.png&w=3840&q=75",
      courseUrl: "https://www.youtube.com/watch?v=pbLE7HxbhuM",
    },
    {
      courseTitle: "Cloud Architecture Fundamentals",
      progress: "Completed",
      imgUrl: "https://miro.medium.com/v2/resize:fit:933/1*BmnhE-Z5m-lu1_r9H9JS9A.png",
      courseUrl: "https://www.youtube.com/watch?v=FxI9wQBOMco",
    },
      {
      courseTitle: "Cybersecurity Best Practices",
      progress: "In Progress",
      imgUrl: "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses.jpg",
      courseUrl: "https://www.youtube.com/watch?v=8oyeKteNWx0",
    },
    {
      courseTitle: "Data Center Management",
      progress: "Not Started",
      imgUrl: "https://www.corporatevision-news.com/wp-content/uploads/2022/02/Data-Centre.jpg",
      courseUrl: "https://www.youtube.com/watch?v=DlA2p5L_osM",
    },
    {
         courseTitle: "Complete Guide to Modern Development",
          progress: "Not Started",
          imgUrl: "https://img-c.udemycdn.com/course/480x270/6314561_a452_3.jpg",
          courseUrl: "example.com/modern-dev-course",
    },
    {
          courseTitle: "Code Examples Repository",
          progress: "Not Started",
          imgUrl: "https://repository-images.githubusercontent.com/427843760/9305a492-4243-4e02-b8eb-ace047dc57b1",
          courseUrl: "example.com/code-repo",
    },
      {
          courseTitle: "Advanced Techniques Workshop",
          progress: "Not Started",
          imgUrl: "https://www.springboard.com/blog/wp-content/uploads/2022/11/14-best-computer-programming-courses-to-upskill-your-career.jpg",
          courseUrl: "example.com/advanced-workshop",
      },
  ];