import React from 'react'

const Heading = ({ text, cn }) => {
    return (
        <div className={`text-5xl capitalize font-bold text-black-600 py-3 text-center ${cn}`}>{text}</div>
    )
}

export default Heading