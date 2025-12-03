import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">NextGenPC</h1>
              <p className="lead mb-4">
                Where is NextGen PC? - Aniceto Gueco St., Pulong Maragul, Angeles, Pampanga
              </p>
              <Link to="/peripherals" className="btn btn-light btn-lg me-3">
                Shop Peripherals
              </Link>
              <Link to="/prebuilts" className="btn btn-outline-light btn-lg">
                View Prebuilts
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mb-5">
        <Row>
          <Col md={10} className="mx-auto">
            <h2 className="text-center mb-4">Who We Are</h2>
            <p className="lead text-center mb-4">
              NextGen PC Angeles is a computer shop in Angeles, Pampanga that specializes in building and selling high-performance custom PCs, particularly for the "pisonet" (internet cafe) market. We provide durable, new computer builds with flexible payment options and nationwide shipping, focusing on high-quality components for businesses to offer a premium gaming experience. 
            </p>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5 mb-5">
        <Container>
          <h2 className="text-center mb-5">What We Do</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-desktop fa-3x text-primary mb-3"></i>
                  <Card.Title>Custom PC Builds</Card.Title>
                  <Card.Text>
                    We build high-performance gaming PCs tailored to your specific needs and budget. 
                    Every system is carefully assembled and tested for optimal performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-keyboard fa-3x text-primary mb-3"></i>
                  <Card.Title>Premium Peripherals</Card.Title>
                  <Card.Text>
                    From mechanical keyboards to gaming mice and monitors, we offer a curated 
                    selection of top-tier gaming peripherals from trusted brands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-tools fa-3x text-primary mb-3"></i>
                  <Card.Title>Expert Support</Card.Title>
                  <Card.Text>
                    Our knowledgeable team provides expert advice, technical support, and 
                    maintenance services to keep your system running at peak performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mb-5">
        <h2 className="text-center mb-5">Services and Products</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <h5><i className="fas fa-check-circle text-primary me-2"></i>Custom PC Builds</h5>
                    <p className="ms-4 text-muted">
                      We build custom computers for various needs, including gaming and business.
                    </p>
                  </li>
                  <li className="mb-4">
                    <h5><i className="fas fa-check-circle text-primary me-2"></i>Pisonet Setups</h5>
                    <p className="ms-4 text-muted">
                      We specialize in building durable, high-performance Pisonet units for computer shops.
                    </p>
                  </li>
                  <li className="mb-4">
                    <h5><i className="fas fa-check-circle text-primary me-2"></i>Payment Options</h5>
                    <p className="ms-4 text-muted">
                      We accept cash, GCash, bank transfer, credit/debit cards, and offer installment plans through Home Credit and BillEase.
                    </p>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <h2 className="text-center mb-5">Contact Information</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                  <h5>Email</h5>
                  <a href="mailto:nextgenpc.gamingrigs@gmail.com" className="text-decoration-none">
                    nextgenpc.gamingrigs@gmail.com
                  </a>
                </div>
                <div>
                  <i className="fab fa-facebook fa-3x text-primary mb-3"></i>
                  <h5>Facebook</h5>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    NextGen PC - Angeles
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
