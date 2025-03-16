import CustomImage from "@/components/ImageComponent";
import { Rating } from "@/components/ui/rating";
import reviewImage from "@/public/images/pharmacy/review-02.jpg";
import trustedImage from "@/public/images/pharmacy/review-img.png";

export default function ReviewPage() {
  const review = [1, 2, 3, 4];
  return (
    <div className=" container py-14 ">
      <div className="bg-[#002578] dark:bg-card px-4 py-14 rounded-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" image-container">
            <CustomImage
              src={trustedImage}
              alt={""}
              aspectRatio="1/1"
              containerClass="w-[80%]"
            />
          </div>
          <div className="space-y-8">
            {review.map((review) => (
              <div
                key={review}
                className="flex flex-col lg: gap-4 dark:bg-card  "
              >
                <div className="flex gap-2">
                  <CustomImage
                    src={reviewImage}
                    alt={""}
                    aspectRatio="1/1"
                    containerClass="w-10 h-10   "
                    className="rounded-full "
                  />
                  <div>
                    <h1 className="text-base text-white font-medium">
                      Claudia Cram
                    </h1>
                    <Rating
                      value={2}
                      readOnly
                      className="gap-x-1.5 max-w-[115px]"
                    />
                  </div>
                </div>

                <div key={review} className="flex flex-col text-white gap-1">
                  <p className="text-sm">
                    The Doccure has been a game-changer for me. Ordering my
                    medications is a breeze, and the detailed information
                    provided helps me make informed decisions about my health.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
