import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
      return {
            favorites: state.data.company_name
      }
}
      
const mapDispatchToProps = dispatch => {
      return {

      addToFavourites: company => {
            dispatch({ 
            type: "ADD_TO_FAV",
            payload: company,
            })
}}
}

const Job = (props) => {
     
      return (
            <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3}>
                  <Link to={`/${props.data.company_name}`}>{props.data.company_name}</Link>
            </Col>
            <Col xs={6}>
                  <Link to={props.data.url} target="_blank" rel="noreferrer">{props.data.title}</Link>
            </Col>
            <Col xs={3}>
                  <Button onClick={() => {
                  props.addToFavourites(props.data.company_name)
                  }}
                  variant="success">
                  Add To Favorite
                  </Button> 
            </Col>
            </Row>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)