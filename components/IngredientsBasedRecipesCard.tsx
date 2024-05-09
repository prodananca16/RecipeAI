import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FoodImage from "../public/Ingredient-Transparent.png";

const IngredientsBasedRecipesCard = () => {
  return (
    <Link href="/ingredients-based-recipes">
      <Card className="hover:bg-[#ffc553]/70 transition duration-500 rounded-none border-[#ffc553] shadow hover:shadow-lg  animate__animated animate__zoomIn delay-1_7s">
        <CardHeader className="text-center text-base font-normal">
          <span>Ingredients Based Recipes</span>
        </CardHeader>
        <CardContent>
          <Image
            src={FoodImage}
            alt="Calories Based Recipe"
            height={150}
            className="mx-auto"
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default IngredientsBasedRecipesCard;
