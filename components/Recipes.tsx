import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrashIcon, HeartIcon } from "@radix-ui/react-icons";
const Recipes = (props: any) => {
  console.log(props);
  return (
    <div className="mt-10">
      {props.recipes.length === 0 && (
        <Card className="animate__animated animate__fadeIn my-3">
          <CardHeader>
            <CardTitle>
              <span className="text-sm font-medium">
                There is no recipe generated. To generate on press{" "}
                <b>Generate recipe</b>. If you saved the generated recipe you
                can find it in <b>Saved recipes</b> section.
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      )}
      {props.recipes.length > 0 && (
        <Card className="animate__animated animate__fadeIn my-3">
          <CardContent>
            <div className="text-sm p-2">
              <ul>
                {props.recipes.map((recipe: any, index: number, id: string) => (
                  <li key={index}>{recipe}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              className="bg-teal-700"
              onClick={() =>
                props.save({
                  text: props.recipes,
                })
              }
            >
              {" "}
              <HeartIcon className="mr-2 h-4 w-4" />
              Save recipe
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Recipes;
