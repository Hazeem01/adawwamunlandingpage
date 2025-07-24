const Legacy = () => {
  return (
    <section className="bg-white py-16 px-4" id="legacy">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Legacy</h2>
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet consectetur. Uma vitae ornare pellentesque et eu vel venenatis placerat. In penatibus feugiat blandit non scelerisque aenean odio quisque faucibus. At tincidunt vestibulum placerat lobortis. Auctor gravida aliquet congue mi eleifend risus pulvinar lorem. Porttitor libero lacus sem eget quis at sed.Lorem ipsum dolor sit amet consectetur. Uma vitae ornare pellentesque et eu vel venenatis placerat. In penatibus feugiat blandit non scelerisque aenean odio quisque faucibus. At tincidunt vestibulum placerat lobortis. Auctor gravida aliquet congue mi eleifend risus pulvinar lorem. Porttitor libero lacus sem eget quis at sed.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded transition">Learn more</button>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290" alt="Legacy classroom" className="rounded-lg shadow-lg w-full max-w-md object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Legacy;
