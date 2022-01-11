import { useState } from "react";
import Button from '../Button';

const Card = () => {

    const [numero, setNumero] = useState(0);

    function Add() {
        setNumero(numero + 1);
    }

    function Sub() {
        setNumero(numero - 1);
    }

    return (
        <div className="card text-center">
            <div className="card-header">
                Título card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Add}
                >
                    +
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Sub}
                >
                    -
                </Button>
                <p>{numero}</p>
            </div>
        </div>
    )
}

export default Card;