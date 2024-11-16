import { Card, Col, Row } from "react-bootstrap";

const AboutUs = ()=>{
    return(
        <>
        <div className="aboutUs-container-h2">
        <h2>About Us</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, natus beatae quidem quia deleniti, totam dolore obcaecati facere id necessitatibus consectetur, saepe unde? Ducimus atque vitae iste autem officiis reiciendis incidunt quis suscipit, repellat obcaecati tempore nostrum fuga voluptas in dolore consequuntur cum distinctio! Cupiditate id possimus culpa qui assumenda.</p>
        </div>
        <div className="container-fluid">
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="src/assets/images/puestaDeSol.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
        </>
    )
}

export default AboutUs;