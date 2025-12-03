import React, { useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'

function UserScreen() {
  const [name, setName] = useState('Franz Franco')
  const [email, setEmail] = useState('franz.franco@example.com')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      setMessage('Profile updated successfully!')
    }
  }

  return (
    <Row>
      <Col md={6} className="mx-auto">
        <h2>User Profile</h2>
        {message && (
          <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>
            {message}
          </div>
        )}
        <Card className="p-4">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='email' className='mb-3'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='password' className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='confirmPassword' className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button type='submit' variant='primary' className='w-100'>
              Update Profile
            </Button>
          </Form>
        </Card>

        <Card className="mt-4 p-4">
          <h4>Account Information</h4>
          <p><strong>Member Since:</strong> December 2025</p>
          <p><strong>Total Orders:</strong> 0</p>
          <p><strong>Account Status:</strong> <span className="text-success">Active</span></p>
        </Card>
      </Col>
    </Row>
  )
}

export default UserScreen
