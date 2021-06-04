import React from 'react';
import './App.css';
import {Button, Container, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container style={{width:'30%'}}>
          <Row  style={{marginBottom:20, width:'100%'}}>
            <Col><Form.Text style={{color:'black'}} >Liczba miejsc:</Form.Text></Col>
            <Col><Form.Control type="number" min="1"></Form.Control></Col>
          </Row>
          <Form.Check className="placesTogether" type="checkbox" label="Czy miejsca mają być obok siebie?"></Form.Check>
        <Button className='placeSelectorButton'>Wybierz miejsca</Button>
        </Container>
      </header>
    </div>
  );
}
export default App;
