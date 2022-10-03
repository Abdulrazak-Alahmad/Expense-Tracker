import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()
    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = e => {
        console.log(e)
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <lable htmlFor='text'>Text</lable>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...'></input>
                </div>
                <div className='form-control'>
                    <lable htmlFor='amount'>Amount <br /> (negative - expense, positive - income)</lable>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' ></input>
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    )
}