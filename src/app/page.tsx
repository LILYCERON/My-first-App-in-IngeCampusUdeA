"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { errorToJSON } from 'next/dist/server/render';

const Saludar =(props) => {

  const[name,setName]=useState(props.name)
  setTimeout(()=>{
    setName("Lily")
  },5000)

  useEffect(()=>{
    console.log("El componente saludar se ha actualizado")
  })

  return (
    <h1>Hola {name}, bienvenida</h1>
  )
}

function Banco(props){
  const [saldo, setSaldo] = useState(50);

  function consignar(){
    //Agrega 10 al saldo 
    setSaldo(saldo +10 )
  }

  function retirar(){
    if(saldo === 0 ){
     setSaldo(0)
    alert("Sus fondos son insuficientes:0")
     
    }else{
     //Elimina 10 al saldo
      setSaldo(saldo -10)
    }
  }
  return(
    <>
    <Saludar name={props.name}></Saludar>
    <h2>Cuenta de Ahorros de {props.name} </h2>
    <h3>Saldo: ${saldo}</h3>
    <button onClick={consignar}>Consignar</button>
    <button onClick={retirar}>Retirar</button>
    </>
  )
}
function Chat(){
  return(
    <>
    <form>
      <input type="text" placeholder="Mensaje"/>
      <input type="submit" value={"Enviar Mensaje"}/>
    </form>
    </>
  )
}
export default function Home() {
 
  return (
    <>
    <Banco name="Lily"></Banco>
    </>
  )
}
