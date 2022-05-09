import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InformStudent from './informStudent'

function CardStudent() {
    const [data, setData] = useState()
    useEffect(() => {
        const studen = JSON.parse(localStorage.getItem("student"))
        setData(studen) 
    }, [])
    return (
        <div className='container mt-5'>
            <h1>Карточка студента</h1>
            {data ? 
            <InformStudent {...data}/>
            : <p>Нет данных</p> }
         <Link to="/addInform"> <button  className="btn btn-primary ">{data ? "Редактировать" : "Добавить"} </button></Link>  
        </div>
    )
}

export default CardStudent
