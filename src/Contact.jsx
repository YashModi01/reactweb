import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile number is ${data.phone} and email address is ${data.email}. Here is what I want to say: ${data.message}.`)
    }
    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value
            };
        });
    }

    return (
        <>
            <div className = "my-5">
                <h1 className = "text-center">Contact Us</h1>
            </div>
            <div className = "container contact_div mb-5">
                <div className = "row">
                    <div className = "col-md-6 col-10 mx-auto">
                        <form onSubmit = {formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name = "name" value = {data.name} onChange = {inputEvent} placeholder="Enter your name" required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name = "phone" value = {data.phone} onChange = {inputEvent} placeholder="Enter your number" required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name = "email" value = {data.email} onChange = {inputEvent} placeholder="name@example.com" required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name = "message" value = {data.message} onChange = {inputEvent} required></textarea>
                        </div>

                        <div className="col-12 ">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
