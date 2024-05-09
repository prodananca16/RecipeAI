import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, HeartIcon } from "@radix-ui/react-icons";
const SavedRecipes = (props: any) => {
  console.log(props);
  return (
    <div className="mt-10">
      {props.recipes.length === 0 && (
        <Card className="animate__animated animate__fadeIn my-3">
          <CardHeader>
            <CardTitle>
              <span className="text-sm font-medium">
                There are no saved recipes.
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      )}
      {props.recipes.length > 0 && (
        <ul>
          {props.recipes.map((recipe: any, index: number) => (
            <li key={index}>
              <Card className="animate__animated animate__fadeIn my-3">
                <CardContent>
                  <div className="text-sm p-2">
                    <ul>
                      {recipe.text?.map((t: any, index: any) => (
                        <li key={index}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="destructive"
                    onClick={() => props.delete(recipe._id)}
                  >
                    {" "}
                    <TrashIcon className="mr-2 h-4 w-4" />
                    Delete recipe
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;
