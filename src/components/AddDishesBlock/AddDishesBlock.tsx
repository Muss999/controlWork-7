import "./AddDishesBlock.css";
import Dish from "../Dish/Dish";
import type { TypeDish } from "../../helpers/types";
import type { FC } from "react";

interface Props {
    dishes: TypeDish[];
    addDish: (id: string) => void;
}

const AddDishesBlock: FC<Props> = (props) => {
    const { dishes, addDish } = props;
    return (
        <div className="AddDishesBlock">
            <h2>Add dishes</h2>
            <div className="AddDishesBlock__dishes">
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
        </div>
    );
};

export default AddDishesBlock;
