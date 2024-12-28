import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestion de Presupuestos - Crear Cuenta",
  description: "Gestion de Presupuestos - Crear Cuenta",
};

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-6xl text-white mb-4">Regístrate ahora</h1>
        <p className="text-lg font-medium text-gray-300">
          Completa el formulario para crear tu{" "}
          <span className="text-green-400">cuenta</span>
        </p>
        <RegisterForm />

        <nav className="mt-10 flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <Link
            href="/auth/login"
            className="text-center text-green-400 hover:text-green-300 transition duration-200"
          >
            ¿Ya tienes una cuenta? Iniciar sesión
          </Link>
        </nav>
      </div>
    </div>
  );
}
