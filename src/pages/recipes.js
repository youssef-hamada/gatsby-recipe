import React from 'react'
import Layout from '../components/Layout'
import Allrecipes from "../components/Allrecipes"

const recipes = () => {
  return (
    <Layout>
      <main className="page">

        <Allrecipes/>
      </main>
    </Layout>
  )
}

export default recipes
