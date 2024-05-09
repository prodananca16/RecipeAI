"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";
import AddIngredientButton from "./AddIngredientButton";
import Link from "next/link";
import Ingredient from "./Ingredient";
import RecipesTabs from "./RecipesTabs";
const CaloriesBasedRecipes = () => {
  const [calories, setCalories] = useState<string>("1800");
  const [meal, setMeal] = useState<string>("breakfast");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loadingSavedRecipes, setLoadingSavedRecipes] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      function sleep(ms: any) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      const result = await fetch("/api/recipes/type/calories", {
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
    const result = await fetch("/api/recipes/type/calories", {
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
      body: JSON.stringify({
        ingredients: [],
        cookingTime: "",
        calories,
        meal,
      }),
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
    recipe.type = "calories";
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
  const onChangeCalories = (event: any) => {
    setCalories(event.target.value);
  };
  const onChangeMeal = (value: any) => {
    setMeal(value);
  };
  return (
    <>
      <Card className="animate__animated animate__fadeInDown">
        <CardHeader>
          <CardTitle>
            <span className="text-2xl ">Calories based recipes</span>
          </CardTitle>
          <CardDescription>
            Generate 1 recipe by setting the nutritional value and the meal
            type. When you are finished press <b>Generate recipe</b> button. If
            no meal is selected <b>Breakfast</b> will be used by default.
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
          <Label htmlFor="calories">
            Enter the amount of calories per serving
          </Label>
          <Input
            type="text"
            id="calories"
            value={calories}
            onChange={onChangeCalories}
            placeholder="Enter the number of calories"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
          <Select onValueChange={onChangeMeal}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a meal type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="bg-green-900 flex my-5"
          disabled={calories.length === 0 || loading}
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

export default CaloriesBasedRecipes;
