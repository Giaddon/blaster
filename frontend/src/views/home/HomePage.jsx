import React from 'react'
import { BlastList, Header, Navbar } from '@components'
import './HomePage.css'

const blasts = [
  {
    id: 1,
    blaster: "Stanley",
    text: "Same flexitarian vexillologist, hexagon bicycle rights normcore raw denim godard JOMO meh ascot banjo. Kombucha taxidermy irony, cold-pressed lyft iPhone banjo trust fund pickled occupy. Pitchfork ethical literally meh mlkshk artisan. Kale chips offal whatever tattooed slow-carb, etsy tote bag tumblr shabby chic cloud bread bitters green juice disrupt roof party la croix.",
  },
  {
    id: 2,
    blaster: "00xCCC",
    text: "I'm a short blast!"
  },
  {
    id: 3,
    blaster: "Stanley",
    text: "Messenger bag normcore godard trust fund, hammock selvage viral shaman crucifix keffiyeh tumblr la croix lo-fi. Gatekeep mlkshk green juice, gastropub lomo sus pok pok 3 wolf moon williamsburg raw denim DIY. Kogi same affogato drinking vinegar fam PBR&B, hammock helvetica cronut gatekeep microdosing tonx. Edison bulb godard ascot adaptogen, VHS williamsburg tbh."
  },
  {
    id: 4,
    blaster: "murder_of_crows",
    text: "Put a bird on it quinoa meditation selfies, meh XOXO single-origin coffee cray salvia +1 kinfolk yr DSA sriracha palo santo. Celiac flannel snackwave taxidermy, umami listicle mustache normcore four dollar toast Brooklyn jean shorts. Etsy snackwave seitan big mood organic. Put a bird on it ennui jianbing ascot truffaut."
  }
]

export default function HomePage() {
  return (
    <div className='home-page'>
      <Header type="h1" text="Welcome to Blaster" tColor="white" align="center" />
      <BlastList blasts={blasts} />
      <Navbar />
    </div>
  )
}