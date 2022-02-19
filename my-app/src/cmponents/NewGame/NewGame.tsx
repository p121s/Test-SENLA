import {ChangeEventHandler, useState} from 'react';
import { H1 } from './NewGame.styled';

export default function NewGame(): JSX.Element {

    const [numberPlayers, getNumberPlayers] = useState<number>();

    const handleSelect = ({target: {value}}: any) => {
        getNumberPlayers(value)
    }

    const inputs = new Array(numberPlayers).fill(0);

    return (
        <>
            <H1>NEw Game</H1>

            <h3>Choose the number of players</h3>
            <select >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>

            {inputs.map((player, i) => (<input type='text' name={`player${i}`} />))}
        </>
    );
}