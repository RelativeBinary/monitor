import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core'
import Row from 'react-bootstrap/Row';
 
const Item = (props) => {
    return (
        <Paper  style={{minHeight: "500px"}}>
                <Row className="d-flex justify-content-center">
                {props.item.img}
                </Row>
                <Row  className="d-flex justify-content-center">
                    <h2>{props.item.name}</h2>
                </Row>
                <Row  className="d-flex justify-content-center">
                    <p>{props.item.description}</p>
                </Row>
        </Paper>
    )
}
export default Item;