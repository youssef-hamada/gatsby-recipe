import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'



const about = ({data}) => {
  // console.log(data)
  const recipes = data.allContentfulGatsbyRecipe.nodes
  // console.log(recipes)
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe iste, aperiam commodi excepturi tempora officia consequatur nihil architecto nemo nam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio!</p>
            <Link to='/contact' className='btn'>Contact</Link>
          </article>
          <StaticImage src='../assests/images/about.jpeg' alt='person pouring' className='about-img' placeholder='blurred'/>
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}/>

        </section>

      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulGatsbyRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default about
