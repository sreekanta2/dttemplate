"use client";
import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import productImage from "@/public/images/pharmacy/products/product-1.jpg";
import { Icon } from "@iconify/react";
import ProductHero from "./components/hero";

export default function ProductPage({ params }: { params: { pid: string } }) {
  const product = {
    id: 1,
    imageUrl: "/products/panadol.jpg",
    productName: "Panadol Extra Strength",
    manufacturer: "GlaxoSmithKline",
    dosage: "500mg",
    quantity: "24 Tablets",
    price: 5.99,
    originalPrice: 7.99,
    requiresPrescription: false,
    stockStatus: "in-stock",
    isFavorite: false,
  };

  return (
    <div>
      <ProductHero />
      <div className="bg-background py-8">
        <div className="  container ">
          {/* Product Overview */}
          <div className="border bg-card  rounded-md flex flex-col md:flex-row gap-6 md:gap-10 p-4">
            <CustomImage
              src={productImage}
              alt={""}
              aspectRatio="1/1"
              containerClass="w-48 md:w-72"
              className="rounded-md shrink-0 "
            />
            <div className="space-y-2">
              {/* Product Header */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-default-900 mb-2">
                      Benzaxapine Croplex
                      <span className="ml-2 text-sm font-normal text-default-500">
                        (Generic: Paracetamol)
                      </span>
                    </h1>
                    <p className="text-sm text-default-500">
                      Manufactured by{" "}
                      <span className="font-medium">
                        Hamdard (Wakf) Laboratories
                      </span>
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Icon icon="heroicons:check-badge" className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Verified Medication
                    </span>
                  </div>
                  <div className="h-4 w-px bg-default-200"></div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Icon icon="heroicons:shield-check" className="w-5 h-5" />
                    <span className="text-sm font-medium">GST Included</span>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-primary">
                    ₹{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-default-400 line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                    15% off
                  </span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
                      product.stockStatus === "in-stock"
                        ? "bg-emerald-500"
                        : product.stockStatus === "low-stock"
                        ? "bg-amber-500"
                        : "bg-default-400"
                    )}
                  />
                  <span className="text-sm font-medium capitalize">
                    {product.stockStatus.replace("-", " ")}
                    {product.stockStatus === "low-stock" &&
                      " (Only 5 left in stock)"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-lg bg-primary-50/50 w-full sm:w-auto">
                  <Button
                    size="sm"
                    variant="ghost"
                    className=" w-12 rounded-r-none text-xl text-primary-950 hover:bg-primary/10"
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    className=" w-full md:w-16 border-0 bg-transparent text-center dark:text-card [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    value="1"
                    min="1"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className=" w-12 rounded-l-none text-xl text-primary-950 hover:bg-primary/10"
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full sm:w-48   text-lg font-medium shadow-sm hover:shadow-md transition-shadow">
                  Add To Cart
                </Button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="heroicons:clock"
                    className="w-5 h-5 text-blue-500"
                  />
                  <span>Fast relief within 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="heroicons:user"
                    className="w-5 h-5 text-purple-500"
                  />
                  <span>Suitable for adults (18+ years)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="heroicons:beaker"
                    className="w-5 h-5 text-emerald-500"
                  />
                  <span>Non-drowsy formula</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="heroicons:calendar"
                    className="w-5 h-5 text-rose-500"
                  />
                  <span>Expires: 06/2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="  py-8">
            {/* Product Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              {/* Medical Information Panel */}
              <div className="space-y-8">
                {/* Clinical Details Card */}
                <div className="bg-card rounded-xl shadow-sm border border-default-100 p-6">
                  <h2 className="text-2xl font-bold text-default-900 mb-4">
                    Clinical Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-default-500">
                        Active Ingredients
                      </h3>
                      <p className="text-default-900">Paracetamol (650mg)</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-default-500">
                        Therapeutic Class
                      </h3>
                      <p className="text-default-900">Non-opioid Analgesic</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-default-500">
                        Pharmacology
                      </h3>
                      <p className="text-default-900">
                        COX-1 & COX-2 Inhibitor
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-default-500">
                        Half Life
                      </h3>
                      <p className="text-default-900">1-4 hours</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="heroicons:exclamation-triangle"
                        className="w-5 h-5 text-amber-600 shrink-0"
                      />
                      <div>
                        <h3 className="font-medium text-default-900">
                          Contraindications
                        </h3>
                        <ul className="list-disc pl-5 mt-1 text-sm text-default-600">
                          <li>Severe hepatic impairment</li>
                          <li>Chronic alcohol use</li>
                          <li>Known hypersensitivity to NSAIDs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon
                        icon="heroicons:information-circle"
                        className="w-5 h-5 text-blue-600 shrink-0"
                      />
                      <div>
                        <h3 className="font-medium text-default-900">
                          Drug Interactions
                        </h3>
                        <ul className="list-disc pl-5 mt-1 text-sm text-default-600">
                          <li>Warfarin - Increased bleeding risk</li>
                          <li>Alcohol - Hepatotoxicity risk</li>
                          <li>SSRIs - Increased GI bleeding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage Instructions Card */}
                <div className="bg-card rounded-xl shadow-sm border border-default-100 p-6">
                  <h2 className="text-2xl font-bold text-default-900 mb-4">
                    Dosage Guidelines
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-default-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-default-700">
                            Age Group
                          </th>
                          <th className="px-4 py-3 text-left text-default-700">
                            Dosage
                          </th>
                          <th className="px-4 py-3 text-left text-default-700">
                            Frequency
                          </th>
                          <th className="px-4 py-3 text-left text-default-700">
                            Max Daily
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-default-200">
                          <td className="px-4 py-3">Adults (18-65)</td>
                          <td className="px-4 py-3">500-1000mg</td>
                          <td className="px-4 py-3">Every 4-6 hours</td>
                          <td className="px-4 py-3">4000mg</td>
                        </tr>
                        <tr className="border-t border-default-200">
                          <td className="px-4 py-3">Geriatric (65+)</td>
                          <td className="px-4 py-3">500mg</td>
                          <td className="px-4 py-3">Every 6 hours</td>
                          <td className="px-4 py-3">3000mg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-card/90 rounded-lg border border-card-200">
                    <div className="flex gap-3">
                      <Icon
                        icon="heroicons:exclamation-circle"
                        className="w-5 h-5 text-amber-600 shrink-0"
                      />
                      <div>
                        <h3 className="font-medium text-amber-800">
                          Important Safety Information
                        </h3>
                        <p className="text-sm text-amber-700 mt-1">
                          Do not exceed recommended dosage. Long-term use may
                          cause kidney damage. Discontinue use and consult
                          doctor if rash develops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Information Sidebar */}
              <div className="space-y-6">
                {/* Regulatory Info Card */}
                <div className="bg-card rounded-xl shadow-sm border border-default-100 p-6">
                  <h2 className="text-lg font-bold text-default-900 mb-3">
                    Regulatory Information
                  </h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-default-500">NDC Number</span>
                      <span className="text-default-900">12345-6789-01</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-default-500">FDA Approval</span>
                      <span className="text-green-600">Approved 1998</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-default-500">
                        Pregnancy Category
                      </span>
                      <span className="text-amber-600">Category C</span>
                    </div>
                  </div>
                </div>

                {/* Manufacturer Card */}
                <div className="bg-card rounded-xl shadow-sm border border-default-100 p-6">
                  <h2 className="text-lg font-bold text-default-900 mb-3">
                    Manufacturer Details
                  </h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-default-500">Company</span>
                      <span className="text-default-900">
                        Hamdard (Wakf) Laboratories
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-default-500">License No.</span>
                      <span className="text-default-900">MH/MH/2020/123</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-default-500">Batch Number</span>
                      <span className="text-default-900">BXP22034</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-default-500">Expiry Date</span>
                      <span className="text-red-600">June 2025</span>
                    </div>
                  </div>
                </div>

                {/* Pharmacist Notes */}
                <div className="bg-card-50 p-4 rounded-lg border  ">
                  <div className="flex gap-3">
                    <Icon
                      icon="heroicons:academic-cap"
                      className="w-5 h-5 text-blue-600 shrink-0"
                    />
                    <div>
                      <h3 className="font-medium text-blue-800">
                        Pharmacist Notes
                      </h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Monitor for signs of hepatotoxicity with prolonged use.
                        Not recommended for patients with G6PD deficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Adverse Effects Card */}
                <div className="bg-card rounded-xl shadow-sm border border-default-100 p-6">
                  <h2 className="text-lg font-bold text-default-900 mb-3">
                    Reported Side Effects
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-default-600">Nausea</span>
                      <span className="text-xs bg-default-100 px-2 py-1 rounded-full">
                        Common (≥1%)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-default-600">
                        Hepatotoxicity
                      </span>
                      <span className="text-xs bg-red-100 px-2 py-1 rounded-full text-red-700">
                        Rare (≤0.1%)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-default-600">
                        Skin Rash
                      </span>
                      <span className="text-xs bg-amber-100 px-2 py-1 rounded-full text-amber-700">
                        Infrequent (0.1-1%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Resources */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="#"
                className="p-4 bg-card border border-default-200 rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:document-text"
                    className="w-6 h-6 text-blue-600"
                  />
                  <span className="font-medium">
                    Prescribing Information (PDF)
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-card border border-default-200 rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:question-mark-circle"
                    className="w-6 h-6 text-blue-600"
                  />
                  <span className="font-medium">Patient FAQ</span>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-card border border-default-200 rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:phone"
                    className="w-6 h-6 text-blue-600"
                  />
                  <span className="font-medium">24/7 Medical Support</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
