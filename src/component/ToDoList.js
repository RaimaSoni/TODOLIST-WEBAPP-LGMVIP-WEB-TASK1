import React, { useState } from 'react'

function ToDoList() {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);

    function addActivity(){
        //this will work asynchronously
        // setListData([...listData, activity])
        // console.log(listData)
        //it will work synchronously
        setListData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatedListData);
    }

    function removeAll(){
        setListData([])
    }
    return (
        <>
        <div className='container'>
            <div className='header'>ToDoList</div>
            <input type="text" placeholder='Add your todos...' value={activity} onChange={(e) =>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p className='list-heading'>YOUR LIST OF TODOS :{")"}</p>
            {listData!=[] && listData.map((data, i)=>{
                return (
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'><button onClick={() => removeActivity(i)}>
                            remove</button></div>
                    </p>
                    </>
                )
            })}
            {listData.length>=1 &&
            <button onClick={removeAll}>Remove All todos</button>}
        </div>
        </>
    )
}


export default ToDoList