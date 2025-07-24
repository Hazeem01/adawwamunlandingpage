// src/pages/Home.tsx
import React from "react";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <section className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Hello World</h1>
        <p className="text-gray-300">
          Welcome to Ad-dawaamun. Preserving Knowledge and Nurturing Imaan.
        </p>
      </section>
    </MainLayout>
  );
};

export default Home;
