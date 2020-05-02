import React from 'react'
import NEO from './NEO';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

import { Container, Button } from 'reactstrap';

const NEOs = props => {
    return (
        <div>
            <Container style={{ display: 'flex', width: '45%', justifyContent: 'space-evenly', marginTop: '25px'}}>
                <Button onClick={props.getData}>See NEOs</Button>
            </Container>  
            <NEO id={props.NEOs.id} neo={props.NEOs} orbital={props.orbital_data} danger={props.isDanger} diameter={props.diameter} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
      NEOs: state.NEOs,
      isDanger: state.isDanger,
      orbital_data: state.orbital_data,
      diameter: state.diameter,
      isLoading: state.isLoading
    }
};
  
export default connect(mapStateToProps, {getData})(NEOs);