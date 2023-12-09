function FoodWasteSection() {
  const topDonatingRestaurants = [
    {
      id: 1,
      name: "Savory Bites",
      donatedItems: 500,
      description:
        "Restaurant A is committed to reducing food waste and helping the community. They've donated 500 items of surplus food to those in need, making a significant impact.",
      logo: "https://i.ibb.co/XWtnh1j/I-will-design-food-and-restaurant-logo.jpg",
    },
    {
      id: 2,
      name: "Urban Spice Kitchen",
      donatedItems: 450,
      description:
        "Restaurant B is dedicated to the cause of reducing food waste and supporting the community. Their generous donations have provided 450 surplus food items to those in need.",
      logo: "https://i.ibb.co/SykSPvF/Find-the-best-global-talent-1.jpg",
    },
    {
      id: 3,
      name: "Coastal Eats Delight",
      donatedItems: 400,
      description:
        "Restaurant C has actively participated in the fight against food waste. Their contributions include 400 surplus food items, contributing to a more sustainable future.",
      logo: "https://i.ibb.co/hVp0NJB/I-will-design-fast-food-bbq-cafe-coffee-shop-and-restaurant-logo.jpg",
    },
    {
      id: 4,
      name: "Fireside Grillhouse",
      donatedItems: 350,
      description:
        "Restaurant D is a key player in our community's efforts to reduce food waste. They've donated 350 surplus food items, supporting our mission to combat hunger.",
      logo: "https://i.ibb.co/5hy3zg7/Freepik-Download-Free-Videos-Vectors-Photos-and-PSD.jpg",
    },
    {
      id: 5,
      name: "Piquant Palate Bistro",
      donatedItems: 300,
      description:
        "Restaurant E is a passionate advocate for reducing food waste. Their generous contributions of 300 surplus food items have positively impacted the community.",
      logo: "https://i.ibb.co/vCW05zT/Resturent-Logo.jpg",
    },
  ];
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Top Donating Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          {topDonatingRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={restaurant.logo}
                alt={restaurant.name}
                className="w-full h-[150px] object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{restaurant.name}</h3>
              <p className="text-gray-500 mt-2">
                Donated: {restaurant.donatedItems} items
              </p>
              <p className="text-gray-700 mt-4">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodWasteSection;
