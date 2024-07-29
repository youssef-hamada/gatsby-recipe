import React from 'react'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const RecipesList = ({ recipes=[] }) => {
  // console.log(recipes)
  return (
    <div className='recipes-list'>
      {
        recipes.map((recipe,index) => {
          const {id,title,image,prepTime,cookTime,slug} = recipe
          const pathToImage = getImage(image)
          console.log(image)
            return <Link key={id} to={`/${slug}`} className='recipe'>
              <GatsbyImage image={pathToImage} className='recipe-img' alt={title}/>
              <h5>{title}</h5>
              <p>Prep: {prepTime}mins | Cook: {cookTime}min</p>
            </Link>

        } )
      }
    </div>
  )
}

export default RecipesList
