import Image from 'next/image'
import styles from './page.module.css'

const Saludar = () => {
  return (
    <h1>Hola soy el componente saludar</h1>
  )
}

export default function Home() {
  return (
    <>
    <p>Hello world!</p>
    <Saludar></Saludar>
    </>
  )
}
