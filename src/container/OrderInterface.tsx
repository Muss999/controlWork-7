import { useState } from "react";
import "./OrderInterface.css";
import Dish from "../components/Dish/Dish";

const OrderInterface = () => {
    const [dishes, setDishes] = useState([
        {
            name: "Hamburger",
            price: 60,
            count: 0,
            image: "https://mak.by/upload/iblock/9d2/k2vzxvi5gy13pb62fcs36xpnbhpkl202.jpg.webp",
            id: crypto.randomUUID(),
        },
        {
            name: "Cheeseburger",
            price: 80,
            count: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lfdGQENwsxIWcpk80o43dRz2V8jN9pBK_w&s",
            id: crypto.randomUUID(),
        },
        {
            name: "Fries",
            price: 40,
            count: 0,
            image: "https://sueyoushi.ru/ka/wp-content/uploads/sites/4/2023/12/free.jpg",
            id: crypto.randomUUID(),
        },
        {
            name: "Cola",
            price: 50,
            count: 0,
            image: "https://embargo.kg/wp-content/uploads/coca-cola-original-12-ounce-can-600x421.jpg",
            id: crypto.randomUUID(),
        },
        {
            name: "Tea",
            price: 30,
            count: 0,
            image: "https://e2.edimdoma.ru/data/ingredients/0000/1200/1200-ed4_wide.jpg?1515760357",
            id: crypto.randomUUID(),
        },
        {
            name: "Water",
            price: 10,
            count: 0,
            image: "https://img.freepik.com/free-vector/isolated-glass-water_1368-2666.jpg?semt=ais_hybrid&w=740",
            id: crypto.randomUUID(),
        },
    ]);

    return (
        <div className="OrderInterface">
            <div className="AddItemsBlock">
                {dishes.map((dish) => {
                    return (
                        <Dish
                            key={dish.id}
                            image={dish.image}
                            name={dish.name}
                            price={dish.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default OrderInterface;
