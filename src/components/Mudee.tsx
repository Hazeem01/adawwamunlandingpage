import MudeerImg from '../assets/Mudeer.jpg';

const Mudee = () => {
  return (
    <section className="bg-white py-16 px-4" id="mudeer">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black text-center">Meet our Mudeer</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img src={MudeerImg} alt="Mudeer" className="rounded-lg shadow-lg w-full max-w-sm object-cover" />
          </div>
          {/* Right: Message */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">A Message from our Mudeer</h3>
            <p className="italic text-gray-700 mb-2">"Bismillāh al-Raḥmān al-Raḥīm"</p>
            <p className="text-gray-800 mb-4">
              Ad-Dawaamun was never merely an institution—it was a response to a divine call. When we began this journey, we asked Allah to make us a means through which the Ummah reclaims its connection to the Qur'ān and Sunnah. Today, every student who memorises an āyah, understands a ḥadīth, or embodies the adab of our scholars is a testament to that du'ā.
              <br /><br />
              Our promise? To deliver knowledge as it was received—with clarity, compassion, and unwavering adherence to the way of the Salaf. Whether you are a parent seeking tarbiyah for your child, a professional yearning to deepen your faith, or a seeker of sacred sciences, this is your sanctuary.
              <br /><br />
              Join us. Let us walk this path together, not as teachers and students, but as companions in pursuit of Allah's pleasure.
            </p>
            <p className="font-bold text-black">Ustadh Umar Salami</p>
            <p className="text-gray-700 text-sm">Founder & Director of Ad-Dawaamun Islamic Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mudee;
