const experience = [
  {
    title: "LinkedIn",
    position: "Software Development Intern",
    date: "(may 2026 - jul 2026)",
    description:
      "the possibilities are endless",
    link: "https://www.linkedin.com/company/linkedin/",
  },
  {
    title: "Zentree Labs ",
    position: "Machine Learning Intern",
    date: "(apr 2025 - jun 2025)",
    description:
      "worked on a multimodal llm powered system for 3D voxel generation from diverse input modalities.",
    link: "https://www.linkedin.com/company/zentreelabs/",
  },
  {
    title: "Zentree Labs",
    position: "Machine Learning Intern",
    date: "(nov 2024 - dec 2024)",
    description:
      "worked on a yolov8 based tracking system, featuring custom NMS for improved accuracy and network pruning for model size optimization.",
    link: "https://www.linkedin.com/company/zentreelabs/",
  },
];

export default function Experience() {
  return (
    <div className="text-white mb-16">
      <h1 className="text-2xl font-bold text-white">
        <span className="text-green-300">&gt;</span> work
      </h1>
      <div className="mt-10">
        {experience.map((exp) => (
          <div key={exp.title} className="mt-10 group">
            <a
              href={exp.link}
              className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-green-300"
            >
              {exp.title}
            </a>
            <p className="text-gray-500 text-xs mt-2">
              {exp.position} | {exp.date}
            </p>
            <p className="text-gray-400 mt-5 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
