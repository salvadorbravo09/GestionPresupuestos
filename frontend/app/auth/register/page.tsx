import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";

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
      </div>
    </div>
  );
}
