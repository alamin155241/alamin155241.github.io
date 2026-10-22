/*
 * EDIT YOUR PORTFOLIO HERE. Save this file, then refresh your browser.
 * No HTML/CSS edits, npm install, or build command are needed.
 * Keep quotation marks around text. Use \n for a new heading line.
 * Duplicate a project or skill group to add another; delete it to remove it.
 */
window.PORTFOLIO = {
  profile: {
    name: "Al Amin",
    brand: "al amin",
    initials: "a",
    country: "Bangladesh",
    email: "alamin155241@gmail.com",
    github: "https://github.com/alamin155241",
    pageTitle: "IoT, Robotics & AI",

    // Put your picture in src/assets/, then enter its filename here.
    // Example: photo: "src/assets/profile.png",
    // Leave empty to keep the engineering illustration. A missing image also falls back.
    photo: "src/assets/profile.png",

    // Put your PDF in src/assets/, then enter its filename here.
    // Example: resume: "src/assets/resume.pdf",
    // This single path enables both the header button and the one-page CV section.
    resume: "src/assets/al-amin-cv.pdf",
  },

  education: {
    degree: "IoT and Robotics Engineering",
    university: "University of Frontier Technology, Bangladesh",
    status: "Undergraduate",
    // Optional, e.g. "2023 – 2027". Empty means no dates are displayed.
    dates: "",
  },

  hero: {
    title: "Intelligence.\nMeet the\nphysical world.",
    introduction: "Exploring the space between intelligent software and connected hardware — through robotics, AI, and embedded systems.",
    button: "Explore my work",
    note: "Driven by curiosity",
  },

  interests: ["Robotics", "Edge AI", "Machine Learning", "Computer Vision", "Embedded Systems"],

  about: {
    title: "Curious by nature.\nEngineer in the making.",
    introduction: "I'm interested in what happens when software can see, sense, and interact with the world around it.",
    highlight: "see, sense, and interact",
    // Education and interests are inserted above these paragraphs automatically.
    paragraphs: [
      "From rice leaf disease detection to smart home automation, my projects give me a way to explore the connection between intelligent algorithms and physical systems.",
    ],
  },

  projects: [
    {
      title: "Rice Leaf\nDisease Detection",
      fullName: "Neuro-Symbolic AI-Driven Rice Leaf Disease Detection System",
      category: "AI for agriculture",
      field: "Computer vision",
      badge: "Featured project",
      description: "My main project explores neuro-symbolic AI for identifying disease in rice leaves, bringing together visual learning and knowledge-based reasoning in an agricultural context.",
      tags: ["Neuro-Symbolic AI", "Computer Vision", "Machine Learning"],
      image: "src/assets/rice-leaf.svg",
      imageAlt: "Illustration of rice leaves with highlighted disease spots",
      imageLabel: "Concept illustration", // Change to "Project screenshot" for your real image.
      visualCaption: "Vision + reasoning",
      theme: "dark", // "dark" or "light"
      // Add a real repository/demo URL to show its link. Empty uses an email discussion link.
      url: "https://github.com/alamin155241/rice-leaf-neuro-symbolic-ai",
      linkLabel: "View source code",
    },
    {
      title: "A more\nconnected home.",
      fullName: "IoT-Based Smart Home Automation",
      category: "Embedded systems",
      field: "Connected systems",
      badge: "IoT project",
      description: "An ESP32 and Arduino UNO prototype with sensor-based automatic control and manual commands. The published implementation connects the boards over UART and uses Adafruit IO with a browser telemetry dashboard.",
      tags: ["ESP32", "Arduino UNO", "IoT", "Home Automation"],
      image: "src/assets/smart-home.svg",
      imageAlt: "Concept illustration of ESP32 and Arduino UNO in a connected home",
      imageLabel: "Concept illustration",
      visualCaption: "Hardware + automation",
      theme: "light",
      url: "https://github.com/alamin155241/esp32-arduino-smart-home",
      linkLabel: "View source code",
    },
    {
      "title": "FarmGuard\nSensor Monitoring",
      "fullName": "FarmGuard-AI",
      "category": "Sensor fusion",
      "field": "IoT & machine learning",
      "badge": "Engineering project",
      "description": "ESP32 sensor fusion and MQTT telemetry with a Streamlit dashboard, decision-tree experiments, and optional camera verification. The public repository includes source code; recorded trials and trained models stay local.",
      "tags": [
        "ESP32",
        "MQTT",
        "Streamlit",
        "Computer Vision"
      ],
      "image": "src/assets/farmguard.svg",
      "imageAlt": "Concept diagram of sensors feeding monitoring and verification",
      "imageLabel": "Concept illustration",
      "visualCaption": "Sense + verify",
      "theme": "dark",
      "url": "https://github.com/alamin155241/farmguard-ai",
      "linkLabel": "View source code"
    },
    {
      "title": "Robot Joints\nin Simulation",
      "fullName": "ROS 2 Gazebo Joint Simulation",
      "category": "Robot simulation",
      "field": "Robotics",
      "badge": "Learning project",
      "description": "ROS 2 Humble and Gazebo Classic models for a prismatic slider and a universal joint. Includes URDF descriptions, controller configuration, launch files, and Python adapters for GUI-driven joint commands.",
      "tags": [
        "ROS 2",
        "Gazebo",
        "URDF",
        "Python"
      ],
      "image": "src/assets/robot-joints.svg",
      "imageAlt": "Concept diagram of a robot joint command pipeline",
      "imageLabel": "Concept illustration",
      "visualCaption": "Model + control",
      "theme": "light",
      "url": "https://github.com/alamin155241/ros2-gazebo-joint-simulation",
      "linkLabel": "View source code"
    },
    {
      "title": "SMS Spam\nClassification",
      "fullName": "SMS Spam Detection with Naive Bayes",
      "category": "Text classification",
      "field": "Machine learning",
      "badge": "Lab project",
      "description": "A scikit-learn pipeline using count vectors and Multinomial Naive Bayes to classify SMS messages. Uses a stratified train/test split and reports precision, recall, and a confusion matrix on the UCI SMS Spam Collection.",
      "tags": [
        "Python",
        "scikit-learn",
        "Naive Bayes",
        "NLP"
      ],
      "image": "src/assets/sms-classifier.svg",
      "imageAlt": "Concept diagram of text transformed into spam or ham predictions",
      "imageLabel": "Concept illustration",
      "visualCaption": "Text + prediction",
      "theme": "dark",
      "url": "https://github.com/alamin155241/sms-spam-naive-bayes",
      "linkLabel": "View source code"
    },
  ],

  skills: [
    {
      title: "Intelligent systems",
      description: "Learning from images. Connecting patterns with knowledge.",
      items: ["Python", "TensorFlow / Keras", "CNNs", "Computer Vision", "TensorFlow Lite"],
      symbol: "✳",
    },
    {
      title: "Connected hardware",
      description: "Microcontrollers at the heart of physical systems.",
      items: ["ESP32", "Arduino UNO", "C / C++", "I²C", "Sensors & Actuators"],
      symbol: "⌘",
    },
    {
      title: "Software & tools",
      description: "From experimentation to applications.",
      items: ["Git & GitHub", "Linux", "Google Colab", "FastAPI", "Flutter", "JavaScript"],
      symbol: "↗",
    },
  ],

  // Add your own certificates here. Copy the example, remove its // comments,
  // and replace the values. Put PDF/image files in src/assets/certificates/.
  // The first three appear initially; additional items use View all certificates.
  certificates: [
    {
      title: "WALTON Presents ROBOFUSION 1.0",
      issuer: "UFTB Robotics Club, University of Frontier Technology, Bangladesh",
      type: "Certificate of participation",
      date: "",
      file: "src/assets/certificates/robofusion-1.0-participation.png",
      image: "src/assets/certificates/robofusion-1.0-participation.png",
      url: "",
    },
    {
      title: "TEDxUttara 2025",
      issuer: "TEDxUttara",
      type: "Certificate of attendance",
      date: "13 December 2025",
      file: "src/assets/certificates/tedxuttara-2025-attendance.png",
      image: "",
      url: "",
    },
    {
      title: "16th National Undergraduate Mathematics Olympiad 2025 — Dhaka North Region",
      issuer: "Bangladesh Mathematical Society · AF Mujibur Rahman Foundation",
      type: "Certificate of participation",
      date: "21 November 2025",
      file: "src/assets/certificates/numo-2025-dhaka-north.png",
      image: "",
      url: "",
    },
    {
      title: "15th National Undergraduate Mathematics Olympiad 2024 — Final Round",
      issuer: "Bangladesh Mathematical Society · AF Mujibur Rahman Foundation",
      type: "Certificate of participation",
      date: "11 April 2025",
      file: "src/assets/certificates/numo-2024-final-round.png",
      image: "",
      url: "",
    },
    {
      title: "15th National Undergraduate Mathematics Olympiad 2024 — Dhaka North Region",
      issuer: "Bangladesh Mathematical Society · AF Mujibur Rahman Foundation",
      type: "Certificate of achievement",
      date: "13 December 2024",
      file: "src/assets/certificates/numo-2024-dhaka-north-achievement.png",
      image: "",
      url: "",
    },
    {
      title: "15th National Undergraduate Mathematics Olympiad 2024 — Dhaka North Region",
      issuer: "Bangladesh Mathematical Society · AF Mujibur Rahman Foundation",
      type: "Certificate of participation",
      date: "13 December 2024",
      file: "src/assets/certificates/numo-2024-dhaka-north-participation.png",
      image: "",
      url: "",
    },
    // {
    //   title: "Your certificate title",
    //   issuer: "Issuing organization",
    //   type: "Certificate of completion",
    //   date: "2026",
    //   file: "src/assets/certificates/your-certificate.pdf",
    //   image: "", // Optional image preview for a PDF; image files preview themselves.
    //   url: "", // Optional official credential URL; used if file is empty.
    // },
  ],

  contact: {
    title: "Great ideas start\nwith a conversation.",
    description: "Robotics, AI, or something at the intersection?\nLet's connect and explore ideas together.",
  },
};
