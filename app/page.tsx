import Hero from "@/components/Hero";
import CompanyRibbons from "@/components/CompanyRibbons";
import BackgroundGradients from "@/components/BackgroundGradients";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyBrandsChoosePixory from "@/components/WhyBrandsChoosePixory";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-x-hidden">
      <style>{`
        .hero-container {
          min-height: auto;
        }
        @media (min-width: 768px) {
          .hero-container {
            min-height: calc(100vh + 220px);
          }
        }
      `}</style>
      <div className="relative overflow-hidden hero-container">
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundGradients />
        </div>
        <Hero />
        <CompanyRibbons />
        <Reviews />
        <Services />
        <Portfolio />
        <WhyBrandsChoosePixory />
        <Statistics />
      </div>
      
    </main>
  );
}
