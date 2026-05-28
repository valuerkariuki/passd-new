import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Determine if this is a "Call Request" or a "Counsellor Application"
    const isCallRequest = body.subject === "New 30-Minute Call Request";
    
    const subject = isCallRequest 
      ? `New 30-Minute Call Request – ${body.full_name}`
      : `New APC Counsellor Application – ${body.full_name}`;

    // Dynamic HTML content based on form type
    const htmlContent = isCallRequest
      ? `
        <h1>New 30-Minute Call Request</h1>
        <p><strong>Candidate Name:</strong> ${body.full_name}</p>
        <p><strong>Email Address:</strong> ${body.email}</p>
        <p><strong>Service Selected:</strong> ${body.service}</p>
        <p><strong>Preferred Slots:</strong> ${body.slots}</p>
      `
      : `
        <h1>New APC Counsellor Application</h1>
        <p><strong>Candidate Name:</strong> ${body.full_name}</p>
        <p><strong>Email Address:</strong> ${body.email}</p>
        <p><strong>Package Selected:</strong> ${body.selected_package} (£${body.package_price})</p>
        <p><strong>Global Counsellor Preference:</strong> ${body.global_pref}</p>
        <p><strong>Additional Information:</strong> ${body.additional_info || 'None provided'}</p>
      `;

    await resend.emails.send({
      from: 'Passd.net <onboarding@resend.dev>',
      to: 'passddotnet@gmail.com',
      subject: subject,
      html: htmlContent
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}