import { NextResponse } from "next/server";
import { getCollection } from "@/utils/functions";
import { ObjectId } from "mongodb";
const COLLECTION_NAME = "recipes";

export const GET = async (request: Request, context: any) => {
  const { params } = context;
  const collection = await getCollection(COLLECTION_NAME);
  if (params?.recipeId) {
    const data = await collection.findOne({
      _id: ObjectId.createFromHexString(params.recipeId),
    });
    return NextResponse.json(data);
  } else {
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  }
};

export const DELETE = async (request: Request, context: any) => {
  const { params } = context;
  console.log(params);
  const collection = await getCollection(COLLECTION_NAME);
  if (params?.recipeId) {
    await collection.deleteOne({
      _id: ObjectId.createFromHexString(params.recipeId),
    });
  }
  return NextResponse.json({});
};
