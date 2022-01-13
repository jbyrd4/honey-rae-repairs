import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });

    const history = useHistory()

    const saveTicket = (event) => {
        event.preventDefault()

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/ticket")
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (changeEvent) => {
                                const copy = {...ticket}
                                copy.description = changeEvent.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (changeEvent) => {
                                const copy = {...ticket}
                                copy.emergency = changeEvent.target.checked
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={saveTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}