import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      personajes: []
    }
  }

  componentDidMount() {
    console.log('Se acaba de montar');
    this.getPersonajes()
  }

  getPersonajes = async () => {
    const url = 'https://rickandmortyapi.com/api/character/'
    const resp = await fetch(url)

    const { results } = await resp.json()

    this.setState({
      personajes: results
    })
  }

  render() {
    return (
      <Container>
        <h1 color="white" >Lista de Personajes</h1>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            this.state.personajes.map((pers, index) => (
              <Cards pers={pers} key={index}
              />
            ))
          }
        </div>
      </Container>
    );
  }
}