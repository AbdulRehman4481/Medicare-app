import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { otp, id } = await req.json();
    const response = await prisma.otp.create({
      data: {
        id: id,
        otp: otp,
      },
    });
    return NextResponse.json({ message: "Successfully retrieved user" });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong while retrieving user",
    });
  }
};


export const GET = async () => {
  try {
    const response = await prisma.otp.findMany();
    return NextResponse.json({
      message: "Successfully Todo getting",
      otp: response,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong otp getting",
      error: JSON.stringify(error),
    });
  }
};
