import { createSlice } from "@reduxjs/toolkit";
import nasiGorengKampung from "../assets/img/nasi-goreng-kampung.jpeg";
import nasiGoreng from "../assets/img/nasi-goreng.jpeg";
import doubleBurger from "../assets/img/double-burger.jpeg";
import beefBurgerDeluxe from "../assets/img/beef-burger.jpeg";

type ItemType = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
  type: string;
};

type ProductType = ItemType;

const productInitialState: ProductType[] = [];

const initialState: ItemType[] = [
  {
    id: 1,
    name: "Double Burger",
    price: 20000,
    img: doubleBurger,
    qty: 1,
    type: "fast food",
  },
  {
    id: 2,
    name: "Beef Burger Deluxe",
    price: 20000,
    img: beefBurgerDeluxe,
    qty: 1,
    type: "fast food",
  },
  {
    id: 3,
    name: "Ice Cream Oreo",
    price: 12000,
    img: "https://i.postimg.cc/pd9ck1PM/Oreo-Cookies-And-Cream-Ice-Cream-No-Churn.jpg",
    qty: 1,
    type: "ice cream",
  },
  {
    id: 4,
    name: "Nasi Goreng",
    price: 12000,
    img: nasiGoreng,
    qty: 1,
    type: "rice",
  },
  {
    id: 5,
    name: "Mie Ayam",
    price: 15000,
    img: "https://i.postimg.cc/0N70HgKm/Mie-Ayam.jpg",
    qty: 1,
    type: "noodle",
  },
  {
    id: 6,
    name: "Beef Burger",
    price: 15000,
    img: "https://i.postimg.cc/d31PnVf5/Beef-Burger.jpg",
    qty: 1,
    type: "fast food",
  },
  {
    id: 7,
    name: "Cheese Burger",
    price: 13000,
    img: "https://i.postimg.cc/fLRrQgvL/Cheese-Burger.jpg",
    qty: 1,
    type: "fast food",
  },
  {
    id: 8,
    name: "Chicken Burger Deluxe",
    price: 20000,
    img: "https://i.postimg.cc/gkF1n4zM/Chicken-Burger-Deluxe.jpg",
    qty: 1,
    type: "fast food",
  },
  {
    id: 9,
    name: "Chicken Burger",
    price: 15000,
    img: "https://i.postimg.cc/1XZM5CGw/Chicken-Burger.jpg",
    qty: 1,
    type: "fast food",
  },
  {
    id: 10,
    name: "Nasi Goreng Kampung",
    price: 12000,
    img: nasiGorengKampung,
    qty: 1,
    type: "rice",
  },
  {
    id: 11,
    name: "Nasi Ayam Geprek",
    price: 15000,
    img: "https://i.postimg.cc/bJC87BKY/Ayam-Geprek-1.jpg",
    qty: 1,
    type: "rice",
  },
  {
    id: 12,
    name: "Nasi Ayam Penyet",
    price: 15000,
    img: "https://i.postimg.cc/9Mn58q7r/Resep-Ayam-Penyet-Sederhana-Pedesnya-Nampol.jpg",
    qty: 1,
    type: "rice",
  },
  {
    id: 13,
    name: "Mie Goreng",
    price: 12000,
    img: "https://i.postimg.cc/L4P2CNxS/Mie-Goreng-Aceh.jpg",
    qty: 1,
    type: "noodle",
  },
  {
    id: 14,
    name: "Mie Ayam Bakso",
    price: 18000,
    img: "https://i.postimg.cc/cJ6rrf0J/Mie-ayam-1.jpg",
    qty: 1,
    type: "noodle",
  },
  {
    id: 15,
    name: "Mie Bakso Urat",
    price: 20000,
    img: "https://i.postimg.cc/rFBkSW1m/Bakso-Urat.jpg",
    qty: 1,
    type: "noodle",
  },
  {
    id: 16,
    name: "Ice Cream Coklat",
    price: 8000,
    img: "https://i.postimg.cc/q78yk8LC/Earl-Grey-chocolate-ice-cream.jpg",
    qty: 1,
    type: "ice cream",
  },
  {
    id: 17,
    name: "Ice Cream Vanila",
    price: 8000,
    img: "https://i.postimg.cc/FK8rnqcy/Premium-Photo-Female-s-hand-holding-vanilla-milk-soft-serve-ice-cream-cone-on-sunny-day.jpg",
    qty: 1,
    type: "ice cream",
  },
  {
    id: 18,
    name: "Ice Cream Strawberry",
    price: 8000,
    img: "https://i.postimg.cc/Mpggk8Pp/Homemade-Strawberry-Ice-Cream-Oh-Sweet-Basil.jpg",
    qty: 1,
    type: "ice cream",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: initialState,
    product: productInitialState,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // check the item is already in the cart
      const existingItem = state.product.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.product.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          qty: 1,
          type: newItem.type,
        });
      }
      state.totalPrice += newItem.price;
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.product.find((item) => item.id === id);
      if (existingItem !== undefined) {
        if (existingItem?.qty === 1) {
          state.product = state.product.filter((item) => item.id !== id);
          state.totalPrice -= existingItem.price;
        } else {
          existingItem.qty--;
          state.totalPrice -= existingItem.price;
        }
      }
    },
    resetCart(state) {
      state.product = productInitialState;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
