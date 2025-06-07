import type { FC } from "react";
import "./Dish.css";

interface Props {
    image: string;
    name: string;
    price: number;
}

const Dish: FC<Props> = (props) => {
    const { image, name, price } = props;
    return (
        <div className="DishBlock">
            <img src={image} alt={image} />
            <div className="DishBlock__text">
                <h4>{name}</h4>
                <p>Price: {price} KGS</p>
            </div>
        </div>
    );
};

export default Dish;
