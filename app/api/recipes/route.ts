import { NextResponse, NextRequest } from "next/server";
import { getCollection } from "@/utils/functions";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "recipes";

export const POST = async (request: Request) => {
  try {
    const collection = await getCollection(COLLECTION_NAME);
    const data = await request.json();
    console.log(data);
    let response = await collection.insertOne(data);
    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json({ Error: e });
  }
};

export const PUT = async (record: any) => {
  const collection = await getCollection(COLLECTION_NAME);
  const id = record._id;
  delete record._id;
  return collection.updateOne({ _id: new ObjectId(id) }, { $set: record });
};
