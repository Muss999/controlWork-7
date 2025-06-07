import type { FC, MouseEventHandler } from "react";
import "./Dish.css";

interface Props {
    image: string;
    name: string;
    price: number;
    id: string;
    addDish: MouseEventHandler;
}

const Dish: FC<Props> = (props) => {
    const { image, name, price, addDish } = props;
    return (
        <div className="DishBlock" onClick={addDish}>
            <img src={image} alt={name} />
            <div className="DishBlock__text">
                <h4>{name}</h4>
                <p>Price: {price} KGS</p>
            </div>
        </div>
    );
};

export default Dish;
