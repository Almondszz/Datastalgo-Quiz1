import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function PeripheralsScreen() {
  const peripherals = products.filter(product => product.category === 'Peripherals')

  return (
    <div>
      <h1>Peripherals</h1>
      <Row>
        {peripherals.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PeripheralsScreen
