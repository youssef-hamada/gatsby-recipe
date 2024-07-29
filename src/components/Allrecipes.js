import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query = graphql`
  query {
    allContentfulGatsbyRecipe(sort: {title: ASC}) {
      nodes {
        title
        id
        cookTime
        prepTime
        slug
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const Allrecipes = () => {
    const data = useStaticQuery(query)  
    // console.log(data)
    const recipes = data.allContentfulGatsbyRecipe.nodes
    // console.log(recipes)
    
  return (
    <section className='recipes-container'>
        <TagsList recipes={recipes}/>
        <RecipesList recipes={recipes}/>
      
    </section>
  )
}

export default Allrecipes
