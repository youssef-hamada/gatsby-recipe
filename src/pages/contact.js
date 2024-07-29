import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className='contact-page'>
          <article className='contact-info'>

            <h3>Lorem ipsum dolor sit </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam laboriosam ipsum, sunt culpa esse eius ducimus id sint tenetur!</p>
          </article>
          <article>
            <form action="" className='form contact-form'>

              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="msg">Message</label>
                <textarea name="msg" id="msg">

                </textarea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>

      </main>
    </Layout>
  )
}

export default contact 