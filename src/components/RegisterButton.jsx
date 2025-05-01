import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addUserApi, getAllUsersApi } from '../services/allApis';
import { toast} from 'react-toastify';


function RegisterButton() {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        watchlist : []
    })
    const [duplicateUsername, setDuplicateUsername] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleReset = () => {
        setUser({
            name: "",
            username: "",
            password: "",
            watchlist : []
        })
    }
    const checkUsername = async (e) => {

        const alluserDetails = await getAllUsersApi()
        if (alluserDetails.status >= 200 && alluserDetails.status < 300) {
            let allusers = alluserDetails.data
            allusers?.map((user) => (user.username == e.target.value ? setDuplicateUsername(true) : setDuplicateUsername(false)))
        }
        setUser({ ...user, username: e.target.value })
    }
    const addUser = async () => {
        const { name, username, password, watchlist } = user //object destructuring
       // console.log(name);

        if (!name || !username || !password) {
            toast.error('Please fill the form completely')
        } else {
            if (duplicateUsername == false) {
                const result = await addUserApi({ name, username, password, watchlist })
                if (result.status >= 200 && result.status < 300) {
                    toast.info("User added successfully. Please Login.")
                    handleReset()
                    handleClose()
                } else {
                    toast.error("Something went wrong. Couldn't add user.")
                }
            }
        }
    }
    return (

        <>
            <Button className='fs-5 me-3' onClick={handleShow} variant="outline-dark">Register</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder='Enter your Name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className='rounded w-100 px-3 py-2 mb-3' />
                    <input type="text" placeholder='Set a username. It should be in small letters.'  onChange={(e) => checkUsername(e)} className='rounded w-100 px-3 py-2 mb-3' />
                    {duplicateUsername && <p className='text-danger'>*Username already taken. Try a new one</p>}
                    <input type="password" placeholder='Set a password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='rounded w-100 px-3 py-2 mb-3' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={addUser} variant="primary">Register</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default RegisterButton