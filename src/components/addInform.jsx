import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import TextField from './form/textField'
import * as yup from "yup";
import Popap from './popap';
import { setLocale } from 'yup';
function AddInform() {
    const [data, setData] = useState({
       name: "",
       lastname: "",
       age: "",
       portfolio: ""
    });
    const setStudent = (data) =>
    new Promise((resolve) => {       
        localStorage.setItem("student", JSON.stringify(data));
    });
    const [errors, setErrors] = useState({});
    const history = useHistory()
    const handleClick = () => {
        if(!localStorage.getItem("student") || localStorage.getItem("student") !== JSON.stringify(data)){
            setStudent(data)
        }
    }
    const getAge = () => {
        console.log(data.age < new Date().getFullYear());
       return data.age < new Date().getFullYear()
    }
    const handleClickBack = () => {
        history.push('/')
    }
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    setLocale({

        number:{
            default: () => "поле 'Год рождения' обязательно для заполнения " 
        }
    })
    const validateScheme = yup.object().shape({
        portfolio: yup
            .string()
            .required("поле 'Портфолио' обязательно для заполнения")
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "поле 'Портфолио' должно быть ссылкой"
            ),
        age: yup.string().required("поле 'Год рождения' обязательно для заполнения " )
        .test('len',  "поле 'Год рождения' введен некорректно", val => val > 1922).test('len',  "поле 'Год рождения' введен некорректно", val => val < 2022),
            lastname: yup
            .string()
            .required("поле 'Фамилия' обязательно для заполнения"),
            name: yup
            .string()
            .required("поле 'Имя' обязательно для заполнения")
            
    });
    useEffect(() => {
        validate();
    }, [data]);
    useLayoutEffect(() => {
        localStorage.getItem("student") && setData(JSON.parse(localStorage.getItem("student")))
    }, [])
    const validate = () => {
        validateScheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidate = validate();
        if (!isValidate) return;
    };
    return (
        <>



        <div className='container mt-5'>
            <h1>Создать</h1>
            <form onSubmit={handleSubmit}>
            <TextField
            lable="Имя"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
            />
            <TextField
            lable="Фамилия"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            error={errors.lastname}
            />
            <TextField
            lable="Год рождения"
            name="age"
            value={data.age}
            onChange={handleChange}
            error={errors.age}
            type='number'
            />
            <TextField
            lable="Портфолио"
            name="portfolio"
            value={data.portfolio}
            onChange={handleChange}
            error={errors.portfolio}
            />
            {
                !localStorage.getItem("student") ?
                <button onClick={handleClick} disabled={!isValid} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Создать
              </button>
                : <><button onClick={handleClickBack}  className="btn btn-secondary">Назад</button> <button disabled={!isValid} onClick={handleClick} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Обновить
              </button> </>
            }
            
            </form>
           <Popap history={history} />
        </div>
        </>

    )
}

export default AddInform
