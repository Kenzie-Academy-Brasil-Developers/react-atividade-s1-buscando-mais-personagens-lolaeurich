import { CharCard } from './CharCards';

import "./Style/Characters.css"

export const Characters = ({characterList}) => {

    return (
        <>
            <h1 className="Tittle">Meus personagens</h1>
            <div className={'container'}>
            {Array.isArray(characterList) && characterList.map((character, index) =>
            <CharCard key={index} character={character}/>)}
</div>
        </>
    );
};