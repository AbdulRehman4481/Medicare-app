import { prisma } from "@/config/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
  try {
    const body = await req.json();
    console.log("bodyRoute", body);
    const hashPassword = await bcrypt.hash(body?.password, 10);

    const response = await prisma.user.create({
      data: {
        fullName:body?.fullName,
        email: body?.email,
        password: hashPassword,
        companyName: body?.companyName,
        employees: body?.employees,
      },
    });
    return NextResponse.json({ message: "Succesffuly Todo created" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong Todo creating",
      error: JSON.stringify(error),
    });
  }
};
