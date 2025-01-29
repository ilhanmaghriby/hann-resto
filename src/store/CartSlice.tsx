import { createSlice } from "@reduxjs/toolkit";
import nasiGorengKampung from "../assets/img/nasi-goreng-kampung.webp";
import nasiGoreng from "../assets/img/nasi-goreng.webp";
import doubleBurger from "../assets/img/double-burger.webp";
import beefBurgerDeluxe from "../assets/img/beef-burger.webp";
import iceCreamOreo from "../assets/img/oreo.webp";
import iceCreamVanilla from "../assets/img/vanilla.webp";
import iceCreamStrawberry from "../assets/img/strawberry.webp";
import iceCreamChocolate from "../assets/img/coklat.webp";
import nasiAyamPenyet from "../assets/img/penyet.webp";
import nasiAyamGeprek from "../assets/img/geprek.webp";
import beefBurger from "../assets/img/beefburger.webp";
import cheeseBurger from "../assets/img/cheeseburger.webp";
import chickenBurger from "../assets/img/chickenburger.webp";
import mieAyam from "../assets/img/mieayam.webp";
import mieGoreng from "../assets/img/miegoreng.webp";
import mieAyamBakso from "../assets/img/ayambakso.webp";
import mieBaksoUrat from "../assets/img/baksourat.webp";

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
    img: iceCreamOreo,
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
    img: mieAyam,
    qty: 1,
    type: "noodle",
  },
  {
    id: 6,
    name: "Beef Burger",
    price: 15000,
    img: beefBurger,
    qty: 1,
    type: "fast food",
  },
  {
    id: 7,
    name: "Cheese Burger",
    price: 13000,
    img: cheeseBurger,
    qty: 1,
    type: "fast food",
  },
  {
    id: 9,
    name: "Chicken Burger",
    price: 15000,
    img: chickenBurger,
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
    img: nasiAyamGeprek,
    qty: 1,
    type: "rice",
  },
  {
    id: 12,
    name: "Nasi Ayam Penyet",
    price: 15000,
    img: nasiAyamPenyet,
    qty: 1,
    type: "rice",
  },
  {
    id: 13,
    name: "Mie Goreng",
    price: 12000,
    img: mieGoreng,
    qty: 1,
    type: "noodle",
  },
  {
    id: 14,
    name: "Mie Ayam Bakso",
    price: 18000,
    img: mieAyamBakso,
    qty: 1,
    type: "noodle",
  },
  {
    id: 15,
    name: "Mie Bakso Urat",
    price: 20000,
    img: mieBaksoUrat,
    qty: 1,
    type: "noodle",
  },
  {
    id: 16,
    name: "Ice Cream Coklat",
    price: 8000,
    img: iceCreamChocolate,
    qty: 1,
    type: "ice cream",
  },
  {
    id: 17,
    name: "Ice Cream Vanila",
    price: 8000,
    img: iceCreamVanilla,
    qty: 1,
    type: "ice cream",
  },
  {
    id: 18,
    name: "Ice Cream Strawberry",
    price: 8000,
    img: iceCreamStrawberry,
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
