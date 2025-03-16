"use client";
import { SiteLogo } from "@/components/svg";
import footerImage from "@/public/images/landing-page/footer.png";
import dribble from "@/public/images/social/dribble-1.png";
import facebook from "@/public/images/social/facebook-1.png";
import linkedin from "@/public/images/social/linkedin-1.png";
import twitter from "@/public/images/social/twitter-1.png";
import youtube from "@/public/images/social/youtube.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      icon: facebook,
      href: "https://www.facebook.com",
    },

    {
      icon: linkedin,
      href: "https://www.linkedin.com/",
    },
    {
      icon: youtube,
      href: "https://www.youtube.com",
    },
    {
      icon: twitter,
      href: "https://twitter.com",
    },
    {
      icon: dribble,
      href: "https://dribbble.com",
    },
  ];
  return (
    <footer
      className=" bg-cover bg-center bg-no-repeat relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-900/90 dark:before:bg-default-100"
      style={{
        background: `url(${footerImage.src})`,
      }}
    >
      <div className=" container pt-16 space-y-4">
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8     ">
          <div className="w-full max-w-xl  mx-auto flex flex-col items-start relative text-white">
            <Link href="/" className="flex items-center gap-1">
              <SiteLogo className="h-8 w-8  text-primary" />
              <span className="text-primary-500 font-medium text-xl">Care</span>
            </Link>
            <p className="text-sm   text-default-200 dark:text-default-600   mt-3">
              Effortlessly schedule your medical appointments with Doccure.
              Connect with healthcare professionals, manage appointments &
              prioritize your well being
            </p>

            <div className="mt-8 flex items-center justify-center flex-wrap gap-5">
              {socials.map((item, index) => (
                <Link
                  href={item.href}
                  key={`social-link-${index}`}
                  target="_blank"
                >
                  <Image
                    src={item.icon}
                    alt="social"
                    width={30}
                    height={30}
                    priority={true}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* patients */}
          <div className="w-full max-w-xl  mx-auto flex flex-col   relative  text-default-100  dark:text-default-600 space-y-2">
            <h1 className=" text-lg font-bold ">For Patient</h1>

            <ul className="space-y-2">
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <Link href="/doctors"> Search for Doctors</Link>
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <Link href="/auth/login"> Login</Link>
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <Link href="/auth/register"> Register</Link>
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <Link href="/doctors">Booking</Link>
              </li>
            </ul>
          </div>

          {/* doctor */}
          <div className="w-full max-w-xl  mx-auto flex flex-col text-default-100 dark:text-default-600 relative space-y-2">
            <h1 className=" text-lg  font-bold ">For Doctor</h1>

            <ul className="space-y-2">
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                Appointments
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                Chat
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                Login
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                Register
              </li>
            </ul>
          </div>

          {/* contacts */}
          <div className="w-full max-w-xl  mx-auto flex flex-col  dark:text-default-600  relative space-y-2 text-default-100">
            <h1 className=" text-lg font-bold ">For Contacts</h1>

            <ul>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                3556 Beech Street, San Francisco, California, CA 94108
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                +1 315 369 5943
              </li>
              <li
                className={`  text-md w-full group  transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                doccure@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="relative bg-primary-900 dark:bg-default-50 py-6 px-4">
          <div className="container flex flex-col text-center md:text-start md:flex-row gap-2">
            <p className="text-primary-foreground flex-1 text-base   font-medium">
              COPYRIGHT &copy;Deccure All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
