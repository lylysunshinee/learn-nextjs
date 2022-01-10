import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="https://github.com/lylysunshinee/learn-nextjs"> My Github</a>
      </h1>
    </Layout>
  )
}

export default Home
