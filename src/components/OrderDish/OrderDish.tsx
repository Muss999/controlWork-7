import type { FC, MouseEventHandler } from "react";
import type { TypeDish } from "../../helpers/types";
import "./OrderDish.css";

interface Props {
    dish: TypeDish;
    deleteOneDish: MouseEventHandler;
    deleteDish: MouseEventHandler;
}
const OrderDish: FC<Props> = (props) => {
    const { image, name, count, price } = props.dish;
    return (
        <div className="OrderDishBlock">
            <div className="OrderDishBlock__text">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{count}x</p>
                <p>{price * count} KGS</p>
            </div>
            <div className="OrderDishBlock__btns">
                <button type="button" onClick={props.deleteOneDish}>
                    -
                </button>
                <button type="button" onClick={props.deleteDish}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default OrderDish;
