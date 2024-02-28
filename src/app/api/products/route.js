// pages/api/products.js

import { connect } from "@/dbConfig/dbConfig";
import CustomUser from "@/models/customUserModel"; 
import { NextResponse } from "next/server";

connect();

export async function POST(request){
    try {
        const { username, email } = await request.json(); 

        // Check if both username and email are provided
        if (!username || !email) {
            return NextResponse.json({ 
                error: "Both username and email are required" 
            }, { status: 400 });
        }

        const user = new CustomUser({
            username,
            email,
        });

        const createUser = await user.save();

        const response = NextResponse.json(createUser, { status: 201 }); 

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to create user",
            status: false,
        }, { status: 500 });
    }
}
