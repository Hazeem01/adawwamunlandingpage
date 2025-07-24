const stats = [
  { value: '50k+', label: 'Students' },
  { value: '98%', label: 'Positive Feedbacks' },
  { value: '30+', label: 'Competent Tutors' },
  { value: '10+', label: 'Years Experience' },
];

const GlobalImpact = () => {
  return (
    <section className="bg-sky-400 py-12 w-full" id="impact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Global Impact</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 divide-y md:divide-y-0 md:divide-x divide-white">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 px-8 py-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-white opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
