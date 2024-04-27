import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { showToast } from "@/(components)/toast/Toast";

export const POST = async (req: NextRequest) => {
  try {
    const { email } = await req.json();
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!existingUser) {
      return NextResponse.json({ message: "Email does not exist" });
    }
    return NextResponse.json({ message: "Successfully retrieved user" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "Something went wrong while retrieving user",
      // error: error.message,
    });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { email, oldPassword, newPassword } = await request.json();

    const userLogin = await prisma.user.findUnique({
      where: { email },
    });
    const passwordMatch = await bcrypt.compare(oldPassword, userLogin.password);
    if (!passwordMatch) {
      return new NextResponse(JSON.stringify(Error), { status: 400 });
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);

    const user = await prisma.user.update({
      where: { email },
      data: {
        password: hashPassword,
      },
    });
    return new NextResponse(JSON.stringify({ data: user, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};
