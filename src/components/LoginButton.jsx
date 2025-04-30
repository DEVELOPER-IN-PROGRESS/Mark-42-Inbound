import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { getAllUsersApi } from '../services/allApis';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/loggedUserSlice';




function LoginButton() {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [user1, setUser1] = useState({
        username: "",
        password: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleReset = () => {
        setUser1({
            username: "",
            password: ""
        })
    }

    const handlelogin = async () => {
        const { username, password } = user1 //object destructuring
        // console.log(name);

        if (!username || !password) {
            alert('Please fill the form completely')
        } else {
            const alluserDetails = await getAllUsersApi() 
            if (alluserDetails.status >= 200 && alluserDetails.status < 300) {
                let allusers = alluserDetails.data
                const matchedUser = allusers.find(u => u.username === username && u.password === password)
                if (matchedUser) {
                    dispatch(login(matchedUser))
                    alert("Login successfull")
                    navigate('/home'); // Redirect to home
                } else {
                    alert('Invalid credentials');
                    handleReset()
                }
            }
        }
    }
    return (
        <>
            <Button className='fs-5 me-3' onClick={handleShow} variant="outline-dark">Login</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder='Username' value={user1.username} onChange={(e) => setUser1({ ...user1, username: e.target.value })} className='rounded w-100 px-3 py-2 mb-3' />
                    <input type="text" placeholder='Password' value={user1.password} onChange={(e) => setUser1({ ...user1, password: e.target.value })} className='rounded w-100 px-3 py-2 mb-3' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlelogin}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginButton