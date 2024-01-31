import { NextResponse } from "next/server";
import { connProd, connDev } from "@/app/libs/mysql";

export async function GET() {
  const conn = process.env.NODE_ENV == "development" ? connDev : connProd;
  try {
    const results = await conn.query("SELECT * FROM entry");
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
export async function POST(request) {
  const conn = process.env.NODE_ENV == "development" ? connDev : connProd;
  try {
    const data = await request.json();
    const { id, user, title, content } = data;

    const result = await conn.query("INSERT INTO entry SET ? ", {
      id,
      user,
      title,
      content,
    });

    return NextResponse.json({ id: result.insertId, user, title, content });
  } catch (err) {
    return NextResponse.json({ message: err.message, status: err.status });
  }
}
