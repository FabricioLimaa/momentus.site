import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/react-app/components/Navbar";

// Lazy load pages
const HomePage = lazy(() => import("@/react-app/pages/Home"));
const LoginPage = lazy(() => import("@/react-app/pages/Login"));
const DocumentPage = lazy(() => import("@/react-app/pages/DocumentPage"));

// Define document pages using the generic DocumentPage component
const PrivacyPolicyPage = () => <DocumentPage title="Política de Privacidade" filePath="/assets/document/PRIVACY_POLICY.txt" />;
const TermsAndConditionsPage = () => <DocumentPage title="Termos e Condições" filePath="/assets/document/TERMS_AND_CONDITIONS.txt" />;
const LicensePage = () => <DocumentPage title="Licença" filePath="/assets/document/LICENSE.txt" />;

export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Carregando...</div>}>
        <Routes>
          {/* Rotas Principais */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rotas Legais e Documentação */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="/license" element={<LicensePage />} />

          {/* Rota Coringa Segura (Fallback 404 redirecionando para /home) */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
