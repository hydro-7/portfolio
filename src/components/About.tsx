export default function About() {
  return (
    <section className="mb-16 space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-green-300">&gt;</span> about
        </h2>
        <p className="text-gray-500 italic text-xs mb-4">
          [ i use arch btw ]
        </p>
      </div>

      <div className="space-y-5 text-sm">
        <p className="text-gray-300 leading-relaxed tracking-wide">
          20 y/o cs undergrad. aspiring to be a software dev someday
        </p>

        <p className="text-gray-300 leading-relaxed tracking-wide">
          i like taking ideas and pushing them till they turn into something
          real. curious by default, get things done without much noise
        </p>

        <p className="text-gray-300 leading-relaxed tracking-wide">
          into low-level systems, ml papers and playing around with linux. 
          also into basketball, books and anything food related
        </p>
      </div>
    </section>
  );
}
