import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About{" "}
          <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/picture.jpg"
            alt="About Section Image"
            width={500}
            height={500}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
              I am Awais Akhtar, a passionate front-end web developer specializing in React.js, Next.js, and JavaScript. With a strong command of Material-UI, I craft intuitive and user-friendly web experiences. My focus is on building modern, responsive designs that deliver a seamless user experience.
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              I completed my matriculation at BISE Bahawalpur in 2014. Following that, I pursued my intermediate studies in FSc Pre-engineering at BISE Bahawalpur. I later graduated with a degree in Electrical Engineering from the Islamia University of Bahawalpur (IUB) in 2020.
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              At The Dev Corporate in Lahore, I developed and deployed robust web applications using React.js, Next.js, Material-UI, and Redux for state management, focusing on creating intuitive and efficient user interfaces. I also designed and built cross-platform mobile applications with React Native, ensuring a consistent user experience across both iOS and Android. Additionally, I implemented responsive designs and optimized performance across various devices and screen sizes to enhance the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;