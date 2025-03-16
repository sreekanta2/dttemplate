export const productCategories = [
  { label: "Pain Relief", value: "pain-relief" },
  { label: "Cold & Flu", value: "cold-flu" },
  { label: "Vitamins & Supplements", value: "vitamins-supplements" },
  { label: "Allergy & Sinus", value: "allergy-sinus" },
  { label: "First Aid", value: "first-aid" },
  { label: "Digestive Health", value: "digestive-health" },
  { label: "Electrolytes & Hydration", value: "electrolytes-hydration" },
  { label: "Skin Care", value: "skin-care" },
  { label: "Oral Care", value: "oral-care" },
  { label: "Eye Care", value: "eye-care" },
  { label: "Ear Care", value: "ear-care" },
  { label: "Women's Health", value: "womens-health" },
  { label: "Men's Health", value: "mens-health" },
  { label: "Baby & Child Care", value: "baby-child-care" },
  { label: "Diabetes Care", value: "diabetes-care" },
  { label: "Heart Health", value: "heart-health" },
  { label: "Respiratory Care", value: "respiratory-care" },
  { label: "Sleep Aid", value: "sleep-aid" },
  { label: "Cough & Throat Relief", value: "cough-throat-relief" },
  { label: "Muscle & Joint Care", value: "muscle-joint-care" },
  { label: "Antiseptics & Wound Care", value: "antiseptics-wound-care" },
  { label: "Hair & Scalp Treatment", value: "hair-scalp-treatment" },
  { label: "Weight Management", value: "weight-management" },
  { label: "Stop Smoking Aids", value: "stop-smoking-aids" },
  { label: "Medical Devices & Equipment", value: "medical-devices-equipment" },
];

export interface CustomersRows {
  id: number;
  name?: string;
  phone?: string;
  email?: string;
  date: string;
  avatar?: string;
  details: {
    city?: string;
    address?: string;
  };
}
export interface ProductsRows {
  id: number;
  name?: string;
  image?: string;
  category?: string;
  price?: number;
  quantity: number;
  discount: number;
  expire: boolean;
}
export interface OrderRows {
  id: string;
  createdAt: string;
  price?: number;
  quantity: number;
  status: string;
  batchNumber: string;
  prescriptionRequired: boolean;
}
export interface TransactionsRows {
  id: string; //IN001
  productId: string;
  image: string;
  productName: string;
  totalAmount: number;
  status: string;
}

