import React from 'react';
import "./Squares.scss"
import { SquaresData } from '../../utils/SquaresData';

const Squares = () => {
    console.log('====================================');
    console.log(SquaresData);
    console.log('====================================');
    const squaresData = SquaresData;
    return (
        <>
            <div className="squares">
                {squaresData.map((square, index) => (
                    <a href={square.url} className="squares-link" key={index}>
                        <div
                            className="inside-square"
                            style={{ backgroundImage: `url(${square.img})` }}
                        >
                            <h2>{square.text}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Squares;
