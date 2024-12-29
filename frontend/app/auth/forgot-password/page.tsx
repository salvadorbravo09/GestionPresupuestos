import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import Link from "next/link";

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

        <nav className="mt-5 flex flex-col">
          <Link
            href="/auth/login"
            className="text-center text-green-400 hover:text-green-300 transition duration-200"
          >
            ¿Ya tienes una cuenta?{" "}
            <span className="text-white">Iniciar sesión</span>
          </Link>
        </nav>

        <nav className="mt-2 flex flex-col">
          <Link
            href="/auth/register"
            className="text-center text-green-400 hover:text-green-300 transition duration-200"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-white">Regístrate</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
