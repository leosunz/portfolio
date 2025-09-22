import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    TechnicalEnglish,
    SuperSocialy,
    NeconPolska,
    Skyscanner,
    Disbug
  } from "../assets";
  
  export const navLinks = [
    {
      id: 'about',
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Professional Insight",
      icon: web,
    },
    {
      title: "Forward Thinking",
      icon: backend,
    },
    {
      title: "Strategic Decision",
      icon: mobile,
    },
    {
      title: "Agile Environment",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      icon: git,
      company_name: "Freelance, WFH, Contract",
      period: "2022-Present",
      title: "Full Stack Developer",
      points: [
        "Developed & Deployed Technical English for Aviation where customers and students could buy online courses and certificates by using React for frontend, Node.js for backend api, SQL Server for database.",
        "Developed & Delivered electrical devices monitor system for Necon, by using C# .NET for backend, Razor for frontend, SQL Server for database, CouchDB for electrical device data.",
        "Migrated an online web application to sell Instagram likes, followers, and views from PHP to a Wordpress application, SuperSocialy",
        "Participated in online flight booking platform by using React.js for frontend, node.js for backend api, Firebase for database, Skyscanner."
      ]
    },
    {
      icon: git,
      company_name: "WWWEST SOLUTIONS, Remote",
      period: "2020-2021",
      title: "Frontend & Backend Developer",
      points: [
        "Participated in development of Reputation Management Platform as an extra-increased member, and provided technical troubleshooting, overall refinement in backend api to reduce latency by 20%, then integrated api to frontend.",
        "Worked with graphic artists to fully convert UI/UX frames into pixel perfect user interface to build exclusive user-experience and customer satisfaction.",
        "Focused on creation of perfect table schemas and their relationship in SQL/NoSQL databases to provide customers best extensive solution for future update."
      ]
    },
    {
      icon: git,
      company_name: "Freelance",
      period: "2017-2019",
      title: "Freelancer",
      points: [
        "Learned & Practiced SPA based concepts, key advantages such as two-way binding, client-side rendering, seamless user experience.",
        "Practiced development of SPA reusable component prototypes.",
        "Provided bug fixing and maintenance of Magento-based ecommerce for local supermarket owners."
      ]
    },
    {
      icon: git,
      company_name: "IT Consultis",
      period: "2014-2017",
      title: "IT Engineer",
      points: [
        "Developed & Delivered mobile apps (iOS - iPhone4G,5,6/6+, iPad and Android - Samsung Galaxy) by using ObjectiveC, Swift (XCode), Java (Eclipse, Android Studio), Firebase as a solution for clouding storage, push notification, customer management. ",
        "Adopted newly released Apple's iCloud Synchronization into iOS photo gallery mobile application offering a ultra-smooth image loading.",
        "Responsible for planning and implementation of PHP-based applications by using Javascript, jQuery, Ajax, and frameworks such as Laravel, CodeIgnitor, Zend, and etc.",
        "Provided optimization of components for cross-browser solutions, SEO promotion and better customer experience.",
        " Helped colleges with their work for high-quality code product and building reusable components, data structures and database table schemas."
      ]
    },
    {
      icon: git,
      company_name: "Tsinghua University Library",
      period: "2010-2013",
      title: " IT Engineer/Database Administrator",
      points: [
        "Served as a software engineer, responsible for development and maintenance of library-business platforms using C++, Java Spring MVC framework, and OracleDB.",
        "Provided maintenance of over a numberous millions of rows-recorded Oracle Database with secure access, grants, procedures, migration, clustering, search engine and query optimization.",
        "Participated in development of splunk-based monitoring system providing real-time logs, error alerts, and access to database server by using MFC.",
        "Developed the software that automatically extracts metadata from digital data and transforms them into international standardized XML format to store into OracleDB.",
        "Participated in development of room & book reservation system, privilege opening system by using MVC-based J2EE platform.",
        "Participated in development of dictionary that was equipped with encrypted secure data for students."
      ]
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "You don't have to work as a freelancer. Please start up your own company after building your site and funds.",
      name: "Marcin Szpecht",
      designation: "Engineer",
      company: "Dreamline",
      image: "",
    },
    {
      testimonial:
        "Don't leave him out. You are just at right place. He is a reliable with a full transparency and trust.",
      name: "Andriy Tverdokhlib",
      designation: "DevOps Engineer",
      company: "YozmaTech",
      image: "",
    },
    {
      testimonial:
        "He is an incredible coder. An amazing, attentive, kindly person with exact solution to any problems.",
      name: "Jaser Jsk",
      designation: "Customer",
      company: "Sweden",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Technical English",
      link: "https://technicalenglish.com",
      description:
        "Developed & Deployed Technical English that provides materials, courses, certificates for formal and precise English designed for experts and users within a specific technical domain, ensuring clarity and reducing ambiguity in contexts where the meaning of ordinary words can change significantly. ",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
        {
          name: "SQL Server",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
        {
          name: "Nginx",
          color: "orange-text-gradient",
        },
      ],
      image: TechnicalEnglish,
      source_code_link: "https://github.com/leosunz/technicalenglish-frontend, backend",
    },
    {
      name: "NeconPolska",
      link: "http://necon.sk-soft.pl",
      description:
        "Developed & Delivered Necon Polska - a backend platform to monitor, control, and manage the devices that remove bacteria, viruses, fungi, molds, algae and microorganisms, especially Legionella bacteria – using the latest water disinfection technology using copper and silver ions",
      tags: [
        {
          name: "ASP.NET",
          color: "blue-text-gradient",
        },
        {
          name: "Razor",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server",
          color: "pink-text-gradient",
        },
        {
          name: "CouchDB",
          color: "orange-text-gradient",
        },
        {
          name: "Multi-Threading",
          color: "pink-text-gradient",
        },
      ],
      image: NeconPolska,
      source_code_link: "https://github.com/leosunz/necon-soft",
    },
    {
      name: "Supersocialy",
      link: "https://supersocialy.com",
      description:
        "Migrated an online ecommerce service that sells a bulk of follows, likes, views, comments for Instagram and Tiktok, from PHP web application to a Wordpress with professional user interface, for promoting customer-experience, upgrading features and ease-of-inventory management.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "WooCommerce",
          color: "green-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
        {
          name: "Paypal",
          color: "orange-text-gradient",
        },
        {
          name: "Customization",
          color: "blue-text-gradient",
        },
      ],
      image: SuperSocialy,
      source_code_link: "https://github.com/",
    },
    {
      name: "Skyscanner",
      link: "https://www.skyscanner.com",
      description:
        "Participated in development of online booking platform where users could compare flight prices from all major airlines, travel agents and nearby hotels, and find the cheapest tickets to all your favourite destinations.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "AntD",
          color: "orange-text-gradient",
        },
        {
          name: "Search Bar",
          color: "blue-text-gradient",
        },

      ],
      image: Skyscanner,
      source_code_link: "https://github.com",
    },
    {
      name: "Disbug",
      link: "https://chromewebstore.google.com/detail/disbug-superior-bug-repor/ikogehheclkeaipcngkhdpnmfhjhpdio?hl=en",
      description:
        "Participated in google chrome extension that captures bugs with screeshots, screen recording, console logs, network logs, user events and upload them to server-side management system equipped by cloud native storage.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "NestJS",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
        {
          name: "AWS S3 Bucket",
          color: "blue-text-gradient",
        },
      ],
      image: Disbug,
      source_code_link: "https://github.com/leosunz/chrome-extension-share-screen",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
