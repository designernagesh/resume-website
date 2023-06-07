import data from '../data/data';
import Card from './Card';

const Cards = () => {
    return (
        data.map((item, i) => {
            return (
                <Card key={i} item={item} />
            )
        })
    )
}

export default Cards;