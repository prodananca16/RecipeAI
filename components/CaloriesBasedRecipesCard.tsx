import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Calories from "../public/foodScale.png";

const CaloriesBasedRecipesCard = () => {
  return (
    <Link href="/calories-based-recipes">
      <Card className="hover:bg-[#ffc553]/70 transition duration-500 rounded-none border-[#ffc553] shadow hover:shadow-lg animate__animated animate__zoomIn delay-1_2s">
        <CardHeader className="text-center text-base font-normal">
          <span>Calories Based Recipes</span>
        </CardHeader>
        <CardContent>
          <Image
            src={Calories}
            alt="Calories Based Recipe"
            height={150}
            className="mx-auto"
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaloriesBasedRecipesCard;
