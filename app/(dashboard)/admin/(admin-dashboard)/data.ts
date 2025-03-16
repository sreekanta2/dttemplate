export interface DoctorsRows {
  id: number;
  name?: string;
  specialty?: string;
  earned?: number;
  role?: string;
  avatar?: string;
  details: {
    city?: string;
    experience?: string;
    post?: string;
  };
}

export interface PatientsRows {
  id: number;
  name?: string;
  phone?: string;
  lastVisit?: number;
  status?: string;
  avatar?: string;
  details: {
    city?: string;
    experience?: string;
    post?: string;
  };
}
export interface AppointmentRows {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    avatar: string;
  };
  patient: {
    name: string;
    phone: string;
    avatar: string;
  };
  appointmentTime: number;
  appointmentStatus: string;
  appointmentDate: number;
  appointmentAmount: number;
}
export interface SpecialtiesRows {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
}
export interface ReviewsRows {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    avatar: string;
  };
  patient: {
    name: string;
    phone: string;
    avatar: string;
  };
  status: string;
  content: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface TransactionsRows {
  id: string;
  invoiceNumber: string;
  patient: {
    name: string;
    id: string;
    phone: string;
    avatar: string;
  };
  totalAmount: number;
  status: string;
}
export const doctors = [
  {
    id: 1,
    name: "Mark Dsuza",
    specialty: "Dental",
    earned: 2000,
    role: "admin",
    avatar: "/images/avatar/avatar-9.jpg",
    details: {
      city: "dhaka",
      experience: "2 years",
      post: "software engineer",
    },
  },
  {
    id: 2,
    name: "Josef Jennyfer",
    specialty: "Neurology",
    earned: 2000,
    role: "member",
    avatar: "/images/avatar/avatar-10.jpg",
    details: {
      city: "Rajshahi",
      experience: "2 years",
      post: "Laravel Developer",
    },
  },
  {
    id: 3,
    name: "Romeo D custa",
    specialty: "Medicine",
    earned: 2000,
    role: "editor",
    avatar: "/images/avatar/avatar-1.jpg",
    details: {
      city: "Rajshahi",
      experience: "2 years",
      post: "Full Stack Developer",
    },
  },
  {
    id: 4,
    name: "Anald Donald",
    specialty: "Heart Specialty",
    earned: 2000,
    role: "editor",
    avatar: "/images/avatar/avatar-12.jpg",
    details: {
      city: "Barisal",
      experience: "2 years",
      post: "Mern Stack Developer",
    },
  },
  {
    id: 5,
    name: "Vicky Patel",
    specialty: "Orthopedic",
    earned: 2000,
    role: "member",
    avatar: "/images/avatar/avatar-13.jpg",
    details: {
      city: "Dhaka",
      experience: "2 years",
      post: "Software Engineer",
    },
  },
];
export const patients: PatientsRows[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8901",
    lastVisit: 1706812800, // Unix timestamp
    status: "paid",
    avatar: "/images/avatar/avatar-9.jpg",
    details: {
      city: "New York",
      experience: "5 years",
      post: "General Checkup",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 987 654 3210",
    lastVisit: 1706726400,
    status: "paid",
    avatar: "/images/avatar/avatar-2.jpg",
    details: {
      city: "Los Angeles",
      experience: "3 years",
      post: "Dental Consultation",
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    phone: "+1 456 789 0123",
    lastVisit: 1706640000,
    status: "unpaid",
    avatar: "/images/avatar/avatar-10.jpg",
    details: {
      city: "Chicago",
      experience: "7 years",
      post: "Eye Checkup",
    },
  },
  {
    id: 4,
    name: "Emily Brown",
    phone: "+1 321 654 9870",
    lastVisit: 1706553600,
    status: "refund",
    avatar: "/images/avatar/avatar-11.jpg",
    details: {
      city: "Houston",
      experience: "2 years",
      post: "Physical Therapy",
    },
  },
  {
    id: 5,
    name: "William Davis",
    phone: "+1 654 321 0987",
    lastVisit: 1706467200,
    status: "paid",
    avatar: "/images/avatar/avatar-5.jpg",
    details: {
      city: "Phoenix",
      experience: "10 years",
      post: "Cardiology",
    },
  },
];
export const appointments: AppointmentRows[] = [
  {
    id: 1,
    doctor: {
      name: "Dr. James Smith",
      specialty: "Cardiologist",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    patient: {
      name: "John Doe",
      phone: "+1 234 567 890",
      avatar: "/images/avatar/avatar-6.jpg",
    },
    appointmentTime: 1706208000,
    appointmentStatus: "confirmed",
    appointmentDate: 1706208000,
    appointmentAmount: 200,
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    patient: {
      name: "Sarah Brown",
      phone: "+1 345 678 901",
      avatar: "/images/avatar/avatar-7.jpg",
    },
    appointmentTime: 1706294400,
    appointmentStatus: "pending",
    appointmentDate: 1706294400,
    appointmentAmount: 150,
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Michael Lee",
      specialty: "Orthopedic",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    patient: {
      name: "David Wilson",
      phone: "+1 456 789 012",
      avatar: "/images/avatar/avatar-8.jpg",
    },
    appointmentTime: 1706380800,
    appointmentStatus: "cancelled",
    appointmentDate: 1706380800,
    appointmentAmount: 100,
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Olivia Martinez",
      specialty: "Pediatrician",
      avatar: "/images/avatar/avatar-4.jpg",
    },
    patient: {
      name: "Sophia Anderson",
      phone: "+1 567 890 123",
      avatar: "/images/avatar/avatar-9.jpg",
    },
    appointmentTime: 1706467200,
    appointmentStatus: "completed",
    appointmentDate: 1706467200,
    appointmentAmount: 250,
  },
  {
    id: 5,
    doctor: {
      name: "Dr. William Davis",
      specialty: "Neurologist",
      avatar: "/images/avatar/avatar-5.jpg",
    },
    patient: {
      name: "Daniel Thomas",
      phone: "+1 678 901 234",
      avatar: "/images/avatar/avatar-10.jpg",
    },
    appointmentTime: 1706553600,
    appointmentStatus: "confirmed",
    appointmentDate: 1706553600,
    appointmentAmount: 180,
  },
];
export const specialties: SpecialtiesRows[] = [
  {
    id: "S001",
    name: "Dr. James Smith",
    specialty: "Cardiology",
    avatar: "/images/doctors/specialties/specialities-01.png",
  },
  {
    id: "S002",
    name: "Dr. Emily Johnson",
    specialty: "Dermatology",
    avatar: "/images/doctors/specialties/specialities-02.png",
  },
  {
    id: "S003",
    name: "Dr. Michael Lee",
    specialty: "Orthopedics",
    avatar: "/images/doctors/specialties/specialities-03.png",
  },
  {
    id: "S004",
    name: "Dr. Olivia Martinez",
    specialty: "Pediatrics",
    avatar: "/images/doctors/specialties/specialities-04.png",
  },
  {
    id: "S005",
    name: "Dr. William Davis",
    specialty: "Neurology",
    avatar: "/images/doctors/specialties/specialities-05.png",
  },
  {
    id: "S006",
    name: "Dr. Sophia Brown",
    specialty: "Ophthalmology",
    avatar: "/images/doctors/specialties/specialities-01.png",
  },
  {
    id: "S007",
    name: "Dr. Daniel Wilson",
    specialty: "Endocrinology",
    avatar: "/images/doctors/specialties/specialities-02.png",
  },
  {
    id: "S008",
    name: "Dr. Ava Thomas",
    specialty: "Gastroenterology",
    avatar: "/images/doctors/specialties/specialities-03.png",
  },
  {
    id: "S009",
    name: "Dr. Ethan White",
    specialty: "Oncology",
    avatar: "/images/doctors/specialties/specialities-04.png",
  },
  {
    id: "S0010",
    name: "Dr. Mia Harris",
    specialty: "Psychiatry",
    avatar: "/images/doctors/specialties/specialities-05.png",
  },
];
export const reviews: ReviewsRows[] = [
  {
    id: 1,
    doctor: {
      name: "Dr. James Smith",
      specialty: "Cardiology",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    patient: {
      name: "Sophia Johnson",
      phone: "+1 234 567 8901",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    status: "approved",
    content: "Dr. Smith is very knowledgeable and patient. Highly recommend!",
    rating: 5,
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-16T12:00:00"),
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Emily Brown",
      specialty: "Dermatology",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    patient: {
      name: "Michael Davis",
      phone: "+1 345 678 9012",
      avatar: "/images/avatar/avatar-4.jpg",
    },
    status: "pending",
    content: "Great dermatologist, helped me with my skin issues!",
    rating: 4,
    createdAt: new Date("2024-02-10T09:00:00"),
    updatedAt: new Date("2024-02-11T14:20:00"),
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Olivia Martinez",
      specialty: "Pediatrics",
      avatar: "/images/avatar/avatar-5.jpg",
    },
    patient: {
      name: "Daniel Wilson",
      phone: "+1 456 789 0123",
      avatar: "/images/avatar/avatar-6.jpg",
    },
    status: "approved",
    content: "Very caring and excellent with kids!",
    rating: 5,
    createdAt: new Date("2024-03-05T08:15:00"),
    updatedAt: new Date("2024-03-06T09:45:00"),
  },
  {
    id: 4,
    doctor: {
      name: "Dr. William Davis",
      specialty: "Neurology",
      avatar: "/images/avatar/avatar-7.jpg",
    },
    patient: {
      name: "Ava Thomas",
      phone: "+1 567 890 1234",
      avatar: "/images/avatar/avatar-8.jpg",
    },
    status: "rejected",
    content: "Helped me a lot with my migraines. Fantastic doctor!",
    rating: 4,
    createdAt: new Date("2024-04-12T11:20:00"),
    updatedAt: new Date("2024-04-13T13:10:00"),
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Sophia White",
      specialty: "Ophthalmology",
      avatar: "/images/avatar/avatar-9.jpg",
    },
    patient: {
      name: "Ethan Harris",
      phone: "+1 678 901 2345",
      avatar: "/images/avatar/avatar-10.jpg",
    },
    status: "approved",
    content: "Very professional and thorough eye examination.",
    rating: 5,
    createdAt: new Date("2024-05-22T15:45:00"),
    updatedAt: new Date("2024-05-23T16:30:00"),
  },
  {
    id: 6,
    doctor: {
      name: "Dr. Daniel Wilson",
      specialty: "Endocrinology",
      avatar: "/images/avatar/avatar-11.jpg",
    },
    patient: {
      name: "Mia Robinson",
      phone: "+1 789 012 3456",
      avatar: "/images/avatar/avatar-12.jpg",
    },
    status: "pending",
    content: "Helped me manage my diabetes effectively!",
    rating: 5,
    createdAt: new Date("2024-06-18T13:10:00"),
    updatedAt: new Date("2024-06-19T14:50:00"),
  },
  {
    id: 7,
    doctor: {
      name: "Dr. Ava Thomas",
      specialty: "Gastroenterology",
      avatar: "/images/avatar/avatar-12.jpg",
    },
    patient: {
      name: "James Carter",
      phone: "+1 890 123 4567",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    status: "approved",
    content: "Provided great advice for my digestive health.",
    rating: 4,
    createdAt: new Date("2024-07-01T07:30:00"),
    updatedAt: new Date("2024-07-02T08:40:00"),
  },
  {
    id: 8,
    doctor: {
      name: "Dr. Ethan White",
      specialty: "Oncology",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    patient: {
      name: "Isabella Scott",
      phone: "+1 901 234 5678",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    status: "rejected",
    content: "Compassionate and very thorough in his approach.",
    rating: 5,
    createdAt: new Date("2024-08-09T18:20:00"),
    updatedAt: new Date("2024-08-10T19:50:00"),
  },
  {
    id: 9,
    doctor: {
      name: "Dr. Mia Harris",
      specialty: "Psychiatry",
      avatar: "/images/avatar/avatar-4.jpg",
    },
    patient: {
      name: "Logan Wright",
      phone: "+1 012 345 6789",
      avatar: "/images/avatar/avatar-5.jpg",
    },
    status: "approved",
    content: "Very understanding and patient, helped me a lot!",
    rating: 5,
    createdAt: new Date("2024-09-15T12:10:00"),
    updatedAt: new Date("2024-09-16T14:00:00"),
  },
  {
    id: 10,
    doctor: {
      name: "Dr. Charlotte Clark",
      specialty: "Rheumatology",
      avatar: "/images/avatar/avatar-6.jpg",
    },
    patient: {
      name: "Benjamin Lewis",
      phone: "+1 123 456 7890",
      avatar: "/images/avatar/avatar-7.jpg",
    },
    status: "pending",
    content: "Provided excellent treatment for my arthritis.",
    rating: 4,
    createdAt: new Date("2024-10-01T17:20:00"),
    updatedAt: new Date("2024-10-02T18:30:00"),
  },
];
export const transactions: TransactionsRows[] = [
  {
    id: "TR001",
    invoiceNumber: "IN001",
    patient: {
      name: "John Doe",
      id: "PT001",
      phone: "+1 234 567 890",
      avatar: "/images/avatar/avatar-6.jpg",
    },
    totalAmount: 250,
    status: "paid",
  },
  {
    id: "TR002",
    invoiceNumber: "IN002",
    patient: {
      name: "Sarah Brown",
      id: "PT002",
      phone: "+1 345 678 901",
      avatar: "/images/avatar/avatar-7.jpg",
    },
    totalAmount: 180,
    status: "pending",
  },
  {
    id: "TR003",
    invoiceNumber: "IN003",
    patient: {
      name: "David Wilson",
      id: "PT003",
      phone: "+1 456 789 012",
      avatar: "/images/avatar/avatar-8.jpg",
    },
    totalAmount: 300,
    status: "cancelled",
  },
  {
    id: "TR004",
    invoiceNumber: "IN004",
    patient: {
      name: "Sophia Anderson",
      id: "PT004",
      phone: "+1 567 890 123",
      avatar: "/images/avatar/avatar-9.jpg",
    },
    totalAmount: 150,
    status: "paid",
  },
  {
    id: "TR005",
    invoiceNumber: "IN005",
    patient: {
      name: "Daniel Thomas",
      id: "PT005",
      phone: "+1 678 901 234",
      avatar: "/images/avatar/avatar-10.jpg",
    },
    totalAmount: 220,
    status: "refunded",
  },
  {
    id: "TR006",
    invoiceNumber: "IN006",
    patient: {
      name: "Emma White",
      id: "PT006",
      phone: "+1 789 012 345",
      avatar: "/images/avatar/avatar-11.jpg",
    },
    totalAmount: 275,
    status: "pending",
  },
  {
    id: "TR007",
    invoiceNumber: "IN007",
    patient: {
      name: "Liam Johnson",
      id: "PT007",
      phone: "+1 890 123 456",
      avatar: "/images/avatar/avatar-12.jpg",
    },
    totalAmount: 190,
    status: "paid",
  },
];
