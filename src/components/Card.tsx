interface ICard {
    id: number
    paragraph: string
    detail: string
}

export const Card = ({ id, paragraph, detail }: ICard) => {

    return(
        <div>
            <h1>Card {id}</h1>
            <p> {paragraph} </p>
            <p> {detail} </p>
        </div>
    )
}

