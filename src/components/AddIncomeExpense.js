import React from 'react'
import {Form,Col,Row} from 'react-bootstrap'

const AddIncomeExpense = () => {
  return (
    <>
    <Row>
         <Col md={6}>
           <Form style={{padding: '100px'}}>
           <Form.Group  controlId="name">
          <Form.Label > Add Expenses : </Form.Label>
          <Form.Control
            type="name" style={{width:'60%'}}
            placeholder="Enter expenses"
                 ></Form.Control>
                 <Form.Control 
            type="name" style={{width:'25%',marginTop:'4px'}}
            placeholder="Enter amount"
                 ></Form.Control>
        </Form.Group>
           </Form>
           </Col>

           <Col md={6}>
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
           </Col>
           </Row>
    </>
  )
}

export default AddIncomeExpense