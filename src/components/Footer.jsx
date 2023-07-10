import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-700 text-gray-50">
            <p className="text-center w-full pt-4">I am <i className="text-gray-300">Kishore Kumer Ghosh</i>. I am a
                self taught novice coder. I look forward to be a full stack web developer and currently working to
                acquire the skill-sets required to get success.
                <br/>My favorite quote.
            </p>
            <hr className="bg-gray-400 w-10/12 mx-auto my-2"/>
            <blockquote cite="http://www.google.com" className="text-center pb-3">
                <p className="italic font-semibold text-3xl"><span
                    className="text-3xl">&ldquo;</span> When
                    going gets tough, tough gets going.<span className="text-3xl">&rdquo; </span>
                </p>
            </blockquote>
        </div>
    )
}

export default Footer