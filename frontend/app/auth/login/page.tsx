import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

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
      </div>
    </div>
  );
}
