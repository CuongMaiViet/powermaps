import React, { useEffect, useRef } from 'react'
import './index.scss'
import anime from 'animejs/lib/anime.es.js'

const Transition = () => {
  const bannerRef = useRef()

  const createBlock = () => {
    const block = `<div class='block' style="display:block;background-color:black;transform:scale(0);"></div>`
    let blocks = block

    for (let i = 0; i < 800; i++) {
      blocks += block
    }
    return { __html: blocks }
  }

  useEffect(() => {
    const blocks = document.querySelectorAll('.block')
    const bWidth = blocks[0].offsetWidth
    const bHeight = blocks[0].offsetHeight
    const numRow = Math.ceil(window.innerWidth / bWidth)
    const numCol = Math.floor(window.innerHeight / bHeight)
    // setNumBlock(numRow * numCol)

    anime
      .timeline({
        targets: blocks,
        delay: anime.stagger(100, {
          start: 1000,
          grid: [numRow, numCol],
          from: 'center',
        }),
      })
      .add({
        scale: [
          { value: 0.1, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInOutQuad', duration: 1000 },
          { value: 0.9, easing: 'easeOutSine', duration: 1000, delay: 1000 },
          { value: 0, easing: 'easeInOutQuad', duration: 1000 },
        ],
      })
      .add(
        {
          targets: '.banner',
          scale: 0,
        },
        '-=2000'
      )
    // .add({
    //   scale: [
    //     { value: 1, easing: 'easeOutSine', duration: 500 },
    //     { value: 0, easing: 'easeInOutQuad', duration: 1000 },
    //   ],
    // })

    // for (let i = 0; i < 400; i++) {
    //   bannerRef.current.innerHTML += "<div className='block'></div>"
    // }
  }, [])

  return (
    <div
      className="banner"
      ref={bannerRef}
      dangerouslySetInnerHTML={createBlock()}
    ></div>
  )
}

export default Transition
