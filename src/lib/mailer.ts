//mailer.ts
import nodemailer, { type Transporter } from "nodemailer";
export type Source = "newsletter" | "demo_request" | "contact";

let transporter: Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Mail credentials not configured (GMAIL_USER/GMAIL_PASS).");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  return transporter;
}

function buildTemplate(params: {
  source: Source;
  name?: string;
  companyName?: string;
  jobTitle?: string;
}) {
  const firstName = params.name ? params.name.split(" ")[0] : "there";
  const brandColor = "#A9FE02";
  const darkColor = "#000000";
  const fontStack =
    `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif`;

  const wrapperTop = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f4f6;">
      <tr>
        <td align="center" style="padding:24px;">
          <!--[if mso]>
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 24px;">
          <![endif]-->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);">
            <tr>
              <td align="center" style="background-color:#0a0a0a;padding:28px 24px;">
                <h1 style="margin:0;color:#ffffff;font-family:${fontStack};font-size:28px;line-height:1.2;font-weight:800;letter-spacing:1px;">Mendy<span style="color:${brandColor};">go</span></h1>
              </td>
            </tr>
  `;

  const wrapperBottom = `
            <tr>
              <td style="padding:0 28px 0 28px;"><hr style="border:0;border-top:1px solid #e5e7eb;margin:0;"/></td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 28px;">
                <p style="margin:0 0 12px 0;font-family:${fontStack};color:#6b7280;font-size:14px;">Follow us on social media</p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:0 8px;"><a href="https://x.com/MendygoSocial" target="_blank"><img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" width="28" height="28" alt="X/Twitter" style="display:block;border:0;"/></a></td>
                    <td style="padding:0 8px;"><a href="https://www.linkedin.com/company/mendygo/" target="_blank"><img src="https://img.icons8.com/color/48/linkedin.png" width="28" height="28" alt="LinkedIn" style="display:block;border:0;"/></a></td>
                    <td style="padding:0 8px;"><a href="https://www.facebook.com/share/1Yug6qgHLe" target="_blank"><img src="https://img.icons8.com/color/48/facebook-new.png" width="28" height="28" alt="Facebook" style="display:block;border:0;"/></a></td>
                    <td style="padding:0 8px;"><a href="https://www.instagram.com/mendygo.ai" target="_blank"><img src="https://img.icons8.com/color/48/instagram-new--v1.png" width="28" height="28" alt="Instagram" style="display:block;border:0;"/></a></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;background-color:#f9fafb;font-family:${fontStack};color:#6b7280;font-size:12px;line-height:1.5; text-align: center;">
                You’re receiving this email because you subscribed to updates from Mendygo.
                <br> If this wasn’t you, you can safely ignore this message.
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td></tr></table>
          <![endif]-->
        </td>
      </tr>
    </table>
  `;

  if (params.source === "newsletter") {
    return {
      subject: "Welcome to the Mendygo Newsletter!",
      text: `Hi ${firstName}, you're officially on the list! Thanks for subscribing to the Mendygo newsletter.`,
      html: `
        ${wrapperTop}
          <tr>
            <td style="padding:32px 28px 16px 28px;font-family:${fontStack};color:#111111; line-height: 1.6;">
              <h2 style="margin:0 0 12px 0;font-size:24px;line-height:1.3;font-weight:700;">You're officially on the list!</h2>
              <p style="margin:0 0 16px 0;font-size:16px;color:#374151;">Hi ${firstName},</p>
              <p style="margin:0 0 18px 0;font-size:16px;color:#374151;">🎉 Thanks for subscribing to the <strong>Mendygo</strong> newsletter. Get ready for exclusive product updates, industry insights, and best practices delivered right to your inbox. We're thrilled to have you with us!</p>
            </td>
          </tr>
          <tr>
            <td align="left" style="padding:0 28px 28px 28px;">
              <a href="https://mendygo.com" target="_blank" style="background-color:${brandColor};color:${darkColor} !important;text-decoration:none;font-family:${fontStack};font-size:16px;font-weight:bold;border-radius:8px;display:inline-block;padding:14px 24px;text-align:center;">
                <span style="color:${darkColor} !important; text-decoration:none;">Schedule a Demo</span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px 28px;font-family:${fontStack};color:#374151;font-size:16px;">— The Mendygo Team</td>
          </tr>
        ${wrapperBottom}
      `,
    };
  }

  if (params.source === "demo_request") {
    return {
      subject: "Your Mendygo Demo Request",
      text: `Hi ${firstName}, we've received your demo request. Our team will reach out shortly to schedule a time that works for you.`,
      html: `
        ${wrapperTop}
          <tr>
            <td style="padding:32px 28px 16px 28px;font-family:${fontStack};color:#111111; line-height: 1.6;">
              <h2 style="margin:0 0 12px 0;font-size:24px;line-height:1.3;font-weight:700;">Thanks for your interest!</h2>
              <p style="margin:0 0 16px 0;font-size:16px;color:#374151;">Hi ${firstName},</p>
              <p style="margin:0 0 18px 0;font-size:16px;color:#374151;">🙌 We've received your request for a personalized demo of <strong>Mendygo</strong>. Our team is excited to show you how our platform can help you achieve your goals.</p>
              ${
                params.companyName || params.jobTitle
                  ? `<div style="margin-top:20px;padding:16px;border-radius:8px;background-color:#f9fafb">
                       <p style="margin:0 0 8px 0;font-size:14px;font-weight:bold;color:#111111;">Your Information</p>
                       <p style="margin:4px 0;font-size:14px;color:#374151;"><b>Company:</b> ${params.companyName || "-"}</p>
                       <p style="margin:4px 0;font-size:14px;color:#374151;"><b>Role:</b> ${params.jobTitle || "-"}</p>
                     </div>`
                  : ""
              }
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px 28px;font-family:${fontStack};color:#374151;font-size:16px;">
              <strong>What to expect:</strong> A no-pressure walkthrough tailored to your specific needs and a chance to get all your questions answered.
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px 28px;font-family:${fontStack};color:#374151;font-size:16px;">— The Mendygo Team</td>
          </tr>
        ${wrapperBottom}
      `,
    };
  }

  return {
    subject: "We've received your message",
    text: `Hi ${firstName}, thanks for contacting Mendygo. We’ve received your message and will get back to you soon.`,
    html: `
      ${wrapperTop}
        <tr>
          <td style="padding:32px 28px 16px 28px;font-family:${fontStack};color:#111111; line-height: 1.6;">
            <h2 style="margin:0 0 12px 0;font-size:24px;line-height:1.3;font-weight:700;">We've got your message!</h2>
            <p style="margin:0 0 16px 0;font-size:16px;color:#374151;">Hi ${firstName},</p>
            <p style="margin:0 0 18px 0;font-size:16px;color:#374151;">📩 Thanks for reaching out to <strong>Mendygo</strong>. We’ve received your message and our team will get back to you as soon as possible (usually within one business day).</p>
          </td>
        </tr>
         <tr>
            <td align="left" style="padding:0 28px 28px 28px;">
              <a href="https://mendygo.com/contact" target="_blank" style="background-color:${brandColor};color:${darkColor} !important;text-decoration:none;font-family:${fontStack};font-size:16px;font-weight:bold;border-radius:8px;display:inline-block;padding:14px 24px;text-align:center;">
                <span style="color:${darkColor} !important; text-decoration:none;">Visit Contact Page</span>
              </a>
            </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px 28px;font-family:${fontStack};color:#374151;font-size:16px;">— The Mendygo Team</td>
        </tr>
      ${wrapperBottom}
    `,
  };
}

export async function sendWelcomeEmail(opts: {
  to: string;
  source: Source;
  name?: string;
  companyName?: string;
  jobTitle?: string;
}) {
  const { to, source, name, companyName, jobTitle } = opts;

  const { subject, text, html } = buildTemplate({
    source,
    name,
    companyName,
    jobTitle,
  });

  const fromAddress = process.env.MAIL_FROM || process.env.GMAIL_USER!;
  const t = getTransporter();

  return t.sendMail({
    from: `Mendygo <${fromAddress}>`,
    to,
    subject,
    text,
    html,
  });
}