"use client";

import { avatar } from "@/config/user.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalenderCheck, User } from "../svg";

export default function Articles() {
  return (
    <div className="container py-10">
      <div className="space-y-1 mb-8">
        <h1 className="text-xl lg:text-2xl font-medium text-primary">
          Blogs and News
        </h1>
        <p>Read Professional Articles and Latest Articles.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full border rounded-md p-4 flex flex-col md:flex-row bg-card items-start gap-4"
          >
            <div className=" w-full mx-auto   max-w-[400px] h-72 relative overflow-hidden border rounded-md p-2">
              <Image
                src={avatar}
                alt={"doctor.name"}
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="w-full space-y-2">
              <div className="flex gap-4">
                <div className="flex gap-2 items-start">
                  <div className="w-4 h-4">
                    <User />
                  </div>
                  <h1 className="text-xs">Author Name</h1>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-4 h-4">
                    <CalenderCheck />
                  </div>
                  <h1 className="text-xs">13 Aug, 2023</h1>
                </div>
              </div>
              <h2 className="text-default-900 font-medium">
                Navigating Telehealth: A Guide to Virtual Healthcare Visits
              </h2>
              <p className="text-default-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                neque elit. Sed euismod, nunc ut commodo facilisis, nunc tellus
                commodo risus, at convallis metus neque euismod.
              </p>
              <button className="border px-4 py-1 border-primary rounded-md hover:bg-primary">
                Read more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
