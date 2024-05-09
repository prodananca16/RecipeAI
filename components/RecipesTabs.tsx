import React from "react";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import Recipes from "./Recipes";
import SavedRecipes from "./SavedRecipes";
const RecipesTabs = (props: any) => {
  return (
    <div>
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="generated">Generated recipe</TabsTrigger>
          <TabsTrigger value="saved">Saved recipes</TabsTrigger>
        </TabsList>
        <TabsContent value="generated">
          <Recipes recipes={props.recipes} save={props.saveRecipe} />
        </TabsContent>
        <TabsContent value="saved">
          {props.loadingSavedRecipes && (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Loading existing recipes
            </Button>
          )}
          {!props.loadingSavedRecipes && (
            <SavedRecipes
              recipes={props.savedRecipes}
              delete={props.deleteRecipe}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecipesTabs;
