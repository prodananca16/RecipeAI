import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LogoGitHub from "../public/github.png";
import LogoYoutube from "../public/youtubeColored.png";
import LogoNextJS from "../public/nextjs.png";
import LogoMongoDB from "../public/mongodb.png";
import LogoOpenAI from "../public/openai.png";
import Shadcn from "../public/shadcn.png";

import Image from "next/image";

const StudentCard = () => {
  return (
    <Card className="animate__animated animate__fadeInDown delay-0_8s">
      <CardHeader className="text-left">
        <CardTitle>Anca PRODAN</CardTitle>
        <CardDescription>
          Cloud Computing 2024 - SIMPRE - Grupa 1149
        </CardDescription>
        <CardDescription>
          RecipeAI -AI-based web application that generates specific recipes
          based on calories count or ingredients
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between space-x-4">
          <div className="grid gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image src={LogoGitHub} alt="" />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Github repository
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image src={LogoYoutube} alt="" />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Video presentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between space-x-4 pl-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <span className="relative flex">
                  <Image src={LogoNextJS} alt="" height={35} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <span className="relative flex ">
                  <Image src={LogoMongoDB} alt="" height={25} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <span className="relative flex">
                  <Image src={LogoOpenAI} alt="" height={25} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <span className="relative flex">
                  <Image src={Shadcn} alt="" height={25} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
