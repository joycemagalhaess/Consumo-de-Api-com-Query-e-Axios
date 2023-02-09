import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Router from 'next/router';



export default function Home() {
  
  return(
    <>
    <Head>
      <title>Consumo Com Axios e Query</title>
    </Head>
    <div className={styles.container}>
    <h1>Faça sua escolha:</h1>
    <p>Comsumo de Api Feito com React Query e Axios, apenas um exemplo simples de codigo!</p>
    <button onClick={() => Router.push("/query-axios")}>Query e Axios</button>
    <button onClick={() => Router.push("/query")}>Somente Query</button>      
    </div>

    </>
  )
  }


