import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
      return {state}
}
      

const mapDispatchToProps = dispatch => {
      return {

      addToFavorites: company => {
            dispatch({ 
            type: "ADD_TO_FAV",
            payload: company,
            })
}}
}

const Job = ({ data, addToFavorites}) => {

      const addFavorite = () => {
            addToFavorites(data.company_name)
      }
      
      return (
            <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
            <Col xs={3}>
            <Button onClick={addFavorite}
            variant="success">Add to favorite</Button>
                  <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={9}>
                  <Link to={data.url} target="_blank" rel="noreferrer">
                  {data.title}
                  </Link>
            </Col>
            </Row>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)