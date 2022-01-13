import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./Employees/Employees.js"
import { TicketForm } from "./serviceTickets/TicketForm.js"
import { TicketList } from "./serviceTickets/TicketList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>
            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>
        </>
    )
}