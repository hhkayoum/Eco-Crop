const Baner = () => {
  return (
    <div>
      <div className="hero h-[75vh] bg-[#E1EAEF]">
        <div className="flex max-w-6xl mx-auto items-center flex-row-reverse justify-between gap-7">
          <div className="md:flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/DbY2p4V/397397799-848399646983086-3728743528340807819-n-removebg-preview.png"
              className=" rounded-lg hidden md:flex md:w-[300px] lg:w-[450px] pb-5 "
            />
          </div>
          <div className="md:flex-1 md:pl-5">
            <h1 className="lg:text-5xl md:text-3xl md:font-semibold  text-center md:text-start lg:font-bold text-2xl font-bold">
              Welcome to EcoCrops
            </h1>
            <p className="py-6 text-center md:text-start md:text-base text-sm">
              Connecting communities, reducing waste, nourishing lives. Join us
              to combat hunger and food waste. Together, we make a difference.
            </p>
            <div className="flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="Type Your Location"
                className="input input-bordered w-full max-w-xs "
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="flex w-1/2 justify-between mt-4 items-center ">
                <button className="btn btn-sm md:btn-md border-2 text-[white] bg-[#F4853A]  hover:bg-[#F4853A]  md:flex-1">
                  Delivery
                </button>
                <div className="divider divider-horizontal text-[#F4853A] shrink-0">
                  OR
                </div>
                <button className="btn md:btn-md btn-sm border-2 text-[#F4853A] border-[#F4853A] hover:bg-[#F4853A] hover:text-[white] flex-1">
                  PickUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
