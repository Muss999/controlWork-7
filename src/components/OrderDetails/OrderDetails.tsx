import type { FC } from "react";
import type { TypeDish } from "../../helpers/types";
import "./OrderDetails.css";

interface Props {
    dishes: TypeDish[];
    price: number;
}
const OrderDetails: FC<Props> = (props) => {
    const { dishes, price } = props;

    return (
        <div className="OrderDetails">
            {price ? (
                <div>
                    <p>Total price: {price} KGS</p>
                </div>
            ) : (
                <>
                    <p>Order is empty!</p>
                    <p>Please add some dishes!</p>
                </>
            )}
        </div>
    );
};

export default OrderDetails;
