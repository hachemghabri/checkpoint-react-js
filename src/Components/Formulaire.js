import { Form,Button } from "react-bootstrap"

const Formulaire=()=>{


return(
    <div>
    <Form>
    <Form.Group className="mb-3">
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group> 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  
    
    </div>
)


} 
export default Formulaire