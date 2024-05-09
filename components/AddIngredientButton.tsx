"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
const AddIngredientButton = (props: any) => {
  return (
    <>
      <Button
        className="bg-orange-700 mt-10"
        onClick={() => props.addIngredient()}
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        Add new ingredient
      </Button>
    </>
  );
};

export default AddIngredientButton;
