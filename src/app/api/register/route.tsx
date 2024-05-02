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

export const GET = async () => {
  try {
    const response = await prisma.user.findMany();
    return NextResponse.json({
      message: "Successfully user getting",
      user: response,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong user getting",
      error: JSON.stringify(error),
    });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { id, ...data } = await request.json();
    const newUser = await prisma.user.update({
      where: { id },
      data,
    });
    return new NextResponse(JSON.stringify({ data: newUser, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};