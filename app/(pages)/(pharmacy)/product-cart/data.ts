export interface productsRows {
  id: number;
  doctor: {
    name: string;
    specialty: string;
    avatar: string;
  };

  SKU: string;
  total: number;
  quantity: number;
  price: number;
}
export const productsData: productsRows[] = [
  {
    id: 1,
    doctor: {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    SKU: "SKU-1001",
    total: 500,
    quantity: 5,
    price: 100,
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    SKU: "SKU-1002",
    total: 750,
    quantity: 3,
    price: 250,
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Emily Johnson",
      specialty: "Neurologist",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    SKU: "SKU-1003",
    total: 600,
    quantity: 4,
    price: 150,
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      avatar: "/images/avatar/avatar-4.jpg",
    },
    SKU: "SKU-1004",
    total: 900,
    quantity: 6,
    price: 150,
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Sarah Wilson",
      specialty: "Pediatrician",
      avatar: "/images/avatar/avatar-5.jpg",
    },
    SKU: "SKU-1005",
    total: 1200,
    quantity: 8,
    price: 150,
  },
];
