"use client";
import work from "@/public/images/all-img/work-img.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Work1, Work2, Work3, Work4 } from "../svg";

export default function Summary() {
  return (
    <div className="lg:container py-10">
      <div className="bg-primary-100 px-4 dark:bg-card   pb-0 lg:mt-0 lg:rounded-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-20    relative">
          {/* Image Section with Animation */}
          <motion.div
            className="absolute left-0 bottom-0 w-[450px]  hidden lg:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src={work} width={400} height={200} alt="work image" />
          </motion.div>

          {/* Steps Section */}
          <div className="ml-auto w-full max-w-[700px]  space-y-6">
            <div>
              <span className="text-xs font-bold text-primary">
                How it Works
              </span>
              <h1 className="text-2xl font-medium">
                4 easy steps to get your solution
              </h1>
            </div>

            {/* Stepwise Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4">
              {[
                {
                  icon: <Work1 />,
                  title: "Search Doctor",
                  text: "Search for a doctor based on specialization, location, or availability.",
                },
                {
                  icon: <Work2 />,
                  title: "Check Doctor Profile",
                  text: "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
                },
                {
                  icon: <Work3 />,
                  title: "Schedule Appointment",
                  text: "After choosing your preferred doctor, select a convenient time slot & confirm your appointment.",
                },
                {
                  icon: <Work4 />,
                  title: "Get Your Solution",
                  text: "Discuss your health concerns with the doctor and receive personalized advice & solutions.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-10 h-10">{step.icon}</div>
                  <div>
                    <h1 className="font-medium text-base">{step.title}</h1>
                    <p className="text-default-800">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
