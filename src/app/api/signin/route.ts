import { NextResponse } from 'next/server';
import dbConnect from '@/app/config/dbconnect'; // Adjust the path as necessary
import User from '@/app/models/User'; // Adjust the path to your User model
import bcrypt from 'bcryptjs'; // Use bcryptjs for compatibility

export async function POST(request: Request) {
  await dbConnect(); // Connect to the database

  const { email, password } = await request.json();

  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({success: false, message: "user not found"})
  }
  console.log("user : " , user);
  
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("is password valid : ", isPasswordValid);
    
    if (isPasswordValid) {
      return NextResponse.json({ success: true, message: 'Sign-in successful' });
    }
  
  
  return NextResponse.json({ success: false, message: 'Invalid email or password' });
}
