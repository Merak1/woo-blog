import { NextResponse } from "next/server";
import { conn } from "@/app/libs/mysql";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM entry");
    console.log("results ", results);
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
export async function POST(request) {
  try {
    const data = await request.json();
    const { id, user, title, content } = data;

    const result = await conn.query("INSERT INTO entry SET ? ", {
      id,
      user,
      title,
      content,
    });

    console.log("result 🔵", result);

    return NextResponse.json({ id: result.insertId, user, title, content });
  } catch (err) {
    return NextResponse.json({ message: err.message, status: err.status });
  }
}
