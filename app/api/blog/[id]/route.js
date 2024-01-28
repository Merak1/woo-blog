import { NextResponse } from "next/server";
import { conn } from "@/app/libs/mysql";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM entry WHERE id = ?", [
      params.id,
    ]);
    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "Entry not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM entry WHERE id = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: result.affectedRows },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE entry SET ? WHERE id = ?", [
      data,
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    const updatedEntry = await conn.query("SELECT * FROM entry WHERE id = ?", [
      params.id,
    ]);

    return NextResponse.json(updatedEntry[0]);
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
