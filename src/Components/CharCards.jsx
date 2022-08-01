import "./Style/CharCards.css"

export const CharCard = ({character}) => {
    return (
        <div className={character.status === 'Alive' ? 'card-container alive' : 'card-container dead'}>
            <p>{character?.name}</p>
            <p>{character?.status}</p>
            <img src={character?.image}/>
        </div>
    );
};