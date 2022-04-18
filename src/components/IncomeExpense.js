import React from 'react'
import {Row,Col} from 'react-bootstrap'

const IncomeExpense = () => {
  return (
    <>
     <Row style={{padding: '100px'}}>
            <Col md ={6}>
                <h4>Expenses:</h4>
            </Col>
            <Col md ={6}>
               <h4> Income:</h4>
            </Col>
        </Row>
    </>
  )
}

export default IncomeExpense