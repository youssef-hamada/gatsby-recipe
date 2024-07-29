import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
      <p>&copy; { new Date().getFullYear() } <span>SimplyRecipes</span>. built with <a href="gastbyjs.com">Gatsby</a>
      
      </p>
    </footer>
  )
}

export default Footer
