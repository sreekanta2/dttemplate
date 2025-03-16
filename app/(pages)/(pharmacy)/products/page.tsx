
import ProductsHero from "./components/hero";
import PharmacyProductsCard from "./components/product-card";
import ProductFilterForm from "./components/product-filter-form";
 const productsData = [
  {
    id: 11,
    name: "Safi Syrup",
    description:
      "Best purifying syrup for blood that helps eliminate toxins and improve digestion.",
    price: 9.99,
    discountPrice: 8.49,
    image: "/images/pharmacy/products/product-1.jpg",
    category: "Blood Purifier",
    ingredients: ["Neem", "Tulsi", "Chirata", "Senna", "Gulmohar"],
    usage: "Adults: Take 2 tablespoons once a day in a glass full of water.",
    sideEffects: ["Mild diarrhea", "Upset stomach (if overdosed)"],
    manufacturer: "Hamdard Laboratories",
    ratings: 4.6,
    stock: 40,
    highlights: [
      "Best purifying syrup for blood.",
      "Helps eliminate toxins from the bloodstream.",
      "Improves digestion.",
      "Aids in indigestion and constipation.",
    ],
    storage:
      "Store at room temperature, protected from sunlight, heat, and moisture. Keep away from children and pets.",
    administration:
      "Shake well before use. Can be taken with or without food. Consume only as prescribed.",
    warning: "Not recommended for pregnant women and lactating mothers.",
    precaution:
      "Dispose of after 3 years from the manufactured date. Do not use after expiry.",
  },
  {
    id: 2,
    name: "Livon Syrup",
    description: "A liver tonic that helps detoxify and maintain liver health.",
    price: 12.99,
    discountPrice: 10.99,
    image: "/images/pharmacy/products/product-2.jpg",
    category: "Liver Care",
    ingredients: ["Bhumi Amla", "Kasni", "Bhringraj", "Giloy"],
    manufacturer: "Dabur",
    ratings: 4.4,
    stock: 35,
  },
  {
    id: 3,
    name: "Diabex Tablets",
    description:
      "Herbal supplement to help manage blood sugar levels naturally.",
    price: 15.99,
    discountPrice: 13.49,
    image: "/images/pharmacy/products/product-3.jpg",
    category: "Diabetes Care",
    ingredients: ["Jamun", "Karela", "Neem", "Methi"],
    manufacturer: "Patanjali",
    ratings: 4.5,
    stock: 50,
  },
  {
    id: 4,
    name: "Respira Cough Syrup",
    description:
      "Fast relief from cough and throat irritation with herbal extracts.",
    price: 7.99,
    discountPrice: 6.49,
    image: "/images/pharmacy/products/product-17.jpg",
    category: "Cough & Cold",
    ingredients: ["Honey", "Tulsi", "Ginger", "Mulethi"],
    manufacturer: "Zandu",
    ratings: 4.3,
    stock: 45,
  },
  {
    id: 5,
    name: "JointCare Capsules",
    description:
      "Relieves joint pain and improves mobility with Ayurvedic herbs.",
    price: 18.99,
    discountPrice: 16.49,
    image: "/images/pharmacy/products/product-5.jpg",
    category: "Joint Care",
    ingredients: ["Shallaki", "Ashwagandha", "Moringa", "Turmeric"],
    manufacturer: "Himalaya",
    ratings: 4.7,
    stock: 30,
  },
  {
    id: 6,
    name: "GastroEase Tablets",
    description:
      "Natural remedy for acidity, indigestion, and bloating relief.",
    price: 10.99,
    discountPrice: 9.49,
    image: "/images/pharmacy/products/product-6.jpg",
    category: "Digestive Health",
    ingredients: ["Ajwain", "Saunf", "Triphala", "Jeera"],
    manufacturer: "Baidyanath",
    ratings: 4.2,
    stock: 55,
  },
  {
    id: 7,
    name: "Immunity Booster Syrup",
    description:
      "Strengthens immunity with powerful antioxidants and herbal extracts.",
    price: 14.99,
    discountPrice: 12.99,
    image: "/images/pharmacy/products/product-7.jpg",
    category: "Immunity",
    ingredients: ["Amla", "Ashwagandha", "Giloy", "Turmeric"],
    manufacturer: "Sri Sri Tattva",
    ratings: 4.6,
    stock: 38,
  },
  {
    id: 8,
    name: "SleepWell Tablets",
    description: "Promotes restful sleep and reduces stress naturally.",
    price: 11.99,
    discountPrice: 10.49,
    image: "/images/pharmacy/products/product-8.jpg",
    category: "Sleep & Stress",
    ingredients: ["Jatamansi", "Brahmi", "Tagara", "Chamomile"],
    manufacturer: "Hamdard",
    ratings: 3.4,
    stock: 42,
  },
  {
    id: 9,
    name: "Respiratory Relief Capsules",
    description:
      "Supports respiratory health and helps manage seasonal allergies.",
    price: 13.99,
    discountPrice: 12.49,
    image: "/images/pharmacy/products/product-12.jpg",
    category: "Respiratory Health",
    ingredients: ["Vasaka", "Pippali", "Haridra", "Licorice"],
    manufacturer: "Patanjali",
    ratings: 4.5,
    stock: 37,
  },
  {
    id: 10,
    name: "HairVital Tonic",
    description: "Nourishes scalp and promotes healthy hair growth naturally.",
    price: 19.99,
    discountPrice: 17.49,
    image: "/images/pharmacy/products/product-10.jpg",
    category: "Hair Care",
    ingredients: ["Bhringraj", "Amla", "Brahmi", "Coconut Oil"],
    manufacturer: "Himalaya",
    ratings: 3.8,
    stock: 28,
  },
  {
    id: 11,
    name: "Safi Syrup",
    description:
      "Best purifying syrup for blood that helps eliminate toxins and improve digestion.",
    price: 9.99,
    discountPrice: 8.49,
    image: "/images/pharmacy/products/product-1.jpg",
    category: "Blood Purifier",
    ingredients: ["Neem", "Tulsi", "Chirata", "Senna", "Gulmohar"],
    manufacturer: "Hamdard Laboratories",
    ratings: 4.6,
    stock: 40,
  },
];

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // const page = parseInt(searchParams.page || "1", 10);
  // const limit = 8;
  // const products = await getProducts({ page, limit });

  return (
    <div>
      <ProductsHero />
      <div className="bg-background my-8">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4  ">
            <ProductFilterForm />
            <div className="col-span-3  mt-8 md:mt-0 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-center md:justify-start">
                { productsData.map((product: any) => (
                    <PharmacyProductsCard key={product.id} product={product} />
                  ))}
              </div>

              {/* <div className=" flex justify-center mt-8">
                {products?.pagination?.totalRecords >
                  products?.pagination?.perPage && (
                  <Pagination
                    currentPage={products?.pagination?.currentPage}
                    totalPages={products?.pagination?.totalPages}
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
