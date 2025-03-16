import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Cardiology,
  Dentist,
  Medicine,
  Neurology,
  Orthopedic,
  Urology,
} from "../svg";
export default function Specialites() {
  const specialties = [
    { name: "Urology", count: 21, icon: <Urology /> },
    { name: "Orthopedic", count: 30, icon: <Orthopedic /> },
    {
      name: "Cardiologist",
      count: 15,
      icon: <Cardiology className="text-primary" />,
    },
    { name: "Dentist", count: 35, icon: <Dentist /> },
    { name: "Medicine", count: 25, icon: <Medicine /> },
    { name: "Neurology", count: 10, icon: <Neurology /> },
    { name: "Veterinary", count: 20, icon: <Urology /> },
    { name: "Psychiatrist", count: 12, icon: <Urology /> },
  ];

  return (
    <section
      className="bg-background dark:bg-background bg-no-repeat relative"
      id="home"
    >
      <div className=" container mt-16 md:mt-28 pb-8    ">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {specialties.map((specialty, index) => (
            <Link href={`/doctors?category=${specialty.name.toLowerCase()}`}>
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                className="flex items-center justify-between p-6 bg-card rounded-lg border transition-all duration-300 transform group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <span className=" w-16 h-16 flex justify-center items-center  bg-primary/10 dark:bg-default-200 p-2 rounded-full transition-transform duration-500 transform  ">
                    {specialty.icon}
                  </span>
                  <div>
                    <h3 className=" text-base lg:text-lg  font-semibold">
                      {specialty.name}
                    </h3>
                    <p className="text-default-600 text-xs lg:text-sm ">
                      {specialty.count} Doctors
                    </p>
                  </div>
                </div>
                <MoveRight className="text-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
