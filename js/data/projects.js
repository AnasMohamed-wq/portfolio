window.AMData = window.AMData || {};
window.AMData.projects = [
  {
    id: "dispensary-records",
    title: "Dispensary Records System",
    description:
      "An early system to register patient records, invoices, and medical exams for a small dispensary.",
    technologies: ["Python", "Django"],
    features: [
      "Patient records registration",
      "Invoice management",
      "Medical exam records",
    ],
    role: "Full-Stack Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Healthcare",
    filters: ["all", "backend", "healthcare"],
    technicalDetails:
      "Early standalone system covering patient registration, invoicing, and medical exam documentation for a small dispensary.",
  },
  {
    id: "integrated-clinic",
    title: "Integrated Clinic Management Platform",
    description:
      "A modular platform for a clinic covering lab, pharmacy, and doctor workflows (Lab, Pharmacy & Doctor).",
    technologies: ["Django", "PostgreSQL"],
    features: [
      "Modular architecture separating business domains — patients, prescriptions, lab requests, inventory, and billing",
      "Secure authentication and role-based access control for clinical staff",
      "APIs enabling independent system modules to communicate while staying synchronized",
      "Database structures covering the patient lifecycle",
      "Operational and management reports",
    ],
    role: "System Architect & Full-Stack Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Healthcare",
    filters: ["all", "backend", "healthcare"],
    technicalDetails:
      "A modular architecture separates business domains — patients, prescriptions, lab requests, inventory, and billing — to improve maintainability. Secure authentication and RBAC configure clinical staff access. REST APIs let independent modules communicate while staying synchronized. Database structures model the full patient lifecycle, with operational and management reporting.",
  },
  {
    id: "salon-cashier",
    title: "Cashier System Design — Women's Salon",
    description:
      "Designed a point-of-sale workflow tailored to a salon's sales and service operations.",
    technologies: ["Django"],
    features: [
      "Point-of-sale workflow planning",
      "Tailored to salon sales and service operations",
    ],
    role: "System Designer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Retail",
    filters: ["all", "retail", "pos"],
    technicalDetails:
      "Planned a point-of-sale workflow tailored to a salon's sales and service operations.",
  },
  {
    id: "school-attendance",
    title: "School Attendance & Student Pickup Management System",
    description:
      "A multi-tenant system for school attendance monitoring and student pickup, with real-time notifications for mobile and administrative applications.",
    technologies: ["Django", "Redis", "WebSockets", "Flutter"],
    features: [
      "RESTful APIs supporting communication between the mobile and administrative applications",
      "Real-time notifications using Redis and WebSockets",
      "Multi-tenant architecture supporting isolation between schools",
      "Role-based access for administrators, teachers, and parents",
      "Dashboards for attendance monitoring",
      "Scalable database structures for school operations",
    ],
    role: "Backend Developer & System Architect",
    status: "Delivered",
    statusType: "completed",
    type: "Team Project",
    domain: "Education",
    filters: ["all", "backend", "education"],
    technicalDetails:
      "Owned the backend, APIs, and system architecture as part of a small team, while a fellow developer built the Flutter mobile client. RESTful APIs connect the mobile and administrative applications, Redis and WebSockets power real-time notifications, and a multi-tenant architecture isolates schools with role-based access for administrators, teachers, and parents.",
  },
  {
    id: "corporate-website",
    title: "Corporate Website — Shalash Suleiman Engineering",
    description:
      "A responsive corporate website for an engineering company, optimized for desktop and mobile.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Responsive web pages — Home, About Us, Vision & Mission, Projects, Machines, Contact",
      "Optimized for desktop and mobile",
      "Contact form integrated with email service",
    ],
    role: "Web Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Web",
    filters: ["all", "web"],
    technicalDetails:
      "Planned and developed responsive web pages (Home, About Us, Vision & Mission, Projects, Machines, Contact) optimized for desktop and mobile, with a contact form integrated with an email service to improve the company's online presence.",
  },
  {
    id: "fuel-distribution",
    title: "Fuel Distribution Management System",
    description:
      "A management system for vehicle and fuel tracking, trips, and transportation reporting, with debt/credit and delivery prioritization logic.",
    technologies: ["Django", "Redis"],
    features: [
      "Vehicle and fuel tracking workflows",
      "Trip management and transportation reporting",
      "Debt/credit management engine",
      "Geographic delivery prioritization logic",
      "Loyalty tier system",
      "OTP authentication and push notification infrastructure",
      "Formal SRS and requirements analysis documentation",
    ],
    role: "Full-Stack Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Logistics",
    filters: ["all", "backend", "logistics"],
    technicalDetails:
      "Plans vehicle and fuel tracking workflows, trip management, and transportation reporting. Engineers a debt/credit management engine and geographic delivery prioritization logic, established a loyalty tier system, OTP authentication, and push notification infrastructure, and produced formal SRS and requirements analysis documentation across multiple client-review batches.",
  },
  {
    id: "pharmapro",
    title: "Pharmacy Management System — PharmaPro",
    description:
      "A pharmacy management system with batch-based inventory, barcode scanning, insurance billing, and supplier management.",
    technologies: ["Django", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Inventory management based on batches, expiration dates (FEFO logic), categories, and active ingredients",
      "Barcode scanning and flexible sales workflows",
      "Supplier and purchasing management",
      "Insurance billing workflows with customizable coverage rules",
      "Role-based permissions for pharmacists, doctors, and staff",
      "Reporting modules for inventory, sales performance, and supplier management",
      "Deployed using Docker, Gunicorn",
    ],
    role: "Full-Stack Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Healthcare",
    filters: ["all", "backend", "retail", "healthcare"],
    technicalDetails:
      "Models inventory management based on batches, expiration dates (FEFO logic), categories, and active ingredients. Enables barcode scanning, flexible sales workflows, and supplier/purchasing management. Establishes insurance billing workflows with customizable coverage rules and role-based permissions for pharmacists, doctors, and staff, plus reporting for inventory, sales performance, and suppliers — deployed using Docker and Gunicorn.",
  },
  {
    id: "galos-pos",
    title: "POS System Customization — Galos Gadget Hub",
    description:
      "Rebuilt an existing Django POS system for a multi-branch electronics retail business, including Arabic localization of the interface.",
    technologies: ["Django"],
    features: [
      "Rebuilt existing Django POS system",
      "Adapted to a multi-branch electronics retail business",
      "Arabic localization of the interface",
    ],
    role: "Developer",
    status: "Delivered",
    statusType: "completed",
    type: "Client Project",
    domain: "Retail",
    filters: ["all", "retail", "pos"],
    technicalDetails:
      "Rebuilt an existing Django POS system, adapting it to a client's requirements for a multi-branch electronics retail business, including Arabic localization of the interface.",
  },
  {
    id: "cashier-pos",
    title: "Cashier/POS System",
    description:
      "Currently developing a point-of-sale system for a retail client.",
    technologies: ["Django"],
    features: [
      "Point-of-sale system for a retail client",
      "In active development",
    ],
    role: "Full-Stack Developer",
    status: "In Progress",
    statusType: "in-progress",
    type: "Client Project",
    domain: "Retail",
    filters: ["all", "retail", "pos"],
    technicalDetails:
      "Currently developing a point-of-sale system for a retail client (in progress).",
    isCurrent: true,
  },
];

window.AMData.projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "backend", label: "Backend" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "retail", label: "Retail" },
  { id: "logistics", label: "Logistics" },
  { id: "pos", label: "POS" },
];