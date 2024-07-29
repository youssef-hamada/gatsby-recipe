import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'

const TagsList = ({recipes}) => {
  const newtags = setupTags(recipes)
  // console.log(newtags)
  return (
    <div className='tag-container'>
      <h4>Recipes</h4>
      <div className="tags-list">
        {newtags.map((tag,index) => {
          const [text,value] = tag
          return<Link to={`/${text}`} key={index}>{text} ({value}) </Link>

        })}
      </div>
    </div>
  )
}

export default TagsList
