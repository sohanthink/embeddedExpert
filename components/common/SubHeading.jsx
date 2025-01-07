import React from 'react'

const SubHeading = ({ text, cn }) => {
    return (
        <p className={`text-black-300 text-center text-xl ${cn}`}>{text}</p>
    )
}

export default SubHeading