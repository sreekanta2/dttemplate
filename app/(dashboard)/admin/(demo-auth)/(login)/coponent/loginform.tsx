"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import facebook from "@/public/images/auth/facebook.png";
import GithubIcon from "@/public/images/auth/github.png";
import googleIcon from "@/public/images/auth/google.png";
import twitter from "@/public/images/auth/twitter.png";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const LogInForm = () => {
  const [isPending, startTransition] = useTransition();

  const [passwordType, setPasswordType] = useState<boolean>(false);
  type FormData = z.infer<typeof LoginSchema>;

  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    startTransition(async () => {
      try {
        const response = await signIn("credentials", {
          email: data.email,
          password: data.password,
        });
        if (response?.ok) {
          toast.success("Login successful");
        }
        if (response?.error) {
          toast.error("Invalid credentials");
        }
        router.refresh();
      } catch (error) {
        console.error("Error during login:", error);
      }
    });
  };

  return (
    <div className="w-full h-screen border flex flex-col  justify-center items-center px-4">
      <div className="w-full    rounded-md max-w-[550px]     ">
        <Link href="/" className="flex justify-center mb-10">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
        </Link>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 xl:mt-7 space-y-4"
          >
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="email"
                control={form.control}
                placeholder="Email"
                label="Email"
                type="email"
              />
            </div>
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="password"
                control={form.control}
                placeholder=" Password"
                label=" Password"
                type={passwordType ? "text" : "password"}
              />

              <div
                className="absolute top-12 -translate-y-1/2 right-4  cursor-pointer"
                onClick={() => setPasswordType(!passwordType)}
              >
                {passwordType ? (
                  <Icon
                    icon="heroicons:eye"
                    className="w-5 h-5 text-default-400"
                  />
                ) : (
                  <Icon
                    icon="heroicons:eye-slash"
                    className="w-5 h-5 text-default-400"
                  />
                )}
              </div>
            </div>

            <SubmitButton className="w-full" isLoading={isPending}>
              Login
            </SubmitButton>
          </form>
        </Form>
        <div className="mt-5 2xl:mt-8 flex flex-wrap justify-center gap-4">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full  border-default-300 hover:bg-transparent"
            disabled={isPending}
            onClick={() =>
              signIn("google", {
                callbackUrl: "/dashboard",
              })
            }
          >
            <Image src={googleIcon} alt="google" className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full  border-default-300 hover:bg-transparent"
            disabled={isPending}
            onClick={() =>
              signIn("github", {
                callbackUrl: "/dashboard",
                redirect: false,
              })
            }
          >
            <Image src={GithubIcon} alt="google" className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full border-default-300 hover:bg-transparent"
          >
            <Image src={facebook} alt="google" className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full  border-default-300 hover:bg-transparent"
          >
            <Image src={twitter} alt="google" className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          Don't have an account ?{" "}
          <Link href="/auth/register" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
