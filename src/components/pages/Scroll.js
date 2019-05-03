import React from 'react';
import './Scroll.scss'

const Scroll = (props) => {
  let {opening_crawl, title, release_date} = props
  return(
    <section className="scroll-wrapper">
      <article className="scroll">
        <p>{opening_crawl}{title}{release_date}</p>
      </article>
    </section>
  )
}

export default Scroll





