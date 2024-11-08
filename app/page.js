'use client';
import './globals.css' 
import styles from './styles/home.module.css'



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Unique typography-driven design with black and white theme
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const NavigationMenu = () => {
    const menuItems = [
      { id: 'home', label: 'HOME', icon: '01' },
      { id: 'videos', label: 'VIDEOS', icon: '02' },
      { id: 'blog', label: 'BLOG', icon: '03' }
    ];

    return (
      <>
        {activeSection !== 'home' && <Logo isHome={false} />}
        <nav className="fixed left-0 top-0 h-full w-20 bg-black text-white flex flex-col items-center justify-center space-y-8 z-50 border-r border-white/10">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => {
                console.log('Clicked:', item.id);
                setActiveSection(item.id);
              }}
              className={`transform transition-all duration-300 hover:scale-110 ${
                activeSection === item.id ? 'text-white' : 'text-gray-500'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] rotate-90">{item.label}</span>
                <span className="text-xs font-mono tracking-widest mt-6">{item.icon}</span>
              </div>
            </button>
          ))}
        </nav>
      </>
    );
  };

  const Logo = ({ isHome }) => {
    const logoStyle = isHome ? {
      width: '100%',
      maxWidth: '200px',
      opacity: 1,
    } : {
      width: '40px',
      transition: 'all 0.3s ease',
      opacity: 1,
    };

    return (
      isHome ? (
        <motion.div 
          className={styles['logo-container']}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <img 
            src='/images/at5ai-logo.png'
            alt="AT5AI Logo"
            className={styles.logo}
            style={{ opacity: 1 }}
          />
        </motion.div>
      ) : (
        <div 
          className="fixed left-0 top-0 w-20 h-20 flex items-center justify-center border-b border-white/10 z-[51] cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          <img 
            src='/images/at5ai-logo.png'
            style={logoStyle}
            alt="AT5AI Logo"
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      )
    );
  };

  const HomePage = () => (
    <motion.div 
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex flex-col justify-center p-12"
    >
      <div className="max-w-4xl mx-auto">
        {activeSection === 'home' && <Logo isHome={true} />}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-none">
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              FUTURE
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              PROOF
            </motion.span>
          </span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl font-mono tracking-wide opacity-70"
        >
          High-Signal, AI News and Tech. No Fluff. 
          <span className="block mt-2 text-sm opacity-50">Breaking down the latest AI in minutes</span>
         
        </motion.p>
      </div>
    </motion.div>
  );

  const VideosPage = () => (
    <motion.div
      key="videos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white p-12"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4].map((video, index) => (
          <motion.div
            key={video}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 border border-white/10 p-4 group"
          >
            <div className="aspect-video bg-white/10 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-mono tracking-wider">PLAY</span>
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
              VIDEO TITLE {video}
            </h3>
            <p className="text-xs font-mono text-white/50">
              EXPERIMENTAL CONTENT / 00:{String(video).padStart(2, '0')}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const BlogPage = () => (
    <motion.div
      key="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white p-12"
    >
      {[1, 2, 3].map((post, index) => (
        <motion.article
          key={post}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="border-b border-white/10 pb-8 mb-8 group"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Blog Post {post}
            </h2>
            <span className="text-sm font-mono text-white/50 group-hover:text-white transition-colors">
              READ MORE →
            </span>
          </div>
          <p className="mt-4 text-white/70 font-mono tracking-wide">
            Experimental narrative exploring the intersections of technology and human experience.
          </p>
        </motion.article>
      ))}
    </motion.div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <HomePage />;
      case 'videos': return <VideosPage />;
      case 'blog': return <BlogPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-black text-white">
      <style jsx global>{`
        body {
          background-color: black;
          color: white;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }
      `}</style>
      
      <NavigationMenu />
      <main className="ml-20">
        <AnimatePresence mode="wait" initial={false}>
          {renderSection()}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;


