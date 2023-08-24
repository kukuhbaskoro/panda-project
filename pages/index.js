import { useState } from 'react'
import Header from '../components/Pages/Home/Header'
import Features from '../components/Pages/Home/Features'
import FAQ from '../components/Pages/Home/FAQ'
import Footer from '../components/Pages/Home/Footer'
import LoginModal from '../components/Pages/Home/LoginModal'
import Navbar from '../components/navbar'
import Buttons from '../components/button'

export default function Home() {
  const [open, setOpen] = useState('Babi')
  const [dimas, setDimas] = useState('Anjing')

  return (
    <>
    {/* <Navbar /> */}
      {/* <Header OpenModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} CloseModal={() => setOpen(false)} /> */}
      <Buttons label="Button" />
      <Buttons label="Tai" />
      <Buttons variant="contained" label="tombol" />
      <Buttons variant="outlined" label="sambo" onClick={()=> setDimas('Tanti')} />
      <Buttons label={open} />
      <p>{dimas}</p>
    </>
  )
}
