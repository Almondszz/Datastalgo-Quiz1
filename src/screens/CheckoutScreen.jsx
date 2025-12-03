import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

function CheckoutScreen() {
  const { cartItems, cartTotal, clearCart } = useCart()

  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body className="p-5">
              <div className="mb-4">
                <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
              </div>
              <h1 className="mb-4">Thank You for Your Purchase!</h1>
              <p className="lead mb-4">
                Your order has been successfully placed and is being processed.
              </p>
              
              <Card className="mb-4 bg-light">
                <Card.Body>
                  <h5>Order Summary</h5>
                  <hr />
                  <Row className="mb-2">
                    <Col className="text-start"><strong>Total Items:</strong></Col>
                    <Col className="text-end">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col className="text-start"><strong>Total Amount:</strong></Col>
                    <Col className="text-end"><strong>₱{cartTotal.toFixed(2)}</strong></Col>
                  </Row>
                </Card.Body>
              </Card>

              <div className="mb-4">
                <p>A confirmation email will be sent to your registered email address.</p>
                <p className="text-muted">Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>

              <div className="d-grid gap-2">
                <Link to="/products">
                  <Button variant="primary" size="lg" className="w-100" onClick={() => clearCart()}>
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/user">
                  <Button variant="outline-secondary" size="lg" className="w-100">
                    View Profile
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutScreen
