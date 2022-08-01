import "./Style/CharCards.css"

export const CharCard = ({character}) => {
    return (
        <div className={character.status === 'Alive' ? 'card-container alive' : 'card-container dead'}>
            <p className="Name">{character?.name}</p>
            <p className="Status">{character?.status}</p>
            <img className="Image" src={character?.image} alt=""/>
        </div>
    );
};