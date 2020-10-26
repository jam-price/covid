import React from 'react'
import '../styles/Display.css'
import DisplayBox from './DisplayBox'

const Display = (props) => {
    let todayData = props.data[0];
    let todayDate = props.data[0].date;
    todayDate = <span>{todayData.date}</span>;

    console.log(props.data)


    return (
        <div>
            <div className="latest-data">
                <h2>{props.data[0].areaName}</h2>
                <p>Latest Data:</p>
                <p>(YYYY-MM-DD)</p>
                <p>{todayDate}</p>
            </div>
            <DisplayBox 
                new={props.data[0].newCasesByPublishDate}
                total={props.data[0].cumCasesByPublishDate}
            />
            <table className="table">
                <tr>
                    <th>Date</th>
                    <th>New Cases</th>
                    <th>Total Cases</th>
                    <th>New Deaths</th>
                    <th>Total Deaths</th>
                </tr>
                {props.data.map(oneDayData => {
                    return (
                        <tr>
                            <td>{oneDayData.date}</td>
                            <td>{oneDayData.newCasesByPublishDate}</td>
                            <td>{oneDayData.cumCasesByPublishDate}</td>
                            <td>{oneDayData.newDeathsByDeathDate}</td>
                            <td>{oneDayData.cumDeathsByDeathDate}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}



export default Display