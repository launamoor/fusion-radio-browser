const About = function () {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h2 className="self-center text-3xl text-gradient-dark font-bold mb-8">
        Fusion Online
      </h2>
      <p className="text-md px-4 mb-4">
        A React App to search Radio Stations and listen to music from all over
        the world. <br /> This project is part of the personal portfolio of{" "}
        <a
          href="https://bartjozef.com"
          target="_blank"
          rel="noreferrer"
          className="link link-accent font-semibold transition-all"
        >
          Bartosz Jozefowicz
        </a>
        .
      </p>
      <p className="text-md px-4">
        Version <span className="text-accent font-semibold">1.2.1</span>
      </p>
      <p className="text-md px-4">
        Layout by: 
        <span>
          <a
            href="https://bartjozef.com"
            target="_blank"
            rel="noreferrer"
            className="link link-accent font-semibold transition-all"
          >
            Bartosz Jozefowicz
          </a>
        </span>
      </p>
    </div>
  );
};

export default About;
