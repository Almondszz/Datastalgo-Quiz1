import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function PrebuiltsScreen() {
  const prebuilts = products.filter(product => product.category === 'Prebuilts')

  return (
    <div>
      <h1>Prebuilt PCs</h1>
      <Row>
        {prebuilts.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PrebuiltsScreen
