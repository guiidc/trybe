import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends Component {
    render() {


        return (
            <div>
            {data.map(({ id, name, type, image, averageWeight: weight }) => (
                <div key={id}>
                    <Pokemon name={name} type={type} weight={weight} img={image} />
                </div>
            ))}
            </div>
        )
    }
}

export default Pokedex;