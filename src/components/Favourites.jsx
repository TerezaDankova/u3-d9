import { Component } from "react";
import { connect } from "react-redux";
import {Container, Row, ListGroup, ListGroupItem, Col} from "react-bootstrap"

const mapStateToProps = state => {
  return {
    favourite: state.company
  }
}
const mapDispatchToProps = dispatch => {
  return {}
      //here later I will remove items 
}

class Favourites extends Component {
  
render() {
         return(

            <Container>
            <Row>
              <Col xs={12}>
                <ListGroup>
                    <ListGroupItem className="mt-5">
                         <p>Favorite jobs</p>
                    </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Container>
         )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)