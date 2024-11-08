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
      { id: 'blog', label: 'BLOG', icon: '03' }
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
    const [shorts, setShorts] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const channelId = 'UCqcbQf6yw5KzRoDDcZ_wBSw';

    useEffect(() => {
      const CACHE_DURATION = 3600000; // 1 hour in milliseconds
      const CACHE_KEY = `youtube_videos_${channelId}`;

      const fetchVideos = async () => {
        try {
          // Check cache first
          const cachedData = localStorage.getItem(CACHE_KEY);
          if (cachedData) {
            const { data, timestamp } = JSON.parse(cachedData);
            if (Date.now() - timestamp < CACHE_DURATION) {
              setShorts(data.shorts);
              setVideos(data.regular);
              setLoading(false);
              return;
            }
          }

          if (!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY) {
            throw new Error('YouTube API key is missing');
          }

          // Reduce maxResults to minimize quota usage
          const searchResponse = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
              params: {
                key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                channelId: channelId,
                part: 'snippet,id',
                order: 'date',
                maxResults: 25, // Reduced from 50
                type: 'video'
              }
            }
          );

          if (searchResponse.data.items) {
            const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');
            const detailsResponse = await axios.get(
              'https://www.googleapis.com/youtube/v3/videos',
              {
                params: {
                  key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                  id: videoIds,
                  part: 'snippet,contentDetails'
                }
              }
            );

            const processedVideos = detailsResponse.data.items.reduce((acc, video) => {
              const isShort = 
                parseDuration(video.contentDetails.duration) <= 60 ||
                video.snippet.title.toLowerCase().includes('#shorts') ||
                video.snippet.description.toLowerCase().includes('#shorts') ||
                (video.snippet.thumbnails.maxres || video.snippet.thumbnails.standard)?.height > 
                (video.snippet.thumbnails.maxres || video.snippet.thumbnails.standard)?.width;

              if (isShort) {
                acc.shorts.push(video);
              } else {
                acc.regular.push(video);
              }
              return acc;
            }, { shorts: [], regular: [] });

            // Cache the results
            localStorage.setItem(CACHE_KEY, JSON.stringify({
              data: processedVideos,
              timestamp: Date.now()
            }));

            setShorts(processedVideos.shorts);
            setVideos(processedVideos.regular);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching videos:', error.response?.data || error.message);
          
          // On error, try to use cached data even if expired
          const cachedData = localStorage.getItem(CACHE_KEY);
          if (cachedData) {
            const { data } = JSON.parse(cachedData);
            setShorts(data.shorts);
            setVideos(data.regular);
            setError('Using cached data - Unable to fetch latest videos');
          } else {
            setError(error.response?.data?.error?.message || 'Failed to load videos');
          }
          setLoading(false);
        }
      };

      fetchVideos();
    }, []);

    // Helper function to parse ISO 8601 duration to seconds
    const parseDuration = (duration) => {
      const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      const hours = (parseInt(match[1]) || 0);
      const minutes = (parseInt(match[2]) || 0);
      const seconds = (parseInt(match[3]) || 0);
      return hours * 3600 + minutes * 60 + seconds;
    };

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

    if (error) {
      return (
        <motion.div
          key="videos-error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-black text-white p-12 flex items-center justify-center"
        >
          <div className="text-xl font-mono text-red-500">{error}</div>
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
        {/* Shorts Section */}
        {shorts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Shorts</h2>
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 pb-4">
                  {shorts.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-none w-[200px] bg-white/5 border border-white/10 group cursor-pointer"
                      onClick={() => window.open(`https://youtube.com/shorts/${video.id}`, '_blank')}
                    >
                      <div className="aspect-[9/16] bg-white/10 relative overflow-hidden">
                        <img 
                          src={video.snippet.thumbnails.high.url} 
                          alt={video.snippet.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-mono tracking-wider">PLAY</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider line-clamp-2">
                          {video.snippet.title}
                        </h3>
                        <p className="text-xs font-mono text-white/50 mt-2">
                          {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Videos Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 p-4 group cursor-pointer"
                onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
              >
                <div className="aspect-video bg-white/10 mb-4 relative overflow-hidden">
                  <img 
                    src={video.snippet.thumbnails.high.url} 
                    alt={video.snippet.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-mono tracking-wider">PLAY</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 line-clamp-2">
                  {video.snippet.title}
                </h3>
                <p className="text-xs font-mono text-white/50">
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          // Replace with your Medium RSS feed URL (add /?format=json at the end)
          const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jhawgood');
          setPosts(response.data.items);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching Medium posts:', err);
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
            key={post.guid}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="border-b border-white/10 pb-8 mb-8 group cursor-pointer"
            onClick={() => window.open(post.link, '_blank')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                {post.title}
              </h2>
              <span className="text-sm font-mono text-white/50 group-hover:text-white transition-colors">
                READ MORE →
              </span>
            </div>
            <p className="mt-4 text-white/70 font-mono tracking-wide">
              {post.description.replace(/<[^>]*>/g, '').substring(0, 200)}...
            </p>
            <div className="mt-2 text-sm font-mono text-white/50">
              {new Date(post.pubDate).toLocaleDateString()}
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


