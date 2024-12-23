import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Gestion de Presupuestos - Crear Cuenta",
  description: "Gestion de Presupuestos - Crear Cuenta",
};

export default function RegisterPage() {
  return (
    <>
      <h1 className="font-bold text-5xl text-white mb-4">Regístrate ahora</h1>
      <p className="text-2xl font-medium text-gray-300">
        Comienza a gestionar tus{" "}
        <span className="text-green-400">finanzas</span>
      </p>

      <RegisterForm />
    </>
  );
}
