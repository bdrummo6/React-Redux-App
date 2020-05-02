import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const NEO = props => {

    return(
        <Card style={{ margin: '20px 24% 0 24%', width: '50%' }}>
            <CardHeader>
            <CardTitle id={props.id} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Name: {props.neo.name}</CardTitle> 
            </CardHeader>
            <CardBody>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Dangerous:</ListGroupItemHeading>
                        <ListGroupItemText>{props.danger}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>First Date Observed:</ListGroupItemHeading>
                        <ListGroupItemText>{props.orbital.first_observation_date}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Absolute Magnitude:</ListGroupItemHeading>
                        <ListGroupItemText>{props.neo.absolute_magnitude_h}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Estimated Minimum Diameter (miles):</ListGroupItemHeading>
                        <ListGroupItemText>{props.diameter.estimated_diameter_min}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Estimated Maximum Diameter (miles):</ListGroupItemHeading>
                        <ListGroupItemText>{props.diameter.estimated_diameter_max}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Link to Profile Page:</ListGroupItemHeading>
                        <a href={props.neo.nasa_jpl_url} target='_blank' rel='noopener noreferrer'><ListGroupItemText>{props.neo.name}</ListGroupItemText></a>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    )
}

export default NEO;