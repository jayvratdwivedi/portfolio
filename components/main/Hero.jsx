import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col h-full w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source
          src={`${import.meta.env.BASE_URL}/videos/blackhole.webm`}
          type="video/webm"
        />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
