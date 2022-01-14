import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        speclialty: ""
    })

    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()

    const newEmployee = {
        name: employee.name,
        specialty: employee.specialty
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }
    return fetch("http://localhost:8088/employees", fetchOption)
    .then(response => response.json())
    .then(() => {
        history.push("/employees")
    })
}

    return (
                <form className="employeeForm">
                    <h2 className="employeeForm__title">New Employee Registration</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Employee Name</label>
                            <input 
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Employee Name"
                                onChange={
                                    (changeEvent) => {
                                        const copy = {...employee}
                                        copy.name = changeEvent.target.value
                                        updateEmployee(copy)
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="specialty">Specialty</label>
                            <input type="text"
                                onChange={
                                    (changeEvent) => {
                                        const copy = {...employee}
                                        copy.specialty = changeEvent.target.value
                                        updateEmployee(copy)
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <button onClick={saveEmployee} className="btn btn-primary">
                        Finish Hiring
                    </button>
                </form>
        )
}