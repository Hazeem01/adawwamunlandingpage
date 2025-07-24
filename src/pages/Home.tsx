// src/pages/Home.tsx
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import Mudee from "../components/Mudee";
import GlobalImpact from "../components/GlobalImpact";
import ScholarSection from "../components/ScholarSection";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Legacy />
      <Mudee />
      <GlobalImpact />
      <ScholarSection />
      <Courses />
      <Testimonials />
      <CallToAction />
      <Footer />
    </MainLayout>
  );
};

export default Home;
