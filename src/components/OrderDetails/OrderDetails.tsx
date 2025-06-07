import type { FC, MouseEventHandler } from "react";
import type { TypeDish } from "../../helpers/types";
import "./OrderDetails.css";
import OrderDish from "../OrderDish/OrderDish";

interface Props {
    dishes: TypeDish[];
    price: number;
    deleteOneDish: (id: string) => void;
    deleteDish: (id: string) => void;
    clearOrderList: MouseEventHandler;
}
const OrderDetails: FC<Props> = (props) => {
    const { dishes, price, deleteOneDish, deleteDish, clearOrderList } = props;

    return (
        <div className="OrderDetails">
            <h2>Order details</h2>
            {price ? (
                <>
                    {dishes.map((dish) => {
                        if (dish.count > 0) {
                            return (
                                <OrderDish
                                    key={dish.id}
                                    dish={dish}
                                    deleteOneDish={() => deleteOneDish(dish.id)}
                                    deleteDish={() => deleteDish(dish.id)}
                                />
                            );
                        }
                        return null;
                    })}
                    <div className="OrderDetails__bottom">
                        <p className="OrderDetails__totalPrice">
                            Total price: {price} KGS
                        </p>
                        <button type="button" onClick={clearOrderList}>
                            Clear
                        </button>
                    </div>
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
