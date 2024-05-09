import { NextResponse } from "next/server";
import { getCollection } from "@/utils/functions";
const COLLECTION_NAME = "recipes";

export const GET = async (request: Request, context: any) => {
  const { params } = context;
  console.log(params);
  const collection = await getCollection(COLLECTION_NAME);
  const data = await collection.find({ type: params.type }).toArray();
  return NextResponse.json(data);
};
