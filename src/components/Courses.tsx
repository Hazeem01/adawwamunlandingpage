import explore1 from '../assets/explore1.png';
import explore2 from '../assets/explore2.png';
import explore3 from '../assets/explore3.png';

const courses = [
  {
    img: explore1,
    title: 'Learn Qur’an from scratch (From Zero to Qoori)',
    desc: 'Explore the foundational principles of Islam, including its history, beliefs, and practices.',
  },
  {
    img: explore2,
    title: 'Learn and Master Qur’an within 6 months.',
    desc: 'Learn the basics of Arabic language and grammar through the study of Quranic verses.',
  },
  {
    img: explore3,
    title: 'Learn Qur’an at your own pace.',
    desc: 'Gain insights into the principles and applications of Sharia-compliant finance and banking systems.',
  },
];

const Courses = () => {
  return (
    <section className="bg-white py-16 px-4" id="courses">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black text-center">Explore Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
              <img src={course.img} alt={course.title} className="w-full h-72 object-cover" />
              <div className="p-6 text-left flex-1 flex flex-col w-full">
                <h3 className="text-xl font-bold mb-2 text-black">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <button className="border border-sky-500 text-sky-500 px-5 py-2 rounded hover:bg-sky-50 font-semibold w-fit">Enroll now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