export const customersData: CustomersRows[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 123-456-7801",
    email: "johndoe@example.com",
    date: "2024-02-10",
    avatar: "/images/avatar/avatar-1.jpg",
    details: {
      city: "New York",
      address: "123 Main St, NY 10001",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 123-456-7802",
    email: "janesmith@example.com",
    date: "2024-02-09",
    avatar: "/images/avatar/avatar-2.jpg",
    details: {
      city: "Los Angeles",
      address: "456 Elm St, CA 90001",
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    phone: "+1 123-456-7803",
    email: "michaelj@example.com",
    date: "2024-02-08",
    avatar: "/images/avatar/avatar-3.jpg",
    details: {
      city: "Chicago",
      address: "789 Oak St, IL 60601",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "+1 123-456-7804",
    email: "emilyd@example.com",
    date: "2024-02-07",
    avatar: "/images/avatar/avatar-4.jpg",
    details: {
      city: "Houston",
      address: "321 Pine St, TX 77001",
    },
  },
  {
    id: 5,
    name: "Daniel Martinez",
    phone: "+1 123-456-7805",
    email: "danielm@example.com",
    date: "2024-02-06",
    avatar: "/images/avatar/avatar-5.jpg",
    details: {
      city: "Phoenix",
      address: "654 Maple St, AZ 85001",
    },
  },
  {
    id: 6,
    name: "Sophia Wilson",
    phone: "+1 123-456-7806",
    email: "sophiaw@example.com",
    date: "2024-02-05",
    avatar: "/images/avatar/avatar-6.jpg",
    details: {
      city: "Philadelphia",
      address: "987 Cedar St, PA 19101",
    },
  },
  {
    id: 7,
    name: "David Brown",
    phone: "+1 123-456-7807",
    email: "davidb@example.com",
    date: "2024-02-04",
    avatar: "/images/avatar/avatar-7.jpg",
    details: {
      city: "San Antonio",
      address: "159 Birch St, TX 78201",
    },
  },
  {
    id: 8,
    name: "Olivia Garcia",
    phone: "+1 123-456-7808",
    email: "oliviag@example.com",
    date: "2024-02-03",
    avatar: "/images/avatar/avatar-8.jpg",
    details: {
      city: "San Diego",
      address: "753 Walnut St, CA 92101",
    },
  },
  {
    id: 9,
    name: "James Anderson",
    phone: "+1 123-456-7809",
    email: "jamesa@example.com",
    date: "2024-02-02",
    avatar: "/images/avatar/avatar-9.jpg",
    details: {
      city: "Dallas",
      address: "852 Redwood St, TX 75201",
    },
  },
  {
    id: 10,
    name: "Emma Thomas",
    phone: "+1 123-456-7810",
    email: "emmat@example.com",
    date: "2024-02-01",
    avatar: "/images/avatar/avatar-10.jpg",
    details: {
      city: "San Jose",
      address: "369 Spruce St, CA 95101",
    },
  },
];
export const productsData: ProductsRows[] = [
  {
    id: 1,
    name: "Paracetamol Tablets",
    image: "/images/pharmacy/product-01.jpg",
    category: "Pain Relief",
    price: 5.99,
    quantity: 50,
    discount: 10,
    expire: false,
  },
  {
    id: 2,
    name: "Ibuprofen Capsules",
    image: "/images/pharmacy/product-02.jpg",
    category: "Pain Relief",
    price: 7.49,
    quantity: 40,
    discount: 5,
    expire: false,
  },
  {
    id: 3,
    name: "Cough Syrup",
    image: "/images/pharmacy/product-03.jpg",
    category: "Cold & Flu",
    price: 6.99,
    quantity: 30,
    discount: 15,
    expire: false,
  },
  {
    id: 4,
    name: "Vitamin C Tablets",
    image: "/images/pharmacy/product-04.jpg",
    category: "Vitamins",
    price: 8.99,
    quantity: 60,
    discount: 20,
    expire: false,
  },
  {
    id: 5,
    name: "Allergy Relief Tablets",
    image: "/images/pharmacy/product-05.jpg",
    category: "Allergy",
    price: 12.99,
    quantity: 25,
    discount: 10,
    expire: true,
  },
  {
    id: 6,
    name: "Antiseptic Cream",
    image: "/images/pharmacy/product-06.jpg",
    category: "First Aid",
    price: 4.99,
    quantity: 35,
    discount: 5,
    expire: false,
  },
  {
    id: 7,
    name: "Multivitamin Gummies",
    image: "/images/pharmacy/product-07.jpg",
    category: "Vitamins",
    price: 14.99,
    quantity: 45,
    discount: 10,
    expire: false,
  },
  {
    id: 8,
    name: "Digestive Enzymes",
    image: "/images/pharmacy/product-08.jpg",
    category: "Digestive Health",
    price: 9.49,
    quantity: 20,
    discount: 15,
    expire: false,
  },
  {
    id: 9,
    name: "Oral Rehydration Salts",
    image: "/images/pharmacy/product-09.jpg",
    category: "Electrolytes",
    price: 3.99,
    quantity: 50,
    discount: 5,
    expire: false,
  },
  {
    id: 10,
    name: "Antacid Tablets",
    image: "/images/pharmacy/product-10.jpg",
    category: "Digestive Health",
    price: 6.49,
    quantity: 30,
    discount: 10,
    expire: true,
  },
];
export const orderData: OrderRows[] = [
  {
    id: "OID001",
    createdAt: new Date().toISOString(),
    price: 29.99,
    quantity: 10,
    status: "Pending",
    batchNumber: "BATCH12345",
    prescriptionRequired: true,
  },
  {
    id: "OID002",
    createdAt: new Date().toISOString(),
    price: 15.5,
    quantity: 5,
    status: "Shipped",
    batchNumber: "BATCH67890",
    prescriptionRequired: false,
  },
  {
    id: "OID003",
    createdAt: new Date().toISOString(),
    price: 45.75,
    quantity: 20,
    status: "Delivered",
    batchNumber: "BATCH11223",
    prescriptionRequired: true,
  },
  {
    id: "OID004",
    createdAt: new Date().toISOString(),
    price: 12.99,
    quantity: 8,
    status: "Canceled",
    batchNumber: "BATCH33445",
    prescriptionRequired: false,
  },
  {
    id: "OID005",
    createdAt: new Date().toISOString(),
    price: 99.0,
    quantity: 15,
    status: "Pending",
    batchNumber: "BATCH55667",
    prescriptionRequired: true,
  },
  {
    id: "OID006",
    createdAt: new Date().toISOString(),
    price: 54.99,
    quantity: 25,
    status: "Shipped",
    batchNumber: "BATCH77889",
    prescriptionRequired: true,
  },
  {
    id: "OID007",
    createdAt: new Date().toISOString(),
    price: 33.5,
    quantity: 30,
    status: "Delivered",
    batchNumber: "BATCH99001",
    prescriptionRequired: false,
  },
  {
    id: "OID008",
    createdAt: new Date().toISOString(),
    price: 21.75,
    quantity: 12,
    status: "Pending",
    batchNumber: "BATCH11223",
    prescriptionRequired: true,
  },
  {
    id: "OID009",
    createdAt: new Date().toISOString(),
    price: 19.99,
    quantity: 18,
    status: "Shipped",
    batchNumber: "BATCH33445",
    prescriptionRequired: false,
  },
  {
    id: "OID010",
    createdAt: new Date().toISOString(),
    price: 60.0,
    quantity: 22,
    status: "Delivered",
    batchNumber: "BATCH55667",
    prescriptionRequired: true,
  },
];
export const transactionsData: TransactionsRows[] = [
  {
    id: "IN001",
    productId: "P001",
    image: "/images/pharmacy/product-01.jpg",
    productName: "Paracetamol 500mg",
    totalAmount: 25.99,
    status: "Paid",
  },
  {
    id: "IN002",
    productId: "P002",
    image: "/images/pharmacy/product-02.jpg",
    productName: "Ibuprofen 200mg",
    totalAmount: 18.5,
    status: "Paid",
  },
  {
    id: "IN003",
    productId: "P003",
    image: "/images/pharmacy/product-03.jpg",
    productName: "Amoxicillin 250mg",
    totalAmount: 45.0,
    status: "Paid",
  },
  {
    id: "IN004",
    productId: "P004",
    image: "/images/pharmacy/product-04.jpg",
    productName: "Cetirizine 10mg",
    totalAmount: 12.75,
    status: "Paid",
  },
  {
    id: "IN005",
    productId: "P005",
    image: "/images/pharmacy/product-05.jpg",
    productName: "Cough Syrup",
    totalAmount: 30.2,
    status: "Paid",
  },
  {
    id: "IN006",
    productId: "P006",
    image: "/images/pharmacy/product-06.jpg",
    productName: "Vitamin C 1000mg",
    totalAmount: 20.99,
    status: "Paid",
  },
  {
    id: "IN007",
    productId: "P007",
    image: "/images/pharmacy/product-07.jpg",
    productName: "Antacid Tablets",
    totalAmount: 15.75,
    status: "Paid",
  },
  {
    id: "IN008",
    productId: "P008",
    image: "/images/pharmacy/product-08.jpg",
    productName: "Loratadine 5mg",
    totalAmount: 22.5,
    status: "Paid",
  },
  {
    id: "IN009",
    productId: "P009",
    image: "/images/pharmacy/product-09.jpg",
    productName: "Insulin Injection",
    totalAmount: 150.0,
    status: "Paid",
  },
  {
    id: "IN010",
    productId: "P010",
    image: "/images/pharmacy/product-10.jpg",
    productName: "Antiseptic Cream",
    totalAmount: 9.99,
    status: "Paid",
  },
];
