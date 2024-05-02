import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("bodyRoute", body);
    const today = new Date().getTime().toString();

    const response = await prisma.patients.create({
      data: {
        foreName: body?.foreName,
        surName: body?.surName,
        gender: body?.gender,
        diagnosis: body?.diagnosis,
        note: body?.note,
        phoneNumber: body?.phoneNumber,
        status: body?.status,
        dateCreated: today,
      },
    });
    return NextResponse.json({ message: "Successfully Todo created" });
  } catch ({ error }: any) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong Todo creating",
      error: error.message,
    });
  }
};

export const GET = async () => {
  try {
    const response = await prisma.patients.findMany();
    return NextResponse.json({
      message: "Successfully Todo getting",
      patients: response,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "something went wrong Todo getting",
      error: JSON.stringify(error),
    });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("body", body);
    if (body.id) {
      await prisma.patients.delete({
        where: {
          id: body.id,
        },
      });
      return NextResponse.json({ message: "successfully Delete" });
    }

    return NextResponse.json({
      message: "All params required, price, title, description",
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: JSON.stringify(error),
    });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { id, ...data } = await request.json();
    const newPatient = await prisma.patients.update({
      where: { id },
      data,
    });
    return new NextResponse(JSON.stringify({ data: newPatient, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};