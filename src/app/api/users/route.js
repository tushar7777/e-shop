import { NextResponse } from "next/server";

export function GET(request) {
    const data = {
        name: "Peter",
        age: 22,
        email: "peter@mail.com"
    }
    return NextResponse.json(data, { status: 200 })
}