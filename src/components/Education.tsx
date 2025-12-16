const edu = [
  {
    title: "Indian Institute of Information Technology Design & Manufacturing Kurnool",
    position: "b.tech computer science",
    date: "(2023 - 27) | grade : 9.11",
    link: "https://iiitk.ac.in/",
  },
];

export default function Education() {
  return (
    <div className="mb-16 text-white ">
      <h1 className="text-2xl font-bold text-white">
        <span className="text-green-300">&gt;</span> education
      </h1>
      <div className="mt-10">
        {edu.map((ed) => (
          <div key={ed.title} className="mt-10 group">
            <a
              href={ed.link}
              className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-green-300"
            >
              {ed.title}
            </a>
            <p className="text-gray-500 text-xs mt-2">
              {ed.position} | {ed.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
