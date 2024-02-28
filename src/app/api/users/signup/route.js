import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  console.log("connected to MongoDb");

  return NextResponse.json({ request: true });
}
