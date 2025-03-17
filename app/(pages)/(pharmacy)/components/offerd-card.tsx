import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
// Promo Card Component
interface PromoCardProps {
  id: number;
  title: string;
  highlight: string;
  description: string;
  code?: string;
  color: "primary" | "info" | "warning";

  handleRouting: () => void;
  image: StaticImageData;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  highlight,
  description,
  code,

  color,
  image,
  handleRouting,
}) => {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div
        className={`h-full md:min-h-max flex flex-col md:flex-row justify-between items-center p-4 gap-4 ${color} dark:bg-card`}
      >
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h1 className=" text-xl lg:text-2xl font-bold text-default-700">
                {title}
                <span className={`text-${color}`}> {highlight}</span>
              </h1>
              <p className="text-xs text-default-600 font-bold">
                {description} {code && <span className="text-sm">{code}</span>}
              </p>
            </div>
            <Button
              variant="outline"
              color={color}
              onClick={handleRouting}
              className={`py-2 px-4 rounded-md border w-44 h-12  `}
            >
              Shop Now
            </Button>
          </div>
        </div>

        <CustomImage
          src={image}
          alt={title}
          aspectRatio="1/1"
          containerClass="w-32  hidden md:block"
          className="rounded-lg "
        />
      </div>
    </div>
  );
};
export default PromoCard;
