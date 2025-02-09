'use client';
import './globals.css' 
import styles from './styles/home.module.css'



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// Unique typography-driven design with black and white theme
export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const NavigationMenu = () => {
    const menuItems = [
      { id: 'home', label: 'HOME', icon: '01' },
      { id: 'videos', label: 'VIDEOS', icon: '02' },
      { id: 'blog', label: 'BLOG', icon: '03' },
      { id: 'tools', label: 'TOOLS', icon: '04' }
    ];

    // Add social media links data
    const socialLinks = [
      { href: 'https://youtube.com/@at5ai', icon: 'YouTube', ariaLabel: 'Visit AT5AI on YouTube' },
      { href: 'https://tiktok.com/@at5.ai', icon: 'TikTok', ariaLabel: 'Visit AT5AI on TikTok' },
      { href: 'https://x.com/at5ai', icon: 'X', ariaLabel: 'Visit AT5AI on X' }
    ];

    return (
      <>
        {activeSection !== 'home' && <Logo isHome={false} />}
        <nav className="fixed left-0 top-0 h-full w-20 bg-black text-white flex flex-col items-center justify-between py-8 z-50 border-r border-white/10">
          <div className="flex flex-col items-center space-y-8 mt-24">
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
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col space-y-4">
            {socialLinks.map(({ href, icon, ariaLabel }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="text-gray-500 hover:text-white transform transition-all duration-300 hover:scale-110"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]">{icon}</span>
              </a>
            ))}
          </div>
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
          <span className="block overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              YOURSELF
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

  const VideosPage = () => {
    const [loading, setLoading] = useState(true);
    const playlistId = 'PLUtqq-ngYy83Z9uohILgaO6kWYVJRsx1l'; // Replace with your playlist ID

    useEffect(() => {
      // Simulate loading for smoother transition
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <motion.div
          key="videos-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-black text-white p-12 flex items-center justify-center"
        >
          <div className="text-xl font-mono">Loading videos...</div>
        </motion.div>
      );
    }

    return (
      <motion.div
        key="videos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white p-12"
      >
        <div className="aspect-video w-full max-w-6xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            title="AT5AI YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    );
  };

  const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const apiKey = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
          const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/1013667258133036871/posts?key=${apiKey}`);
          setPosts(response.data.items);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching Blogger posts:', err);
          setError('Failed to load blog posts');
          setLoading(false);
        }
      };

      fetchPosts();
    }, []);

    if (loading) {
      return (
        <motion.div
          key="blog-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-black text-white p-12 flex items-center justify-center"
        >
          <div className="text-xl font-mono">Loading posts...</div>
        </motion.div>
      );
    }

    if (error) {
      return (
        <motion.div
          key="blog-error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-black text-white p-12 flex items-center justify-center"
        >
          <div className="text-xl font-mono text-red-500">{error}</div>
        </motion.div>
      );
    }

    if (selectedPost) {
      return (
        <motion.div
          key="blog-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-black text-white p-12"
        >
          <button onClick={() => setSelectedPost(null)} className="text-white mb-4">Back to Posts</button>
          <h2 className="text-4xl font-black uppercase tracking-tighter">{selectedPost.title}</h2>
          <div className="mt-4 text-white/70 font-mono tracking-wide" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          <div className="mt-2 text-sm font-mono text-white/50">{new Date(selectedPost.published).toLocaleDateString()}</div>
        </motion.div>
      );
    }

    return (
      <motion.div
        key="blog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white p-12"
      >
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="border-b border-white/10 pb-8 mb-8 group cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                {post.title}
              </h2>
              <span className="text-sm font-mono text-white/50 group-hover:text-white transition-colors">
                READ MORE →
              </span>
            </div>
            <div className="flex items-center mt-4">
              {post.images && post.images.length > 0 && (
                <img src={post.images[0].url} alt={post.title} className="w-20 h-20 object-cover mr-4" />
              )}
              <p className="text-white/70 font-mono tracking-wide">
                {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
              </p>
            </div>
            <div className="mt-2 text-sm font-mono text-white/50">
              {new Date(post.published).toLocaleDateString()}
            </div>
          </motion.article>
        ))}
      </motion.div>
    );
  };

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
}


