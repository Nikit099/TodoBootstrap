import React from 'react'

function InformStudent({name, lastname, age, portfolio}) {
    const getAge = () => {
        const ageStudent = new Date().getFullYear() - age
        if(ageStudent.toString().slice(1) == 1){
            return `${ageStudent} год`
        }
        else if(ageStudent.toString().slice(1) == 2 || ageStudent.toString().slice(1) == 3 || ageStudent.toString().slice(1) == 4){
            if(ageStudent > 10 && ageStudent < 15){
                return `${ageStudent} лет`
            }
            return `${ageStudent} года`
        } else {
            return `${ageStudent} лет`
        }
    }
    return (
        <div>
            <div><b>Имя:</b> <span>{name}</span></div>
            <div><b>Фамилия:</b> <span>{lastname}</span></div>
            <div><b>Год рождения:</b> <span>{age} ({getAge()}) </span></div>
            <div><b>Портфолио:</b> <a href={portfolio}>{portfolio}</a></div>
            
        </div>
    )
}

export default InformStudent
