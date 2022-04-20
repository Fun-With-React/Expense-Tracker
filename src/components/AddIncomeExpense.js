import React, { useState } from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { expenseSlice } from '../reducers/amountReducer'

const AddIncomeExpense = () => {
  const [amount,setAmount] = useState(0)
  const {addExpense} = useSelector((state) => state.expenseSlice)
  const dispatch = useDispatch()
  // const addExp = (e) => {
  //   e.preventDefault()
  //   dispatch(addExpense(amount))
  // }
  return (
    <>
    <Row>
         <Col md={6}>
           <Form style={{padding: '100px'}}>
           <Form.Group  controlId="name">
          <Form.Label > Add Expenses : </Form.Label>
          {/* <Form.Control
            type="name" style={{width:'60%'}}
            placeholder="Enter expenses"
                 ></Form.Control> */}
                 <Form.Control 
            type="name" style={{width:'25%',marginTop:'4px'}}
            placeholder="Enter amount"
            value= {amount}
            onChange={(e) => setAmount(e.target.value)}
                 ></Form.Control>
        </Form.Group>
        <Button
          type="submit" className="my-3"
          onClick={() => dispatch(addExpense(amount))}
        >
          Add
        </Button> 
           </Form>
           </Col>

           {/* <Col md={6}>
           <Form style={{padding: '100px'}}>
           <Form.Group controlId="name">
          <Form.Label> Add Income: </Form.Label>
          <Form.Control
            type="name" style={{width:'60%'}}
            placeholder="Enter income"
                 ></Form.Control>
                 <Form.Control
            type="name" style={{width:'25%',marginTop:'4px'}}
            placeholder="Enter amount"
                 ></Form.Control>
        </Form.Group>
           </Form>
           </Col> */}
           </Row>
    </>
  )
}

export default AddIncomeExpense