/**
 * Portfolio Data & Configurations for Muhammed Faizal M
 * Flutter Developer & Mobile App Engineer
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammed Faizal M",
    title: "Flutter Developer | Mobile App Engineer",
    email: "mhdfaizalofficial@gmail.com",
    phone: "+91 8075374600",
    phoneDisplay: "+91 8075374600",
    location: "Kerala, India",
    availability: "Open to Opportunities",
    githubUrl: "https://github.com/muhammedfaizalm",
    linkedinUrl: "https://linkedin.com/in/muhammed-faizal-flutter",
    resumeUrl: "assets/resume/Muhammed_Faizal_Flutter_Developer_Resume.pdf",
    bio: "I build scalable, high-performance mobile applications with Flutter and Dart, combining clean architecture, intuitive UI/UX, and reliable backend integrations to create meaningful digital experiences.",
    aboutSummary: "I'm a Flutter Developer with professional experience building scalable, cross-platform mobile applications. I specialize in Flutter, Dart, Firebase, REST API integration, state management, and clean architecture. I enjoy solving real-world problems, building intuitive interfaces, and developing maintainable applications that deliver a great user experience."
  },

  typingRoles: [
    "Flutter Developer",
    "Cross-Platform App Developer",
    "Firebase Integration Specialist",
    "Mobile App Engineer"
  ],

  highlights: [
    {
      icon: "bi bi-phone-flip",
      title: "Cross-Platform Mobile Development",
      description: "Crafting fluid, high-frame-rate native-feel applications for iOS and Android from a single performant Dart codebase."
    },
    {
      icon: "bi bi-layers-half",
      title: "Scalable Application Architecture",
      description: "Applying Clean Architecture, SOLID principles, and modular decoupling to ensure enterprise-grade maintainability."
    },
    {
      icon: "bi bi-cloud-arrow-up",
      title: "API Integration & Backend Connectivity",
      description: "Seamlessly connecting apps to Cloud Firestore, Firebase Auth, FCM push notifications, and high-throughput REST APIs."
    }
  ],

  featuredProjects: [
    {
      id: "blessing-app",
      title: "Blessing App",
      category: "Islamic Lifestyle Companion",
      tagline: "Comprehensive Islamic spiritual routine & prayer tracking application",
      image: "assets/images/projects/blessing_app.jpg",
      description: "A mobile application designed to support Islamic daily routines and spiritual activities with precision astronomical calculations, responsive clean UI, and automated reminders.",
      techStack: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "Local Notifications", "Geolocation"],
      features: [
        "Location-based prayer time tracking with automated astronomical calculations",
        "Fasting tracker with proactive reminders and daily progress monitoring",
        "Structured Quran reading module with smooth typography and offline reading",
        "Prayer reminder notifications with customizable alarm tones and alerts",
        "Responsive interface and scalable clean architecture for zero stutter"
      ],
      architecture: "Clean Architecture (Domain, Data, and Presentation layers) with Repository Pattern and local SQLite / SharedPreferences cache for offline support.",
      github: "https://github.com/muhammedfaizalm/blessing-app",
      demo: "#"
    },
    {
      id: "ncc-management",
      title: "NCC Management App",
      category: "Cadet and Officer Communication",
      tagline: "Real-time communication and attendance tracking platform for military cadets",
      image: "assets/images/projects/ncc_management.jpg",
      description: "An operational portal engineered to streamline communication, official drill attendance, and command notices between NCC officers and registered cadets.",
      techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Cloud Messaging", "Role-Based Access"],
      features: [
        "Cadet attendance tracking system with instant drill reporting and parades logs",
        "Officer-cadet direct communication channels and broadcast announcements",
        "Real-time data synchronization using Firebase Cloud Firestore",
        "Secure role-based authentication separating Officer privileges from Cadet profiles",
        "Instant push notifications for urgent drills, schedule changes, and notices"
      ],
      architecture: "BLoC / Provider state management with Firestore real-time stream subscriptions and Firebase Security Rules enforcement.",
      github: "https://github.com/muhammedfaizalm/ncc-management",
      demo: "#"
    },
    {
      id: "expenxo",
      title: "Expenxo",
      category: "Personal Expense Tracker",
      tagline: "Intuitive financial dashboard with local database persistence",
      image: "assets/images/projects/expenxo.jpg",
      description: "A modern personal expense tracker designed to help users budget, visualize monthly financial flow, and retain total data privacy through fast offline-first storage.",
      techStack: ["Flutter", "Dart", "Hive", "SQLite", "GetX", "Data Visualization"],
      features: [
        "Categorized expense tracking with custom tags and currency options",
        "Daily, weekly, and monthly expense reports with interactive visual charts",
        "Real-time financial dashboard displaying net balance, savings rate, and spending caps",
        "Ultra-fast local persistence utilizing Hive NoSQL and SQLite databases",
        "Export capabilities for personal accounting and budget retrospectives"
      ],
      architecture: "Local-first architecture using Hive boxes and SQLite queries, with reactive GetX controllers for instant UI updates.",
      github: "https://github.com/muhammedfaizalm/expenxo",
      demo: "#"
    },
    {
      id: "chatifly",
      title: "Chatifly",
      category: "Real-Time Chat Application",
      tagline: "Instant peer-to-peer and group messaging platform with cloud sync",
      image: "assets/images/projects/chatifly.jpg",
      description: "A fast, modern real-time mobile chat application built for 1-on-1 and group conversations, featuring live typing status, media sharing, and reliable cloud messaging.",
      techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "FCM", "Clean Architecture"],
      features: [
        "One-to-one real-time text messaging with read receipts and delivery flags",
        "Group chat functionality with dynamic member administration",
        "Secure Firebase Authentication with phone and email authentication",
        "Low-latency Firestore snapshot synchronization for immediate messages",
        "Push notifications powered by Firebase Cloud Messaging (FCM)",
        "Scalable clean architecture with distinct entity models and repositories"
      ],
      architecture: "Clean Architecture coupled with Firebase Cloud Firestore snapshot listeners and local media caching.",
      github: "https://github.com/muhammedfaizalm/chatifly",
      demo: "#"
    },
    {
      id: "autoresq",
      title: "AutoResQ",
      category: "Emergency Assistance Application",
      tagline: "On-demand roadside assistance and live GPS mechanic dispatch",
      image: "assets/images/projects/autoresq.jpg",
      description: "An emergency road safety application connecting stranded motorists with nearby certified mechanics and towing services in real-time.",
      techStack: ["Flutter", "Dart", "Google Maps API", "REST APIs", "Geolocation", "Push Alerts"],
      features: [
        "One-tap emergency reporting with immediate GPS coordinate dispatch",
        "Live location tracking and route calculation using Google Maps API",
        "Smart mechanic locator system filtering by distance, rating, and specialization",
        "Real-time status notifications keeping drivers informed during arrival",
        "Direct emergency calling integration for high-priority road breakdowns"
      ],
      architecture: "REST API integration for dispatch orchestration combined with Google Maps Flutter SDK and background Geolocation streams.",
      github: "https://github.com/muhammedfaizalm/autoresq",
      demo: "#"
    }
  ],

  miniProjects: [
    {
      title: "Musico",
      subtitle: "Music Player",
      icon: "bi bi-music-note-beamed",
      color: "from-blue",
      desc: "Local audio player with playlist management, sleek equalizer animations, and background playback.",
      tech: ["Flutter", "Dart", "Just Audio", "Audio Service"]
    },
    {
      title: "QR Scanner",
      subtitle: "Fast Barcode & QR Utility",
      icon: "bi bi-qr-code-scan",
      color: "from-cyan",
      desc: "High-speed camera scanner with instant URL redirection, copy-to-clipboard, and history log.",
      tech: ["Flutter", "Mobile Scanner", "Clipboard API"]
    },
    {
      title: "Language Translator",
      subtitle: "Multi-Language Tool",
      icon: "bi bi-translate",
      color: "from-purple",
      desc: "Cross-language translation application with real-time text recognition and pronunciation playback.",
      tech: ["Flutter", "REST API", "Text-to-Speech"]
    },
    {
      title: "Weather App",
      subtitle: "Atmospheric Forecast",
      icon: "bi bi-cloud-sun-fill",
      color: "from-blue",
      desc: "Weather forecast app delivering 7-day predictions, air quality index, and dynamic meteorological themes.",
      tech: ["Flutter", "OpenWeather API", "Geolocation"]
    },
    {
      title: "Encrypta",
      subtitle: "Cryptography & Security",
      icon: "bi bi-shield-lock-fill",
      color: "from-purple",
      desc: "Text encryption and decryption utility demonstrating classical ciphers and modern AES hashing algorithms.",
      tech: ["Flutter", "Dart Crypto", "Security"]
    },
    {
      title: "Currency Converter",
      subtitle: "Forex Rates Calculator",
      icon: "bi bi-currency-exchange",
      color: "from-cyan",
      desc: "Live foreign exchange rates calculator supporting 150+ world currencies with offline cache.",
      tech: ["Flutter", "ExchangeRate API", "Hive Cache"]
    },
    {
      title: "Bingo Game",
      subtitle: "Interactive Board Game",
      icon: "bi bi-grid-3x3-gap-fill",
      color: "from-blue",
      desc: "Engaging 5x5 digital bingo game with win detection algorithms, sound effects, and smooth animations.",
      tech: ["Flutter", "Dart", "Game Logic", "Canvas"]
    }
  ],

  skillsCategories: [
    {
      category: "Programming Languages",
      icon: "bi bi-code-slash",
      skills: [
        { name: "Dart", level: "Primary", icon: "devicon-dart-plain colored", desc: "Core language for Flutter, asynchronous streams, OOP" },
        { name: "Java", level: "Proficient", icon: "devicon-java-plain colored", desc: "Native Android interoperability, object-oriented design" },
        { name: "C", level: "Foundational", icon: "devicon-c-plain colored", desc: "Memory fundamentals, data structures, low-level logic" },
        { name: "JavaScript", level: "Working", icon: "devicon-javascript-plain colored", desc: "Web scripting, JSON handling, asynchronous promises" }
      ]
    },
    {
      category: "Frameworks & Technologies",
      icon: "bi bi-layers",
      skills: [
        { name: "Flutter", level: "Specialist", icon: "devicon-flutter-plain colored", desc: "Cross-platform mobile apps for iOS & Android, Custom UI" },
        { name: "Firebase", level: "Advanced", icon: "devicon-firebase-plain colored", desc: "Auth, Firestore, Cloud Messaging, Storage & Analytics" },
        { name: "REST APIs", level: "Advanced", icon: "bi bi-cloud-check", desc: "HTTP endpoints, interceptors, JSON serialization, caching" },
        { name: "HTML5", level: "Standard", icon: "devicon-html5-plain colored", desc: "Semantic structure, responsive layouts, web standards" },
        { name: "CSS3", level: "Standard", icon: "devicon-css3-plain colored", desc: "Modern styling, flexbox, grid, keyframe animations" }
      ]
    },
    {
      category: "State Management",
      icon: "bi bi-diagram-3",
      skills: [
        { name: "GetX", level: "Production", icon: "bi bi-lightning-charge-fill", desc: "Reactive state, routing, snackbars, and micro dependency injection" },
        { name: "Provider", level: "Production", icon: "bi bi-box-seam", desc: "InheritedWidget wrapper, ChangeNotifier, clean separation" },
        { name: "BLoC", level: "Production", icon: "bi bi-cpu-fill", desc: "Business Logic Component, event-to-state stream transformations" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "bi bi-database",
      skills: [
        { name: "Cloud Firestore", level: "Advanced", icon: "devicon-firebase-plain colored", desc: "NoSQL document store, real-time snapshot listeners" },
        { name: "Firebase Realtime DB", level: "Proficient", icon: "devicon-firebase-plain colored", desc: "Low-latency JSON tree synchronization" },
        { name: "SQLite", level: "Advanced", icon: "devicon-sqlite-plain colored", desc: "Relational queries, SQFlite plugin, transactions & indexing" },
        { name: "Hive", level: "Advanced", icon: "bi bi-archive-fill", desc: "Lightning-fast key-value NoSQL database in pure Dart" },
        { name: "SharedPreferences", level: "Advanced", icon: "bi bi-sliders", desc: "Persistent lightweight key-value storage for settings" },
        { name: "MySQL", level: "Working", icon: "devicon-mysql-plain colored", desc: "Relational database schema design and SQL queries" }
      ]
    },
    {
      category: "Tools",
      icon: "bi bi-tools",
      skills: [
        { name: "Git", level: "Daily", icon: "devicon-git-plain colored", desc: "Version control, branching, rebasing, merge resolutions" },
        { name: "GitHub", level: "Daily", icon: "devicon-github-original", desc: "Pull requests, code reviews, collaboration, issues" },
        { name: "Postman", level: "Daily", icon: "devicon-postman-plain colored", desc: "REST endpoint debugging, mock servers, automated testing" },
        { name: "Android Studio", level: "Primary IDE", icon: "devicon-androidstudio-plain colored", desc: "Emulators, Logcat, Profiler, Android SDK tooling" },
        { name: "VS Code", level: "Primary IDE", icon: "devicon-vscode-plain colored", desc: "Dart & Flutter extensions, debugging, snippets" },
        { name: "Figma", level: "Collaboration", icon: "devicon-figma-plain colored", desc: "Design specs handoff, UI prototyping, vector assets" }
      ]
    },
    {
      category: "Development Practices",
      icon: "bi bi-check2-circle",
      skills: [
        { name: "Clean Architecture", level: "Standard", icon: "bi bi-layers-half", desc: "Decoupling Domain, Presentation, and Data layers" },
        { name: "MVC Pattern", level: "Standard", icon: "bi bi-diagram-2", desc: "Model-View-Controller separation for structured apps" },
        { name: "API Integration", level: "Advanced", icon: "bi bi-arrow-left-right", desc: "Dio/HTTP client, robust error handling, token refresh" },
        { name: "JSON Parsing", level: "Advanced", icon: "bi bi-code-square", desc: "Type-safe JSON serialization & model code generation" },
        { name: "Performance Optimization", level: "Core", icon: "bi bi-speedometer2", desc: "Widget rebuilding prevention, memory leak audits, 60fps" },
        { name: "Object-Oriented Programming", level: "Core", icon: "bi bi-boxes", desc: "Polymorphism, abstraction, interfaces, SOLID principles" }
      ]
    }
  ],

  experiences: [
    {
      role: "Software Developer (Flutter)",
      company: "Softroniics Technologies",
      duration: "September 2024 – Present",
      location: "Kerala, India",
      type: "Full-Time",
      isCurrent: true,
      responsibilities: [
        "Developed and maintained scalable Flutter applications targeting both Android and iOS devices.",
        "Applied clean architecture and modular design principles for maintainable, testable codebases.",
        "Implemented robust state management architectures utilizing GetX, Provider, and BLoC patterns.",
        "Integrated Firebase Authentication, Cloud Firestore, Cloud Messaging (FCM), and Firebase Storage.",
        "Built and consumed REST APIs with structured JSON serialization, token caching, and error handling.",
        "Optimized application performance, reduced widget rebuilds, and enhanced UI frame rates.",
        "Collaborated with UI/UX designers using Figma to translate high-fidelity designs into pixel-perfect code.",
        "Participated actively in code reviews, sprint ceremonies, and agile delivery cycles."
      ],
      skills: ["Flutter", "Dart", "Clean Architecture", "GetX", "Provider", "BLoC", "Firebase", "REST APIs", "Figma", "Git"]
    },
    {
      role: "Flutter Developer Intern",
      company: "Mentorow Technologies",
      duration: "February 2024 – July 2024",
      location: "Kochi, Kerala",
      type: "Internship",
      isCurrent: false,
      responsibilities: [
        "Built cross-platform Flutter applications and created reusable UI components according to specifications.",
        "Learned and implemented end-to-end Firebase integration for user authentication and cloud data.",
        "Worked with REST API communication, data modeling, and asynchronous programming in Dart.",
        "Practiced clean architecture, MVC patterns, and modular code organization across team repositories."
      ],
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Clean Architecture", "MVC", "Git", "Postman"]
    }
  ],

  education: [
    {
      degree: "Flutter Development Program",
      institution: "Brototype",
      location: "Trivandrum, Kerala",
      period: "March 2023 – December 2023",
      description: "Intensive project-driven software development program focusing on Flutter SDK, Dart programming, architectural patterns, clean code practices, and real-world mobile app shipping."
    },
    {
      degree: "Bachelor's Degree",
      institution: "Travancore College",
      location: "Trivandrum, Kerala",
      period: "2018 – 2021",
      description: "Undergraduate degree program building foundational computer science, analytical thinking, problem solving, and computational principles."
    }
  ]
};
