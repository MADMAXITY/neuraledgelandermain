import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
// import { Solutions } from "@/components/sections/solutions";
import { Benefits } from "@/components/sections/benefits";
import { FAQs } from "@/components/sections/faqs";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      {/* <Solutions /> */}
      <Benefits />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
