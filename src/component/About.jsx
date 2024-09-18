import React from "react";

const About = () => {
  return (
    <div className="p-10 mt-16">
      <p id="thanks" className="leading-none mb-4 text-center">Welcome, and thank you for visiting.</p>
      <h1 className="text-[2rem] text-[#525252bb] mb-6">About us :</h1>
      <div className="w-full flex items-start justify-between gap-4 flex-wrap">
        <div className=" rounded-md overflow-hidden relative">
          <img
            className="w-[60vmin] about-img"
            src="https://img.freepik.com/premium-photo/two-men-shaking-hands-with-blue-background_902639-28561.jpg"
            alt=""
          />
        </div>
        <div className="w-[60%] about-info flex flex-col gap-3">
          <p className="text-[1.2rem] leading-[1.3]">
            Hello! <br />
            <span className="hilight">I'm Moshiul Alam</span>, a passionate{" "}
            <span className="hilight">front-end developer</span> skilled in{" "}
            <span className="hilight">HTML</span>,{" "}
            <span className="hilight">CSS</span>,{" "}
            <span className="hilight">JavaScript</span>,{" "}
            <span className="hilight">React</span>,{" "}
            <span className="hilight">Bootstup</span>,{" "}
            <span className="hilight">Tailwind</span>, and{" "}
            <span className="hilight">GSAP</span> , etc. I specialize in
            building any <span className="hilight">reality-based</span>,{" "}
            <span className="hilight">dynamic</span>,{" "}
            <span className="hilight">animated</span>, and{" "}
            <span className="hilight">responsive </span>
            websites that are visually engaging and user-friendly.
          </p>
          <p className="text-[1.2rem] leading-[1.3]">
            I’ve completed projects using React for complex applications and
            JavaScript for simpler ones. I'm also expanding into back-end
            development to offer full-stack solutions.
          </p>
          <p className="text-[1.2rem] leading-[1.3]">
            As a <span className="hilight">freelancer</span>, I’m ready to bring
            your web projects to life. Let's work together to create something{" "}
            <span className="hilight">amazing!</span>
          </p>
        </div>
      </div>
      <h1 className="text-[2rem] text-[#525252bb] mt-20 mb-6">
        About our website :
      </h1>
      <div className="w-full flex items-start justify-between gap-4 flex-wrap">
        <div className=" rounded-md overflow-hidden">
          <img
            className="w-[60vmin] about-img"
            src="https://media.licdn.com/dms/image/D4D12AQFQCKd5GjWcuQ/article-cover_image-shrink_720_1280/0/1668983679625?e=2147483647&v=beta&t=e-4WXuV4Epl4DWerjFRxJmBqXZ5Oq6s7keRkkAzd9Gs"
            alt=""
          />
        </div>
        <div className="w-[60%] about-info flex flex-col gap-3">
          <p className="text-[1.2rem] leading-[1.3]">
            I would like to extend a big thank you to{" "}
            <span className="hilight">Pixabay</span> for providing such amazing
            resources. Your platform was incredibly helpful in bringing my
            website to life, and I truly appreciate the free, high-quality
            images and assets you offer.
          </p>
          <p className="text-[1.2rem] leading-[1.3]">
            Pixabay is a popular platform offering free,{" "}
            <span className="hilight">high-quality</span> images, videos, music,
            and illustrations for personal and commercial use. Launched in{" "}
            <span className="hilight">2010</span>, it provides media under the
            Pixabay License, allowing users to download and use content without
            attribution. With contributions from creators worldwide, Pixabay is
            a valuable resource for enhancing digital projects..
          </p>
          <p>
            web site: pixabay.com{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              className="text-[blue] underline"
            >
              {" "}
              visit.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
