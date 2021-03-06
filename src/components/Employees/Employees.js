import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"
import { Ticket } from "../serviceTickets/ticket"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecialties] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const allSpecialities = employees.map(employee => employee.specialty)
        setSpecialties(allSpecialities.join(", "))
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    return (
        <>
        <button onClick={() => history.push("/employees/create")}>Hire New Employee</button>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
                            <br></br>Specialty: {employee.specialty}
                            </p>
                    }
                )
            }
        </>
    )
}