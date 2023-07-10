import React from 'react'

const Header = (props) => {
    const {title} = props;
    return (
        <div className="h-32 bg-gray-700 flex flex-col justify-center text-gray-50">
            <h2 className="text-center w-full font-semibold text-3xl underline">{title}</h2>
            <p className="text-center">Practiced by : Kishore</p>
        </div>
    )
}

export default Header