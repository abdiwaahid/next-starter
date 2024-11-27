import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { log } from "console"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    const existingUser = await db.select().from(users).where(eq(users.email, email)).get();
    
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }
    
    const hashedPassword = await hash(password, 10)
    const newUser = await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    }).returning().get();

    return NextResponse.json({
      user: {
        email: newUser.email,
      },
    })
  } catch (error) {
    log(error);
    return NextResponse.json({ error: "An error occurred while registering the user." }, { status: 500 })
  }
}

