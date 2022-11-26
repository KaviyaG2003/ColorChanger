import './Color.css';
import { React, useState } from 'react';
import Select from 'react-select';
function Color ()
{
    const colors = [
        {
            id: 1,
            label: "lime",
        },
        {
            id: 2,
            label: "la",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "aquamarine",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='body'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center className="name">
            <h1>COLOR CHANGER</h1>
            </center>
            
            <div className="dropdownButton">
                <Select options={colors} onChange={click} className='select' placeholder="OPTIONS"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Color;