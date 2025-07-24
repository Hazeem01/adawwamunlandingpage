import React from 'react';
import NavBar from './layout/NavBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar logoSrc="/src/assets/adawamun.jpg" />
      
      {/* Main content with proper spacing for fixed navbar */}
      <main className="main-content">
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}>
          Welcome to Ad-dawaamun Institute
        </div>
        
        {/* Add your other components here as we build them */}
        {/* <Hero /> */}
        {/* <Legacy /> */}
        {/* <Mudee /> */}
        {/* <GlobalImpact /> */}
        {/* <ScholarSection /> */}
        {/* <Courses /> */}
        {/* <Testimonials /> */}
        {/* <CallToAction /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default App;