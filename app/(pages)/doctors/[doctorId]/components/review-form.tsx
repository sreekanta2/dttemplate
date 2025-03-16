"use client";
import TextareaFormField from "@/components/FormField";
import { User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user.config";
import { reviewsSchema } from "@/schemas/review";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
interface ReviewFormProps {
  doctorId: string;
}
export default function ReviewForm({ doctorId }: ReviewFormProps) {
  const [isPending, startTransition] = useTransition();

  type FormData = z.infer<typeof reviewsSchema>;
  const session = useSession();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(reviewsSchema),
    defaultValues: {
      comment: "",
      doctorId: "",
      patientId: "",
      rating: undefined,
    },
  });
  const currentRating = watch("rating");

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <form
      className="space-y-6 bg-card p-4 rounded-md "
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Profile Section */}

      {/* Information Section */}

      <div className="flex items-start gap-x-4">
        {session?.data?.user?.image ? (
          <Image
            src={avatar}
            alt=""
            width={48}
            height={48}
            className="rounded-full"
          />
        ) : (
          <div className="p-1 bg-primary w-12 rounded-full  ">
            <User />
          </div>
        )}

        <div className="w-full space-y-4">
          <div>
            <h1>Your Rating</h1>
            <Rating
              value={currentRating}
              onChange={(value: number) => setValue("rating", value)}
              className="gap-x-1.5 max-w-[125px]"
              error={errors.rating?.message}
            />
          </div>

          <div className="w-full   ">
            <TextareaFormField
              name="comment"
              control={control}
              placeholder="Enter your full name"
              error={errors.comment?.message}
            />
          </div>
          <div className="flex gap-x-4">
            <Button type="submit" variant="soft">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      </div>

      {/* Address Section */}

      {/* Submit and Reset Buttons */}
    </form>
  );
}
