import type { FC } from "react";
import type { TypeDish } from "../../helpers/types";
import "./OrderDetails.css";
import OrderDish from "../OrderDish/OrderDish";

interface Props {
    dishes: TypeDish[];
    price: number;
}
const OrderDetails: FC<Props> = (props) => {
    const { dishes, price } = props;

    return (
        <div className="OrderDetails">
            <h2>Order details</h2>
            {price ? (
                <>
                    {dishes.map((dish) => {
                        if (dish.count > 0) {
                            return <OrderDish key={dish.id} dish={dish} />;
                        }
                        return null;
                    })}
                    <p className="OrderDetails__totalPrice">
                        Total price: {price} KGS
                    </p>
                </>
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
