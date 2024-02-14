import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {name, last, email, message} = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 465,
      secure: true,
      auth: {
        user: '68f17120b8b6e2',
        pass: '7758e2949f0595',
      },
    });

    const mailOption = {
      from: 'order@info@.com',
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
      {message: "Ene successful baina"},
      {status: 200})
  } catch (error) {
    return NextResponse.json(
      {message: "Aldaa baina"},
      {status: 500}
    )
  }
};