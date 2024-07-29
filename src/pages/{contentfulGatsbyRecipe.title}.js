import React from 'react'
import { graphql,Link } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'
import Layout from '../components/Layout'

const recipeTemp = ({data}) => {

  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    desc:{desc},
    image,
  } = data.contentfulGatsbyRecipe


  const pathToImage = getImage(image)
  const {tags,instructions,ingredients,tools} = content


  return (
    <Layout>
      
      
      <main className='page'>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage image={pathToImage} className='about-img'/>
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{desc}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock/>
                  <h5>prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory/>
                  <h5>Cooking Time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople/>
                  <h5>Servings</h5>
                  <p>{servings} </p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{tags.map((tag,index) => {
                  return <Link to={`/${tag}`} key={index} >{tag}</Link>
                })}
              </p>
            </article>
          </section>
          {/* rest of the content  */}
          <section className="recipe-content">
            <article>
                <h4>Instructions</h4>
                {
                  instructions.map((ins,index) => {
                    return <div className='single-instruction'>
                      <header>
                        <p>step {index + 1}</p>
                        <div></div>
                      </header>
                      <p>{ins}</p>
                    </div>

                  })
                }
            </article>
            <article className="second-column">
                <div>
                  <h4>Ingredients</h4>
                  {ingredients.map((item,index) => {
                    return <p className="single-ingredient">
                      {item}
                    </p>
                  })}
                </div>
                <div>
                  <h4>Tools</h4>
                  {tools.map((item,index) => {
                    return <p className="single-tool">
                      {item}
                    </p>
                  })}
                </div>
            </article>
          </section>
        </div>
        
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title:String) {
    contentfulGatsbyRecipe(title:{eq:$title}) {
      content {
        ingredients
        instructions
        tags
        tools
      }
      cookTime
      prepTime
      servings
      slug
      title
      desc {
        desc
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`


export default recipeTemp
