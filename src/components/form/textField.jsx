import React from "react";

function TextField({ type = "text", name, lable, value, onChange, error }) {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
   
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}> {lable} </label>
            <div className="input-group has-validation">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
}


export default TextField;
