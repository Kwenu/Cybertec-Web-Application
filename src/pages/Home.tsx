import React from "react";
import { Hero } from "../components/home/Hero";
import { ProductFinder } from "../components/home/ProductFinder";
import { ProductsShowcase } from "../components/home/ProductsShowcase";
import { PartnersShowcase } from "../components/home/PartnersShowcase";
import { FeaturedTechnology } from "../components/home/FeaturedTechnology";
import { JourneySection } from "../components/home/JourneySection";
import { SupplyProcess } from "../components/sections/SupplyProcess";
import { GlobalNetworkSection } from "../components/home/GlobalNetworkSection";
import { SourcingPartner } from "../components/sections/SourcingPartner";
import { IndustriesGrid } from "../components/sections/IndustriesGrid";
import { WhyCybertec } from "../components/home/WhyCybertec";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { EngineeringSupport } from "../components/sections/EngineeringSupport";
import { FinalCTA } from "../components/sections/FinalCTA";

export function Home() {
  return (
    <main>
      <Hero />
      <ProductFinder />
      <ProductsShowcase />
      <PartnersShowcase />
      <FeaturedTechnology />
      <JourneySection />
      <SupplyProcess />
      <GlobalNetworkSection />
      <SourcingPartner />
      <IndustriesGrid />
      <WhyCybertec />
      <ProjectsPreview />
      <EngineeringSupport />
      <FinalCTA />
    </main>
  );
}
