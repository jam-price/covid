import React from 'react';
import '../styles/DisplayBox.css'

const DisplayBox = (props) => {
    // console.log(props)

    return (
        <div className="display-boxes">
            <div className="box new">
                <h1>{props.new}</h1>
                <h2>New Cases in the last 24 hours</h2>
            </div>
            <div className="box total">
                <h1>{props.total}</h1>
                <h2>Total Cases</h2>
            </div>
        </div>
        
    )
}

export default DisplayBox