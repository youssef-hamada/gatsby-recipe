import React from 'react'
import Layout from '../components/Layout'
import { graphql,useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes


    // just using index to avoid key error
  return (
    <Layout>
        <Wrapper>
            {nodes.map( (image,index) => {
                const {name}= image
                return(
                    <article key={index}>
                        <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} className='gallery-img' />
                        <p>{name}</p>
                    </article>
                )
            } )}
        </Wrapper>
      
    </Layout>
  )
}

const Wrapper = styled.section`
display:flex;
flex-wrap:wrap;
flex-dierction: row;
justify-content: space-between;
.gallery-img{
    border-radius:0.5rem;


}
`

const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: false}
            width: 200
            height:200
          )
        }
      }
    }
  }
`

export default Gallery
