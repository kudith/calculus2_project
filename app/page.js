"use client";

import {
  WelcomeSection,
  AboutSection,
  TechnologiesSection,
} from "app/sections";
import CalculatorSelector from "./sections/main/calculatorselector";
import TeamProfile from "./sections/member/profile";
export default function Page() {
  return (
    <div className="container-md">
      <WelcomeSection />
      <AboutSection />
      <CalculatorSelector />
      <TeamProfile />
      <TechnologiesSection />
    </div>
  );
}
