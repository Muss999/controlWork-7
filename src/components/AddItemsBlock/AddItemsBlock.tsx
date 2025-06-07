import "./AddItemsBlock.css";
import Dish from "../Dish/Dish";
import type { TypeDish } from "../../helpers/types";
import type { FC } from "react";

interface Props {
    dishes: TypeDish[];
    addDish: (id: string) => void;
}

const AddItemsBlock: FC<Props> = (props) => {
    const { dishes, addDish } = props;
    return (
        <div className="AddItemsBlock">
            {dishes.map((dish) => {
                return (
                    <Dish
                        key={dish.id}
                        id={dish.id}
                        image={dish.image}
                        name={dish.name}
                        price={dish.price}
                        addDish={() => addDish(dish.id)}
                    />
                );
            })}
        </div>
    );
};

export default AddItemsBlock;
