import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Gestion de Presupuestos - Olvide mi Password",
  description: "Gestion de Presupuestos - Olvide mi Password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-6xl text-white mb-4">
          ¿Olvidaste tu Contraseña?
        </h1>
        <p className="text-lg font-medium text-gray-300">
          Por favor, ingresa tu correo electrónico para recibir un enlace de{" "}
          <span className="text-green-400">recuperación</span>
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
