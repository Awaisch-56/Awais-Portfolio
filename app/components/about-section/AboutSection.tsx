import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/picture1.png"
            alt="About Section Image"
            width={500}
            height={500}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
                I am Awais Akhtar, a passionate front-end web developer
                specializing in React.js, Next.js, and JavaScript. With a strong
                command of Material-UI, I craft intuitive and user-friendly web
                experiences. My focus is on building modern, responsive designs
                that deliver a seamless user experience.
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
                I completed my matriculation at BISE Bahawalpur in 2014.
                Following that, I pursued my intermediate studies in FSc
                Pre-engineering at BISE Bahawalpur. I later graduated with a
                degree in Electrical Engineering from the Islamia University of
                Bahawalpur (IUB) in 2020.
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
                At The Dev Corporate, I built and optimized web applications
                using Next.js, React.js, Material-UI, and Redux,
                focusing on intuitive UIs and responsive design for seamless
                user experiences. I also developed and maintained React Native
                applications, ensuring smooth performance and native-like
                interactions.
                <br />
                At Tyzend, I leveraged Zustand for state management, used ShadCN
                for modern UI components, and implemented Tailwind CSS for
                efficient styling, ensuring high-performance and visually
                appealing applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
