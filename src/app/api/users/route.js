import { NextResponse } from "next/server";
import { users } from "@/utils/db";

export function GET(request) {
    const data = users
    return NextResponse.json(data, { status: 200 })
}