import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Route, Routes } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ResourcesSection from './components/ResourcesSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const pathRef = useRef(null);

  useEffect(() => {
    const loader = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });
    loader
      .to(pathRef.current, {
        duration: 0.8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z' },
        ease: 'power2.in',
      })
      .to(pathRef.current, {
        duration: 0.8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z' },
        ease: 'power2.out',
      });

    return () => {
      loader.kill();
    };
  }, []);

  return (
    <div className='bg-lightgray'>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              ref={pathRef}
              className="bluee "
              fill="#ff2000"
              d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"

            />
          </svg>
        </div>
      )}
      <Routes>
        <Route path='/' element={<main className="min-h-screen overflow-y-auto scrollbar-none">
        <Header />
        <Hero />
        <Banner />
      </main>}/>
      <Route path='/about' element={<AboutSection/>}/>

      <Route path='/projects' element={<ProjectSection/>}/>
      <Route path='/resource' element={<ResourcesSection/>}/>
      
      </Routes>
    </div>
  );
}

export default App;