// ToDoContainer.js
import React, { useState } from 'react';
import './Design.css'; // Import CSS file for styling

function ToDoContainer() {

    const [getData, setGetData] = useState("");
    const [arrData, setArrData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addData = () => {
        if (!getData) {
            alert("Please enter something into the to-do list")
        } else {
            if (editIndex !== null) {
                // Update existing todo item
                const updatedData = [...arrData];
                updatedData[editIndex] = getData;
                setArrData(updatedData);
                setEditIndex(null);
            } else {
                // Add new todo item
                setArrData([...arrData, getData]);
            }
            setGetData(""); // Clear input field
        }
    }

    const singleDelete = (id) => {
        const updatedData = arrData.filter((ele, ind) => ind !== id);
        setArrData(updatedData);
    }

    const singleEdit = (id) => {
        setGetData(arrData[id]);
        setEditIndex(id);
    }

    const removeData = () => {
        setArrData([]);
    }

    return (
        <div className='container-flex'>
            <div className='toDo shadow-lg '>
                <div className='title'>
                    <h2>To Do List</h2>
                </div>
                <div className='inputField'>
                    <input value={getData} onChange={(e) => { setGetData(e.target.value) }} type="text" placeholder="Let's do this"></input>
                    <button onClick={addData}>{editIndex !== null ? 'Update' : 'Add Here'}</button>
                </div>
                <div className='heading'>
                    <h3>Your List of Work!</h3>
                </div>
                <div className='dynamicDataUpper'>
                    {
                        arrData.map((e, i) => {
                            return (
                                <div key={i} className='dynamicData'>
                                    <h6>{e}</h6>
                                    <div className="buttons">
                                        <i className="fa-solid fa-trash" title='delete' onClick={() => singleDelete(i)}></i>
                                        <i className="fa-solid fa-edit" title='edit' onClick={() => singleEdit(i)}></i>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='removeData'>
                    <button onClick={removeData}>Remove All</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoContainer;
