import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Allrecipes from "../components/Allrecipes"


export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assests/images/main.jpeg" alt="flour and eggs" 
          className="hero-img" placeholder="tracedSVG" layout="fullWidth"/>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no fluff,just recipes</h4>
            </div>
          </div>
        </header>
      </main>
      <Allrecipes/>

      
      
        
      

    </Layout>
    

  
  )
}
