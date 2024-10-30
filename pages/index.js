import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  // const [count, setCount] = useState(0)
  // const increment = useCallback(() => {
  //   setCount((v) => v + 1)
  // }, [setCount])

  // useEffect(() => {
  //   const r = setInterval(() => {
  //     increment()
  //   }, 1000)

  //   return () => {
  //     clearInterval(r)
  //   }
  // }, [increment])

  return (
    <main className={styles.body}>
     
        <div class="logo-container">
          
        <img src="pages/images/at5ai-logo.png" alt="Logo" class="logo" />
    </div>
    </main>
  )
}

export default Home
