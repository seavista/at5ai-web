

import styles from '../styles/home.module.css'



export default function Home() {


  return (
    <main className={styles.body}>
      <div className="video-container">
        <video 
          src="/videos/at5ai-intro.mp4" 
          autoPlay
          muted
          loop
          playsInline 
          className={styles.video}
        />
      </div>
    </main>
  )
}


