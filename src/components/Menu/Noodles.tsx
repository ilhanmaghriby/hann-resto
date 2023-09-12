import CardList from "../Layout/CardList";
import { Header } from "../Layout/Header";

const Noodles = () => {
  return (
    <section className="ml-28 md:ml-32 mt-10">
      <Header>Our Noodle Menu</Header>
      <CardList typeFilter="noodle" />
    </section>
  );
};

export default Noodles;
