import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong Todo getting",
      error: JSON.stringify(error),
    });
  }
};
