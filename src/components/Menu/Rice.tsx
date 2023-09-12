import CardList from "../Layout/CardList";
import { Header } from "../Layout/Header";

const Rice = () => {
  return (
    <section className="ml-28 md:ml-32 mt-10">
      <Header>Our Rice Menu</Header>
      <CardList typeFilter="rice" />
    </section>
  );
};

export default Rice;
