
export default function PageHeader({badge, title, highlight,semititle, description  }) {
  return (
    <div>
      {/* Badge */}
      <span className=" inline-flex items-center gap-2 px-4  rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-sm mb-4">
        <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
        {badge}
      </span>

      <h1 className="text-5xl md:text-6xl font-bold text-white">
        {title}{" "}
        <span className="text-orange-500">
          {highlight}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white pt-3">
          {semititle}{" "}
        </h1>
        {/* الوصف */}
      <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto pb-6">
        {description}
      </p>
      </h1>

      
    </div>
  );
}