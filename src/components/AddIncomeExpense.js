import React from 'react'
import {Form} from 'react-bootstrap'

const AddIncomeExpense = () => {
  return (
    <>
  
           <Form style={{padding: '100px'}}>
           <Form.Group controlId="name">
          <Form.Label> Add Expense or Income: </Form.Label>
          <Form.Control
            type="name" style={{width:'70%'}}
            placeholder="Enter expense or income"
                 ></Form.Control>
        </Form.Group>
           </Form>
       
    </>
  )
}

export default AddIncomeExpense