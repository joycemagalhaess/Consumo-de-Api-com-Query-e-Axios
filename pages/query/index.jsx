import React from 'react'
import { useQuery  } from 'react-query'
import styles from '../../styles/Page.module.css'


export default function SomenteQuery (){
  const { data, status } = useQuery(
    'REPOS',
    () => fetch('https://api.github.com/users/joycemagalhaess/repos')
      .then(res => res.json())
  );
  const ReposLista = (Repos) => {
  
    return Repos.map((Repos) => {
     return(
      <>
      <div className={styles.container}>
      <details key={Repos.name} >
           <summary>{Repos.name}</summary>     
           <p>{Repos.description}</p>
        </details>
        
        </div>        
        </>
     ) 
    });
  };

  return (
    <div className={styles.subContainer}>
    {status === "loading" && <div>Aguarde...</div>}
    {status === "error" && <div>Error {status}</div>}
    {status === "success" && 
    <div> 
      <h1>Consumo feito Somente com React Query</h1> 
      {ReposLista(data)}</div>}
   </div>
  );
}