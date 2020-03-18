import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = 'https://pokeres.bastionbot.org/images/pokemon/';



class Pokecard extends Component {
    


    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-type">Type: {this.props.type}</div>
                <div className="Pokecard-exp">EXP: {this.props.exp}</div>
        
            </div>
        )
    }
}
export default Pokecard;
