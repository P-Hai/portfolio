const BASE_URL = "/portfolio";

export const translations = {
  en: {
    nav: {
      logo: "Hai's Portfolio",
      links: {
        work: "Work",
        experience: "Experience",
        skills: "Skills",
        certifications: "Certifications",
      },
      contact: "Contact me",
    },
    hero: {
      badge: "Welcome to my portfolio",
      line1: "Building data for",
      line2: "into Real Projects",
      line3: "that Deliver Results",
      description:
        "Nguyen Cao Phuc Hai - Analytics Engineer | Data Engineer | Data Analyst.",
      cta: "See My Work",
      words: [
        { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Speed", imgPath: BASE_URL + "/images/speed.svg" },
        { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Growth", imgPath: BASE_URL + "/images/growth.svg" },
        { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Speed", imgPath: BASE_URL + "/images/speed.svg" },
        { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Growth", imgPath: BASE_URL + "/images/growth.svg" },
      ],
    },
    counter: [
      { value: 50, suffix: "+", label: "Projects" },
      { value: 80, suffix: "+", label: "Stakeholders" },
      { value: 100, suffix: "+", label: "Datasets" },
      { value: 90, suffix: "%", label: "Manual Work Automated" },
    ],
    showcase: {
      project1: {
        title: "User Recommendation System",
        desc: "Built a scalable user recommendation system powered by automated data pipelines, transforming raw behavioral data into personalized predictions.",
      },
      project2: {
        title: "The Library Management Platform",
      },
      project3: {
        title: "YC Directory - A Startup Showcase App",
      },
    },
    experience: {
      sectionBadge: "My Career Overview",
      sectionTitle: "Work Experience",
      responsibilities: "Responsibilities",
      cards: [
        {
          title: "Analytics Engineer",
          date: "April 2025 - Present",
          review:
            "Hai brings strong analytical thinking and solid technical expertise to Affina, contributing to improved data quality and optimized reporting performance. As an Analytics Engineer, he focuses on building and standardizing scalable data models, ensuring accurate and reliable datasets that effectively support business decision-making.",
          responsibilities: [
            "Design, build, and maintain scalable data models and ELT pipelines to ensure reliable and well-structured datasets.",
            "Transform raw data into clean, validated, and business-ready insights to support reporting and decision-making.",
            "Collaborate with stakeholders to define data requirements, improve data quality, and optimize analytics performance.",
          ],
        },
      ],
    },
    techStack: {
      sectionBadge: "What I Bring to the Table",
      sectionTitle: "How I Can Contribute & My Key Skills",
      icons: [
        { name: "Python" },
        { name: "Cloud DataWarehouse" },
        { name: "Data Modeling" },
        { name: "Advanced SQL" },
        { name: "Data Pipelines" },
      ],
    },
    certifications: {
      sectionBadge: "Qualifications",
      sectionTitle: "Certifications",
      obtained: "Obtained",
      items: [
        {
          title: "B2 APTIS Certificate",
          issuer: "British Council",
          date: "2025",
          description: "English Language Proficiency",
        },
        {
          title: "SQL Certificate - HackerRank",
          issuer: "Professional SQL Developer",
          date: "2025",
          description: "Database Management & Query Optimization",
        },
        {
          title: "Power BI Certificate - IBEP",
          issuer: "Microsoft Power BI",
          date: "2024",
          description: "Data Visualization & Business Intelligence",
        },
      ],
    },
    contact: {
      sectionBadge: "Have questions or ideas? Let's talk!",
      sectionTitle: "Get in Touch - Let's Connect",
      nameLabel: "Your name",
      namePlaceholder: "What's your name?",
      emailLabel: "Your Email",
      emailPlaceholder: "What's your email address?",
      messageLabel: "Your Message",
      messagePlaceholder: "Drop me a message.",
      send: "Send Message",
      sending: "Sending...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  vi: {
    nav: {
      logo: "Portfolio Hải",
      links: {
        work: "Dự Án",
        experience: "Kinh Nghiệm",
        skills: "Kỹ Năng",
        certifications: "Chứng Chỉ",
      },
      contact: "Liên hệ",
    },
    hero: {
      badge: "Chào mừng đến với portfolio của tôi",
      line1: "Xây dựng dữ liệu",
      line2: "đưa vào Thực Tế",
      line3: "mang lại Kết Quả Thực",
      description:
        "Nguyễn Cao Phúc Hải - Kỹ sư Phân tích | Kỹ sư Dữ liệu | Chuyên viên Phân tích Dữ liệu.",
      cta: "Dự Án Của Tôi",
      words: [
        { text: "Mở Rộng", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Nhanh", imgPath: BASE_URL + "/images/speed.svg" },
        { text: "Ổn Định", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Tin cậy", imgPath: BASE_URL + "/images/growth.svg" },
        { text: "Mở Rộng", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Nhanh", imgPath: BASE_URL + "/images/speed.svg" },
        { text: "Ổn Định", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Tin cậy", imgPath: BASE_URL + "/images/growth.svg" },
      ],
    },
    counter: [
      { value: 50, suffix: "+", label: "Dự Án" },
      { value: 80, suffix: "+", label: "Khách Hàng" },
      { value: 100, suffix: "+", label: "Bộ Dữ Liệu" },
      { value: 90, suffix: "%", label: "Công Việc Tự Động Hóa" },
    ],
    showcase: {
      project1: {
        title: "Hệ Thống Gợi Ý Người Dùng",
        desc: "Xây dựng hệ thống gợi ý người dùng có thể mở rộng, được hỗ trợ bởi các pipeline dữ liệu tự động, chuyển đổi dữ liệu hành vi thô thành các dự đoán cá nhân hóa.",
      },
      project2: {
        title: "Nền Tảng Quản Lý Thư Viện",
      },
      project3: {
        title: "YC Directory - Ứng Dụng Giới Thiệu Startup",
      },
    },
    experience: {
      sectionBadge: "Tổng Quan Sự Nghiệp",
      sectionTitle: "Kinh Nghiệm Làm Việc",
      responsibilities: "Trách Nhiệm",
      cards: [
        {
          title: "Kỹ Sư Phân Tích",
          date: "Tháng 4 năm 2025 - Hiện tại",
          review:
            "Hải mang đến tư duy phân tích mạnh mẽ và chuyên môn kỹ thuật vững chắc cho Affina, đóng góp vào việc cải thiện chất lượng dữ liệu và tối ưu hóa hiệu suất báo cáo. Là Kỹ sư Phân tích, anh tập trung vào việc xây dựng và chuẩn hóa các mô hình dữ liệu có khả năng mở rộng, đảm bảo các tập dữ liệu chính xác và đáng tin cậy hỗ trợ hiệu quả việc ra quyết định kinh doanh.",
          responsibilities: [
            "Thiết kế, xây dựng và duy trì các mô hình dữ liệu và pipeline ELT có khả năng mở rộng để đảm bảo bộ dữ liệu đáng tin cậy và có cấu trúc tốt.",
            "Chuyển đổi dữ liệu thô thành thông tin sạch, đã được xác thực và sẵn sàng cho doanh nghiệp để hỗ trợ báo cáo và ra quyết định.",
            "Hợp tác với các bên liên quan để xác định yêu cầu dữ liệu, cải thiện chất lượng dữ liệu và tối ưu hóa hiệu suất phân tích.",
          ],
        },
      ],
    },
    techStack: {
      sectionBadge: "Những Gì Tôi Mang Lại",
      sectionTitle: "Kỹ Năng Chính Của Tôi",
      icons: [
        { name: "Python" },
        { name: "Kho Dữ Liệu Đám Mây" },
        { name: "Mô Hình Hóa Dữ Liệu" },
        { name: "SQL Nâng Cao" },
        { name: "Pipeline Dữ Liệu" },
      ],
    },
    certifications: {
      sectionBadge: "Bằng Cấp & Chứng Chỉ",
      sectionTitle: "Chứng Chỉ",
      obtained: "Ngày cấp",
      items: [
        {
          title: "Chứng Chỉ APTIS B2",
          issuer: "Hội Đồng Anh",
          date: "2025",
          description: "Năng Lực Tiếng Anh",
        },
        {
          title: "Chứng Chỉ SQL - HackerRank",
          issuer: "Lập Trình Viên SQL Chuyên Nghiệp",
          date: "2025",
          description: "Quản Lý Cơ Sở Dữ Liệu & Tối Ưu Truy Vấn",
        },
        {
          title: "Chứng Chỉ Power BI - IBEP",
          issuer: "Microsoft Power BI",
          date: "2024",
          description: "Trực Quan Hóa Dữ Liệu & Thông Minh Kinh Doanh",
        },
      ],
    },
    contact: {
      sectionBadge: "Có câu hỏi hay ý tưởng? Hãy nói chuyện!",
      sectionTitle: "Liên Hệ - Hãy Kết Nối",
      nameLabel: "Tên của bạn",
      namePlaceholder: "Bạn tên gì?",
      emailLabel: "Email của bạn",
      emailPlaceholder: "Địa chỉ email của bạn?",
      messageLabel: "Tin nhắn",
      messagePlaceholder: "Để lại tin nhắn cho tôi.",
      send: "Gửi Tin Nhắn",
      sending: "Đang gửi...",
    },
    footer: {
      rights: "Đã đăng ký bản quyền.",
    },
  },
};
