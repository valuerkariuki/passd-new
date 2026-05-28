import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  const response = await fetch("https://formspree.io/f/mvzylpaj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}