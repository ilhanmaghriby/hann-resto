import CardList from "../Layout/CardList";
import { Header } from "../Layout/Header";

const FastFood = () => {
  return (
    <section className="ml-28 md:ml-32 mt-10">
      <Header>Our Fast Food Menu</Header>
      <CardList typeFilter="fast food" />
    </section>
  );
};

export default FastFood;
