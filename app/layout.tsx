import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Plate from "../public/plate.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RecipeAI",
  description: "Generate different recipes with OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-3">
          <div className="col-span-1 col-start-1">
            <div className="flex h-screen">
              <div className="m-auto text-center">
                <Image
                  src={Plate}
                  className="animate__animated animate__rollIn  inline-block align-middle"
                  alt=""
                  width={500}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-2 overflow-auto">
            <div className=" h-screen">
              <div className="p-10">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
