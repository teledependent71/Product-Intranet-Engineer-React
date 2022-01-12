import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Product Intranet Engineer</title>
        <meta property="og:title" content="Product Intranet Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
