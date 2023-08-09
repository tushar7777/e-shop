import { NextResponse } from "next/server";
import { users } from "@/utils/db";

export function GET(request, content) {
    const data = users.filter(item => item.id == content.params.id)//item.id === content.params.id)
    const result = data.length === 0
        ? { result: "Result Not Found", success: false }
        : { result: data, success: true }
    return NextResponse.json(result, { status: 200 })
}