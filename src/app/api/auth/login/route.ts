import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        
        const { username, password } = await req.json();
        console.log("Username and pas:", username, "...", password);
        
        if (!username || !password) {
            return NextResponse.json(
                { error: "Username and password are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ username }) as any;
        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isMatch = (password === user.password);
        console.log("🔍 Comparing:", password, "with hash:", user.password);
        console.log("✅ Password match result:", isMatch);
        
        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid [password]" },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        return NextResponse.json(
            { token, message: "Login successful" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Login error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
