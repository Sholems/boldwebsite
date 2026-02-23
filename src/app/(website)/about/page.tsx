import { Suspense } from "react";
import AboutPage from "@/components/AboutPage";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <div className="animate-fade-in">
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
        <CTA />
      </Suspense>
    </div>
  );
}
