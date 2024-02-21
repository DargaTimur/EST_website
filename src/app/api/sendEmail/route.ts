import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest, {params}: any) {
  try {
    const {name, last, email, message} = await request.json();
    console.log(name, last, email, message);

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: '68f17120b8b6e2',
        pass: '7758e2949f0595',
      },
    });

    const mailOption = {
      from: 'order@info.com',
      to: 'uzeheenglish@gmail.com',
      subject: `New order from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Last: ${last}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `
    }
    
    await transporter.sendMail(mailOption)

    return NextResponse.json(
      {message: "Ene amjiltti baina"},
      {status: 200})
  } catch (error) {
    return NextResponse.json(
      {message: "Aldaa baina"},
      {status: 500}
    )
  }
};