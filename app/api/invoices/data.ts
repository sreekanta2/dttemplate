export const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-2024-001",
    status: "Paid",
    amount: 286.2,
    paymentMethod: "Credit Card",
    paymentDate: "2024-03-20",
    billTo: {
      name: "John Doe",
      image: "/images/avatar/avatar-6.jpg",
    },
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-002",
    status: "Unpaid",
    amount: 413.4,
    paymentMethod: "Bank Transfer",
    paymentDate: "2024-03-22",
    billTo: {
      name: "Jane Smith",
      image: "/images/avatar/avatar-7.jpg",
    },
  },
  {
    id: 3,
    invoiceNumber: "INV-2024-003",
    status: "Paid",
    amount: 148.4,
    paymentMethod: "Cash",
    paymentDate: "2024-03-30", // Not paid yet
    billTo: {
      name: "Alice Johnson",
      image: "/images/avatar/avatar-8.jpg",
    },
  },
  {
    id: 4,
    invoiceNumber: "INV-2024-004",
    status: "Unpaid",
    amount: 320.5,
    paymentMethod: "Credit Card",
    paymentDate: null, // Not paid yet
    billTo: {
      name: "Michael Brown",
      image: "/images/avatar/avatar-9.jpg",
    },
  },
  {
    id: 5,
    invoiceNumber: "INV-2024-005",
    status: "Overdue",
    amount: 95.0,
    paymentMethod: "Bank Transfer",
    paymentDate: "2024-03-27", // Not paid yet
    billTo: {
      name: "Emily Davis",
      image: "/images/avatar/avatar-10.jpg",
    },
  },
  {
    id: 6,
    invoiceNumber: "INV-2024-006",
    status: "Paid",
    amount: 450.75,
    paymentMethod: "PayPal",
    paymentDate: "2024-03-25",
    billTo: {
      name: "David Wilson",
      image: "/images/avatar/avatar-11.jpg",
    },
  },
  {
    id: 7,
    invoiceNumber: "INV-2024-006",
    status: "Paid",
    amount: 450.75,
    paymentMethod: "PayPal",
    paymentDate: "2024-03-25",
    billTo: {
      name: "David Wilson",
      image: "/images/avatar/avatar-13.jpg",
    },
  },
  {
    id: 8,
    invoiceNumber: "INV-2024-006",
    status: "Paid",
    amount: 450.75,
    paymentMethod: "PayPal",
    paymentDate: "2024-03-25",
    billTo: {
      name: "David Wilson",
      image: "/images/avatar/avatar-12.jpg",
    },
  },
];
