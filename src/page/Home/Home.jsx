import { Helmet } from "react-helmet";
import Baner from "./Baner/Baner";
import Blog from "./Blog/Blog";
import FixtureItem from "./FixtureItem/FixtureItem";
import FoodWasteSection from "./FoodWasteSection/FoodWasteSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EcoCrop / Home</title>
      </Helmet>
      <Baner></Baner>
      <FixtureItem></FixtureItem>
      <Blog></Blog>
      <FoodWasteSection></FoodWasteSection>
    </div>
  );
};

export default Home;
