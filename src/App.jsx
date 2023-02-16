import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
    const [item, addItem] = useState('');
    const [newItem, addNewItem] = useState([]);

    const addItems = () => {
        addNewItem((oldVal) => {
            return [item, ...oldVal];
        });
        addItem('');
    }

    const itemEvent = (event) => {
        addItem(event.target.value);
    }

    const deleteItem = (id) => {
        console.log('deleted');

        addNewItem((oldVal) => {
            return oldVal.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type='text' placeholder='Add an Item' onChange={itemEvent} value={item}/>
                    <button type='submit' onClick={addItems}> + </button>

                    <ol>
                        {newItem.map((itemVal, index) => {
                            return (
                                <ToDoList 
                                    key={index}
                                    id={index}
                                    text={itemVal} 
                                    onSelect={deleteItem}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;