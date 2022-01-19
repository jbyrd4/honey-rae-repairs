import React, {useState, UseEffect, useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Employee = () => {
    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then(setEmployee)
        },
        [employeeId]
    )

    return (
        <>
            <section className="employee">
                <p><b>Employee Name: </b>{employee.name}</p>
                <p><b>Employee Specialty: </b>{employee.specialty}</p>
            </section>
        </>
    )
}