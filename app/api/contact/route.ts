import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_UNdUTRVT_87yLSp7HChg4q3Fdtrkpcuuz');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { besoin, nom, prenom, email, telephone, message } = body;

    const data = await resend.emails.send({
      from: 'Autrement Senior <onboarding@resend.dev>',
      to: ['expertise@autrementsenior.fr'],
      subject: `📩 Nouvelle demande de contact - ${besoin}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Besoin :</strong> ${besoin}</p>
        <p><strong>Message :</strong><br/>${message || '<em>(aucun message)</em>'}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur API Contact :', error);
    return NextResponse.json({ success: false, error });
  }
}
