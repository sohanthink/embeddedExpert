import React from 'react'

const Heading = ({ text, cn }) => {
    return (
        <div className={`text-2xl md:text-5xl capitalize font-bold text-black-600 text-center p-0 md:px-80 ${cn}`}>{text}</div>
    )
}

export default Heading