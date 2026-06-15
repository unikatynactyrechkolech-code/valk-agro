import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Problem from "@/components/sections/Problem";
import ProductFeatures from "@/components/sections/ProductFeatures";
import Specs from "@/components/sections/Specs";
import Testimonial from "@/components/sections/Testimonial";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <Problem />
      <ProductFeatures />
      <Specs />
      <Testimonial />
      <ContactCTA />
    </>
  );
}
