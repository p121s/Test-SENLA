import {useEffect, useState} from 'react'

export default function Game() {

    const [sities, getSities] = useState<string>();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json')
        .then((response) => JSON.stringify(response))
        .then((response) => getSities(response))
    }, [])

    return (
        <></>
    );
}