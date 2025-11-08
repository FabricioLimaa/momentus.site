import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "@/react-app/components/ThemeToggle";

// Lazy load pages
const HomePage = lazy(() => import("@/react-app/pages/Home"));
const DocumentPage = lazy(() => import("@/react-app/pages/DocumentPage"));

// Define document pages using the generic DocumentPage component
const PrivacyPolicyPage = () => <DocumentPage title="Política de Privacidade" filePath="/assets/document/PRIVACY_POLICY.txt" />;
const TermsAndConditionsPage = () => <DocumentPage title="Termos e Condições" filePath="/assets/document/TERMS_AND_CONDITIONS.txt" />;
const LicensePage = () => <DocumentPage title="Licença" filePath="/assets/document/LICENSE.txt" />;

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="/license" element={<LicensePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
