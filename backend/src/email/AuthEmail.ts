import { transport } from "../config/nodemailer";

type EmailType = {
  name: string;
  email: string;
  token: string;
};

export class AuthEmail {
  static sendConfirmationEmail = async (user: EmailType) => {
    const email = await transport.sendMail({
      from: "GestionPresupuestos <admin@gestionpresupuestos.cl>",
      to: user.email,
      subject: "Confirmación de cuenta",
      html: `
        <h1>Hola ${user.name},</h1>
        <p>Gracias por registrarte en GestionPresupuestos. Por favor, haz clic en el siguiente enlace para confirmar tu cuenta:</p>
        <a href="#">Confirmar cuenta</a>
        <p>Ingresa el código de confirmación: <b>${user.token}</b></p>
      `,
    });
    console.log("Mensaje enviado ", email.messageId);
  };

  static sendPasswordResetToken = async (user: EmailType) => {
    const email = await transport.sendMail({
      from: "GestionPresupuestos <admin@gestionpresupuestos.cl>",
      to: user.email,
      subject: "Restablecer contraseña",
      html: `
      <h1>Hola ${user.name},</h1>
      <p>Has solicitado restablecer tu contraseña. Por favor, haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="#">Restablecer contraseña</a>
      <p>Ingresa el código de restablecer: <b>${user.token}</b></p>
    `,
    });
    console.log("Mensaje enviado ", email.messageId);
  };
}
