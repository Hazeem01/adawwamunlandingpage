const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: '"As a doctor with a hectic schedule, I never thought I could consistently study Qur’an. Ad-dawaamun’s flexible recordings and live Q&A sessions made it possible. I’ve now completed Tajweed Level 2—alhamdulillah!"',
    name: 'Brother Ahmed | Canada',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    text: '"As a doctor with a hectic schedule, I never thought I could consistently study Qur’an. Ad-dawaamun’s flexible recordings and live Q&A sessions made it possible. I’ve now completed Tajweed Level 2—alhamdulillah!"',
    name: 'Brother Ahmed | Canada',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    text: '"As a doctor with a hectic schedule, I never thought I could consistently study Qur’an. Ad-dawaamun’s flexible recordings and live Q&A sessions made it possible. I’ve now completed Tajweed Level 2—alhamdulillah!"',
    name: 'Brother Ahmed | Canada',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black text-center">What our Students are saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-800 mb-4">{t.text}</p>
              <span className="font-semibold text-black">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
