import type { FC } from "react";
import type { TypeDish } from "../../helpers/types";
import "./OrderDish.css";

interface Props {
    dish: TypeDish;
}
const OrderDish: FC<Props> = (props) => {
    const { image, name, count, price } = props.dish;
    return (
        <div className="OrderDishBlock">
            <div className="OrderDishBlock__text">
                <img src={image} alt={image} />
                <h4>{name}</h4>
                <p>{count}x</p>
                <p>{price * count} KGS</p>
            </div>
            <div className="OrderDishBlock__btns">
                <button type="button">-</button>
                <button type="button">Delete</button>
            </div>
        </div>
    );
};

export default OrderDish;
