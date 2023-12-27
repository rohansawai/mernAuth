import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const FormContainer = ({ children }: Props) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={16} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
