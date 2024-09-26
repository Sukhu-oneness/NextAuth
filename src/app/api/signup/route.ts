import { NextResponse } from 'next/server';
import dbConnect from '@/app/config/dbconnect'; // Adjust the path as necessary
import User from '@/app/models/User'; // Adjust the path to your User model
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

export async function POST(request: Request) {
  await dbConnect(); // Connect to the database

  const data = await request.json();

  // Check for existing user
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    return NextResponse.json({
      success: false,
      message: "User already exists.",
    });
  }

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  // Create new user
  const newUser = new User({
    name: data.name,
    email: data.email,
    password: hashedPassword, // Use the hashed password
  });

  try {
    await newUser.save();
    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Error registering user:", error);
    return NextResponse.json({
      success: false,
      message: "Error registering user. Please try again.",
    });
  }
}
