import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const today = new Date().getTime().toString();

    const response = await prisma.appointment.create({
      data: {
        patientName: body?.patientName,
        purpose: body?.purpose,
        status: body?.status,
        duration: body?.duration,
        type: body?.type,
        consultation: body?.consultation,
        dateTime: body?.dateTime,
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

export const PUT = async (request: NextRequest) => {
  try {
    const { id, ...data } = await request.json();
    const appointment = await prisma.appointment.update({
      where: { id },
      data,
    });
    console.log("Updated user:", appointment);
    return new NextResponse(JSON.stringify({ data: appointment, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
};

export const GET = async () => {
  try {
    const response = await prisma.appointment.findMany();
    return NextResponse.json({
      message: "Successfully Todo getting",
      appointment: response,
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
    if (body.id) {
      await prisma.appointment.delete({
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
