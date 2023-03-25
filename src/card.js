import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MyCards(props) {
  //console.log(props.m1);
  return (
    <Card style={{ width: "18rem", float: "left", margin: "50px" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button variant="primary" onClick = {() => props.change(props.m1-1)}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
