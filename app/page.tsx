import CaloriesBasedRecipesCard from "@/components/CaloriesBasedRecipesCard";
import IngredientsBasedRecipesCard from "@/components/IngredientsBasedRecipesCard";
import Logo from "../public/logo.png";
import ArrowLeft from "../public/arrowLeft.png";
import ArrowRight from "../public/arrowRight.png";

import Image from "next/image";
import "animate.css";
import StudentCard from "@/components/StudentCard";

export default function Home() {
  return (
    <div className="m-auto text-center block">
      <div className="mx-20">
        <StudentCard />
      </div>

      <span className="font-semibold text-xl lg:text-2xl xl:text-4xl text-[#ffb048] mb-5 block animate__animated animate__fadeInDown delay-0_8s mt-20">
        Meet Your Personal AI-Powered Kitchen Assistant{" "}
      </span>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
        <div className="col-start-1 col-span-2 sm:col-start-2 sm:col-span-2 md:col-start-2 md:col-span-2">
          <Image
            src={ArrowLeft}
            alt=""
            height="120"
            className="hidden md:block mx-auto mb-5 animate__animated animate__zoomIn delay-1s"
          />
          <CaloriesBasedRecipesCard />
        </div>
        <div className="col-start-1 col-span-2 sm:col-start-2 sm:col-span-2 md:col-start-4 md:col-span-2">
          <Image
            src={ArrowRight}
            alt=""
            height="120"
            className="hidden md:block mx-auto mb-5 animate__animated animate__zoomIn delay-1_5s"
          />
          <IngredientsBasedRecipesCard />
        </div>
      </div>
    </div>
  );
}
