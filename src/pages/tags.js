import React from 'react'
import Layout from "../components/Layout"
import {Link,graphql} from 'gatsby'
import setupTags from '../utils/setupTags'


const tags = ({data}) => {

  const newTags = setupTags(data.allContentfulGatsbyRecipe.nodes)
  console.log(newTags)
  // console.log(data)
  return (
    <Layout>
        <main className='page'>
          <section className="tags-page">
            {newTags.map((tag,index) => {
              const [text,value] = tag
              return <Link key={index} to={`/${text}`} className='tag'>
              
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            })}
          </section>

        </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulGatsbyRecipe(filter: {}) {
      nodes {
        id
        content {
          tags
        }
      }
    }
  }
`

export default tags
