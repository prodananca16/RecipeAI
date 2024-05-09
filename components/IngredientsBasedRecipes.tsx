"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";
import AddIngredientButton from "./AddIngredientButton";
import Link from "next/link";
import Ingredient from "./Ingredient";
import RecipesTabs from "./RecipesTabs";

const IngredientsBasedRecipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState<string>("30");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loadingSavedRecipes, setLoadingSavedRecipes] = useState<boolean>(true);
  //   const generateGUID = () => {
  //     return Date.now().toString(36) + Math.random().toString(36).substring(2);
  //   };
  useEffect(() => {
    const fetchData = async () => {
      function sleep(ms: any) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      const result = await fetch("/api/recipes/type/ingredients", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      setSavedRecipes(data);
      console.log(data);
      await sleep(1000);
      setLoadingSavedRecipes(false);
    };
    fetchData();
  }, []);
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const fetchSavedRecipes = async () => {
    const result = await fetch("/api/recipes/type/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    setSavedRecipes(data);
    setLoadingSavedRecipes(false);
  };
  const generateRecipes = async () => {
    setLoading(true);
    const result = await fetch("api/openai", {
      method: "POST",
      body: JSON.stringify({ ingredients, cookingTime }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      const data = await result.json();
      setRecipes(data.recipes);
      setLoading(false);
    } else {
      console.log("Error");
      setLoading(false);
    }
  };
  const saveRecipe = async (recipe: any, index: number) => {
    recipe.type = "ingredients";
    const result = await fetch("api/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      //   const newRecipes = [...recipes];
      //   newRecipes.splice(index, 1);
      setRecipes([]);
      setLoadingSavedRecipes(true);
      await sleep(1000);
      await fetchSavedRecipes();
    } else {
      alert("Recipe could not be saved!");
    }
  };
  const deleteRecipe = async (id: string) => {
    const result = await fetch("api/recipes/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      //   const newRecipes = [...recipes];
      //   newRecipes.splice(index, 1);
      setLoadingSavedRecipes(true);
      await sleep(1000);
      await fetchSavedRecipes();
    } else {
      alert("Recipe could not be deleted!");
    }
  };
  const onChangeCookingTime = (event: any) => {
    setCookingTime(event.target.value);
  };
  const setIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const addIngredient = () => {
    const newIngredients = [...ingredients, ""];
    setIngredients(newIngredients);
  };
  return (
    <>
      <Card className="animate__animated animate__fadeInDown">
        <CardHeader>
          <CardTitle>
            <span className="text-2xl ">Ingredients based recipes</span>
          </CardTitle>
          <CardDescription>
            Generate 1 recipe by adding one or more ingredients and cooking
            time. To add a new ingredient press <b>Add new ingredient</b> button
            (3 ingredients minimum). When you are finished press{" "}
            <b>Generate recipe</b> button.{" "}
            <b>No empty ingredients are allowed.</b>
          </CardDescription>
        </CardHeader>

        <CardFooter>
          {" "}
          <Link
            href="/"
            className="bg-blue-950 hover:bg-blue-900 text-sm text-white py-2 px-5 rounded"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4 inline-block" />
            Back to previous page
          </Link>
        </CardFooter>
      </Card>
      <div className="animate__animated animate__fadeInUp delay-0_7s">
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="email">Cooking time (in minutes)</Label>
          <Input
            type="text"
            id="cookingTime"
            value={cookingTime}
            onChange={onChangeCookingTime}
            placeholder="Enter cooking time"
          />
        </div>
        <div>
          <ul className="mt-5">
            {ingredients.map((value, index) => (
              <li key={index}>
                <Ingredient
                  setIngredient={setIngredient}
                  index={index}
                  value={value}
                  removeIngredient={removeIngredient}
                />
              </li>
            ))}
          </ul>
        </div>
        <AddIngredientButton addIngredient={addIngredient} />
        <Button
          className="bg-green-900 flex my-5"
          disabled={
            ingredients.length < 3 ||
            ingredients.filter((i) => i === "").length > 0 ||
            loading
          }
          onClick={generateRecipes}
        >
          {!loading && "Generate recipe"}
          {loading && (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Generating recipe...
            </>
          )}
        </Button>
        <RecipesTabs
          recipes={recipes}
          saveRecipe={saveRecipe}
          savedRecipes={savedRecipes}
          deleteRecipe={deleteRecipe}
        />
      </div>
    </>
  );
};

export default IngredientsBasedRecipes;
