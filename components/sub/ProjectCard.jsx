const ProjectCard = ({ src, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col w-full md:w-1/3 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <img src={src} alt={title} className="w-full object-contain" />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
