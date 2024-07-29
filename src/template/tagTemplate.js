import React from 'react'
import {graphql} from'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'

const tagTemplate = ({data,pageContext}) => {
    const recipes=data.allContentfulGatsbyRecipe.nodes
    console.log(recipes)
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
            <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
    query getRecipeByTag($tag:String) {
  allContentfulGatsbyRecipe(filter: {content: {tags: {eq: $tag}}}) {
    nodes {
      title
      id
      prepTime
      cookTime
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
}

`

export default tagTemplate
