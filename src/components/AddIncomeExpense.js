import React, { useState } from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addExpense,addIncome } from '../reducers/amountReducer'

const AddIncomeExpense = () => {
  const [amount,setAmount] = useState(0)
  
  //const {expenses} = useSelector((state) => state.expenseSlice)
  const dispatch = useDispatch()
  
  return (
    <>
    <Row>
         <Col md={6}>
           <Form style={{padding: '100px'}}>
           <Form.Group  controlId="name">
          <Form.Label > Add Expenses : </Form.Label>
         
                 <Form.Control 
            type="name" style={{width:'25%',marginTop:'4px'}}
            placeholder="Enter amount"
             onChange={(e) => setAmount(Number(e.target.value))}
                 ></Form.Control>
                 <Form.Control className='my-2'
            type="name" style={{width:'70%'}}
            placeholder="Enter type of expenses"
                 ></Form.Control>
        </Form.Group>
        <Button
          className="my-3"
          onClick={() => 
            dispatch(addExpense(amount))
               
          }
        >
          Add
        </Button> 
           </Form>
           </Col>

           <Col md={6}>
           <Form style={{padding: '100px'}}>
           <Form.Group controlId="name">
          <Form.Label> Add Income: </Form.Label>
          {/* <Form.Control
            type="name" style={{width:'60%'}}
            placeholder="Enter income"
                 ></Form.Control> */}
                 <Form.Control
            type="name" style={{width:'25%',marginTop:'4px'}}
            placeholder="Enter amount"
            onChange={(e) => setAmount(Number(e.target.value))}
                 ></Form.Control>

<Form.Control className='my-2'
            type="name" style={{width:'70%'}}
            placeholder="Enter type of income"
                 ></Form.Control>
        </Form.Group>
        <Button
          className="my-3"
          onClick={() => 
            dispatch(addIncome(amount))
                      
          }
        >
          Add
        </Button> 
           </Form>
           </Col>
           </Row>
    </>
  )
}

export default AddIncomeExpense