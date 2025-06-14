import { useState } from "react";
import "./OrderInterface.css";
import AddDishesBlock from "../components/AddDishesBlock/AddDishesBlock";
import OrderDetails from "../components/OrderDetails/OrderDetails";

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
        {
            name: "Fried chicken",
            price: 75,
            count: 0,
            image: "https://img.povar.ru/mobile/f2/03/85/21/ostrie_krilishki_kfc-400469.jpg",
            id: crypto.randomUUID(),
        },
        {
            name: "Lagman",
            price: 100,
            count: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVygy1GI-9Kq8ONn-yOzbqEg9LoIbR2pBwg&s",
            id: crypto.randomUUID(),
        },
    ]);
    const [price, setPrice] = useState(0);

    const addDish = (id: string) => {
        setDishes((prevState) => {
            return prevState.map((dish) => {
                if (dish.id === id) {
                    const newPrice = price + dish.price;
                    setPrice(newPrice);
                    return {
                        ...dish,
                        count: dish.count + 1,
                    };
                }
                return dish;
            });
        });
    };
    const deleteOneDish = (id: string) => {
        setDishes((prevState) => {
            return prevState.map((dish) => {
                if (dish.id === id) {
                    if (dish.count <= 0) return dish;
                    const newPrice = price - dish.price;
                    setPrice(newPrice);
                    return {
                        ...dish,
                        count: dish.count - 1,
                    };
                }
                return dish;
            });
        });
    };
    const deleteDish = (id: string) => {
        setDishes((prevState) => {
            return prevState.map((dish) => {
                if (dish.id === id) {
                    if (dish.count <= 0) return dish;
                    const newPrice = price - dish.price * dish.count;
                    setPrice(newPrice);
                    return {
                        ...dish,
                        count: 0,
                    };
                }
                return dish;
            });
        });
    };
    const clearOrderList = () => {
        setDishes((prevState) => {
            return prevState.map((dish) => {
                return {
                    ...dish,
                    count: 0,
                };
            });
        });
        const newPrice = 0;
        setPrice(newPrice);
    };

    return (
        <div className="OrderInterface">
            <OrderDetails
                dishes={dishes}
                price={price}
                deleteOneDish={deleteOneDish}
                deleteDish={deleteDish}
                clearOrderList={() => clearOrderList()}
            />
            <AddDishesBlock dishes={dishes} addDish={addDish} />
        </div>
    );
};

export default OrderInterface;
