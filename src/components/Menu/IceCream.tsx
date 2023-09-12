import CardList from "../Layout/CardList";
import { Header } from "../Layout/Header";

const IceCream = () => {
  return (
    <section className="ml-28 md:ml-32 mt-10">
      <Header>Our Ice Cream Menu</Header>
      <CardList typeFilter="ice cream" />
    </section>
  );
};

export default IceCream;
