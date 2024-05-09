"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Ingredient = (props: any) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
      <Input
        type="text"
        placeholder="Ingredient"
        value={props.value}
        onChange={(event) =>
          props.setIngredient(props.index, event.target.value)
        }
      />
      <Button
        variant="destructive"
        onClick={() => props.removeIngredient(props.index)}
      >
        Remove
      </Button>
    </div>
  );
};

export default Ingredient;
