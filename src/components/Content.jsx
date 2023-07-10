import React, {useState} from 'react'

const Content = () => {

    const [text, setText] = useState("");
    const [inp, setInp] = useState("");

    const displayText = () => {
        setText(inp);

    }
    const getInputValue = (e) => {
        setInp(e.target.value);
        // console.log(inp);
        // important the state is updated only after completing this function. If we log the state before completion
        // of this function it logs prev state. We can access the current value by e.target.value
    }

    return (
        <div className="flex-auto flex justify-between items-center bg-amber-100 px-10">
            <div className="text-center">
                <button
                    className="mb-3 px-6 py-2 text-xl inline-block rounded-lg border border-gray-600 bg-amber-300"
                    onClick={displayText}>
                    Display Text
                </button>
                <p className="w-80 h-80 border ring-1 ring-gray-600 shadow-lg rounded-lg bg-gray-300 text-justify">{text}</p>
            </div>
            <div className="w-80">
                <p className="mb-3">Enter your text here</p>
                <textarea name="text" id="text" cols="30" rows="10"
                          className=" shadow-lg bg-gray-300 border-gray-600 ring-2 rounded-lg ring-gray-600 focus:ring-gray-900"
                          onChange={(e) => getInputValue(e)}></textarea>
                
            </div>
        </div>
    )
}

export default Content;
