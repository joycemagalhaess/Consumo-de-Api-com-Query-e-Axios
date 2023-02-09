import React from 'react'
import { useQuery  } from 'react-query'
import axios from 'axios';
import styles from '../../styles/Page.module.css'

const fetchRepos = async () => {
    const { data } = await axios.get("https://api.github.com/users/joycemagalhaess/repos");
    return data;
   };
  
  export default function QueryAxios() {
    const { data, status } = useQuery("repos", fetchRepos);
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
      {status === "success" && <div> <h1>Consumo feito com React Query e Axios</h1> {ReposLista(data)}</div>}
     </div>
    );
    }