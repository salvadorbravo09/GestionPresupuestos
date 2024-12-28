import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestion de Presupuestos - Iniciar Sesión",
  description: "Gestion de Presupuestos - Iniciar Sesión",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-6xl text-white mb-4">Iniciar Sesión</h1>
        <p className="text-lg font-medium text-gray-300">
          Ingresa tus credenciales para acceder a tu{" "}
          <span className="text-green-400">cuenta</span>
        </p>
        <LoginForm />

        <nav className="mt-10 flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <Link
            href="/auth/register"
            className="text-center text-green-400 hover:text-green-300 transition duration-200"
          >
            ¿No tienes una cuenta? Regístrate
          </Link>
        </nav>
      </div>
    </div>
  );
}
