import NewsCart from "../NewsCart/NewsCart";
import { useEffect, useState } from "react";

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div>
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center  mt-16 mb-8">
        News & Blog
      </h2>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 max-w-6xl mx-auto gap-5">
        {newsData?.map((newsCart) => (
          <NewsCart key={newsCart.id} newsCart={newsCart}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default Blog;
