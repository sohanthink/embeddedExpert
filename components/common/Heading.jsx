import React from 'react'

const Heading = ({ text, cn }) => {
    return (
        <div className={`text-3xl md:text-5xl capitalize font-bold text-black-600 text-center ${cn}`}>{text}</div>
    )
}

export default Heading