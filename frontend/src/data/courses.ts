
export interface Course {
  id: number
  category: string
  type: string
  title: string
  price: number
  rating: number
  reviewsCount: number
  summary: string
  description: string
  prerequisites: string[]
  whatYouGet: string[]
  duration: string
  certificateAvailable: boolean
  language: string
  source: string
  imgUrl: string
  createdAt: string
  updatedAt: string
}

export const courses: Course[] = [
    {
        "id": 1,
        "category": "Network & Security" ,
        "type": "video",
        "title": "Advanced Network Security",
        "price": 29.00,
        "rating": 4.5,
        "reviewsCount": 128,
        "summary": "Master essential concepts of network security protocols, firewall configuration, and threat detection systems.",
        "description": "This comprehensive course covers advanced network security concepts and implementation strategies. You'll learn how to:\n  • Configure enterprise‑grade firewalls and intrusion detection systems\n  • Implement VPN solutions and secure remote access\n  • Perform security audits and vulnerability assessments\n  • Deploy encryption protocols and certificate management\n  • Handle incident response and threat mitigation",
        "prerequisites": [
          "Basic networking knowledge",
          "TCP/IP fundamentals",
          "Basic Linux commands"
        ],
        "whatYouGet": [
          "6 hours of video content",
          "Downloadable resources",
          "Completion certificate"
        ],
        "duration": "6h",
        "certificateAvailable": true,
        "language": "English",
        "source": "https://www.youtube.com/watch?v=pbLE7HxbhuM",
        "imgUrl": "https://dnsnetworks.com/_next/image?url=https%3A%2F%2Fblog.dnsnetworks.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fbenefits-of-network-security-services-ottawa-managed-IT-services.png&w=3840&q=75",
        "createdAt": "2025-01-15T10:00:00Z",
        "updatedAt": "2025-03-20T14:30:00Z"
      },
      {
        "id": 2,
        "category": "Servers & Other IT" ,
        "type": "video",
        "title": "Cloud Architecture Fundamentals",
        "price": 29.00,
        "rating": 4.9,
        "reviewsCount": 428,
        "summary": "Master the fundamentals of cloud architecture with hands-on exercises and real-world examples. Learn to design scalable, secure, and cost-effective cloud solutions.",
        "description": "This comprehensive course covers everything you need to know about cloud architecture fundamentals. You’ll learn about:\n- Cloud computing concepts and service models\n- Infrastructure as Code (IaC) and automation\n- Scalability and high availability patterns\n- Security and compliance in the cloud\n- Cost optimization strategies",
        "prerequisites": [
          "Basic networking knowledge",
          "TCP/IP fundamentals",
          "Basic Linux commands"
        ],
        "whatYouGet": [
          "6 hours of video content",
          "Downloadable resources",
          "Completion certificate"
        ],
        "duration": "6h",
        "certificateAvailable": true,
        "language": "English",
        "source": "https://www.youtube.com/watch?v=FxI9wQBOMco",
        "imgUrl":"https://miro.medium.com/v2/resize:fit:933/1*BmnhE-Z5m-lu1_r9H9JS9A.png" ,
        "createdAt": "2025-01-15T10:00:00Z",
        "updatedAt": "2025-03-20T14:30:00Z"
      },
      {
        "id": 3,
        "category": "Network & Security" ,
        "type": "video",
        "title": "Cybersecurity Best Practices",
        "price": 29.00,
        "rating": 5.0,
        "reviewsCount": 428,
        "summary": "Learn the best practices in cybersecurity to defend against real-world attacks. This course walks you through securing networks, systems, and data using industry-standard tools and strategies. Ideal for IT professionals and anyone looking to build a strong foundation in cybersecurity.",
        "description": "This hands-on course introduces essential cybersecurity practices for individuals and IT professionals. Learn how to protect systems and networks from cyber threats by applying proven strategies. You'll gain skills in:\n- Identifying and mitigating common cyber threats (phishing, malware, ransomware)\n- Securing endpoints, applications, and networks\n- Implementing strong authentication and access controls\n- Conducting basic security audits and risk assessments\n- Applying best practices for data encryption and secure communications",
        "prerequisites": [
          "Basic understanding of computer networks",
          "Familiarity with operating systems (Windows/Linux)",
          "Interest in IT security and threat prevention"
        ],
        "whatYouGet": [
          "6 hours of video content",
          "Downloadable resources",
          "Completion certificate"
        ],
        "duration": "6h",
        "certificateAvailable": true,
        "language": "English",
        "source": "https://www.youtube.com/watch?v=8oyeKteNWx0",
        "imgUrl": "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses.jpg",
        "createdAt": "2025-01-15T10:00:00Z",
        "updatedAt": "2025-03-20T14:30:00Z"
      },
      {
        "id": 4,
        "category": "Servers & Other IT" ,
        "type": "video",
        "title": "Data Center Management",
        "price": 29.00,
        "rating": 4.9,
        "reviewsCount": 428,
        "summary": "Master the essential components of data center management including hardware provisioning, power and cooling systems, infrastructure monitoring, and disaster recovery. Learn to manage data center operations at scale with best practices from real-world environments.",
        "description": "This comprehensive course provides in-depth knowledge on managing modern data centers efficiently and securely. You’ll learn how to:\n- Design and operate physical and virtual data center infrastructure\n- Implement robust cooling and power systems\n- Manage servers, storage, and networking equipment\n- Use monitoring tools for performance and fault management",
        "prerequisites": [
          "Basic understanding of IT infrastructure",
          "Familiarity with networking concepts",
          "Some experience with server operating systems (Windows/Linux)"
        ],
        "whatYouGet": [
          "6 hours of video content",
          "Downloadable resources and tools",
          "Completion certificate"
        ],
        "duration": "6h",
        "certificateAvailable": true,
        "language": "English",
        "source": "https://www.youtube.com/watch?v=DlA2p5L_osM",
        "imgUrl": "https://www.corporatevision-news.com/wp-content/uploads/2022/02/Data-Centre.jpg",
        "createdAt": "2025-01-15T10:00:00Z",
        "updatedAt": "2025-03-20T14:30:00Z"
      },
      {
        "id": 5,
        "category": "Servers & Other IT",
        "type": "pdf",
        "title": "Complete Guide to Modern Development",
        "price": 49.00,
        "rating": 4.7,
        "reviewsCount": 210,
        "summary": "A comprehensive guide covering all aspects of modern development practices and tools.",
        "description": "This course provides a complete overview of modern web development, covering front-end and back-end technologies, development workflows, and deployment strategies. Learn the latest tools and techniques to build modern web applications.",
        "prerequisites": [
          "Basic HTML, CSS, and JavaScript knowledge",
          "Familiarity with command-line interface",
          "Understanding of version control systems (e.g., Git)"
        ],
        "whatYouGet": [
          "10 hours of video content",
          "Downloadable code samples",
          "Access to a community forum",
          "Project-based learning",
          "Certificate of completion"
        ],
        "duration": "10h",
        "certificateAvailable": true,
        "language": "English",
        "source": "example.com/modern-dev-course",
        "imgUrl": "https://img-c.udemycdn.com/course/480x270/6314561_a452_3.jpg",
        "createdAt": "2025-04-22T12:00:00Z",
        "updatedAt": "2025-04-22T12:00:00Z"
      },
      {
        "id": 6,
        "category": "Servers & Other IT",
        "type": "code",
        "title": "Code Examples Repository",
        "price": 29.00,
        "rating": 4.5,
        "reviewsCount": 150,
        "summary": "Collection of practical code examples and solutions for common programming challenges.",
        "description": "This resource provides a curated collection of code examples and solutions for various programming languages and tasks. It's designed to help developers quickly find and implement solutions to common problems.",
        "prerequisites": [
          "Basic programming knowledge in at least one language"
        ],
        "whatYouGet": [
          "Access to a searchable code repository",
          "Regularly updated examples",
          "Examples in multiple programming languages"
        ],
        "duration": "Self-paced",
        "certificateAvailable": false,
        "language": "English",
        "source": "example.com/code-repo",
        "imgUrl": "https://repository-images.githubusercontent.com/427843760/9305a492-4243-4e02-b8eb-ace047dc57b1",
        "createdAt": "2025-04-22T12:00:00Z",
        "updatedAt": "2025-04-22T12:00:00Z"
      },
        {
        "id": 7,
        "category": "Servers & Other IT",
        "type": "video",
        "title": "Advanced Techniques Workshop",
        "price": 79.00,
        "rating": 4.8,
        "reviewsCount": 85,
        "summary": "Video workshop covering advanced programming techniques and best practices.",
        "description": "This workshop dives into advanced programming techniques, design patterns, and best practices for building scalable and maintainable applications. It's suitable for experienced developers looking to enhance their skills.",
        "prerequisites": [
          "Solid understanding of programming fundamentals",
          "Experience with web development frameworks",
          "Familiarity with software design principles"
        ],
        "whatYouGet": [
          "8 hours of workshop video content",
          "Live coding demonstrations",
          "Q&A sessions",
          "Access to workshop materials",
          "Certificate of completion"
        ],
        "duration": "8h",
        "certificateAvailable": true,
        "language": "English",
        "source": "example.com/advanced-workshop",
        "imgUrl": "https://www.springboard.com/blog/wp-content/uploads/2022/11/14-best-computer-programming-courses-to-upskill-your-career.jpg",
        "createdAt": "2025-04-22T12:00:00Z",
        "updatedAt": "2025-04-22T12:00:00Z"
      }
  
]