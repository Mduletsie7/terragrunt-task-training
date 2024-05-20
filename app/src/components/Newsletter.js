import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h2 className='newsHeader'>Keep up with your favorite Z Fighters!</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Form>
    </div>
  );
}

export default Newsletter;