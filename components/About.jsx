import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {"// I am not your normal developer"}
          </p>
          <p className="py-2 text-gray-600">
            A 30 year old self-taught Frontend Developer, currently living in
            Tetovo. I always want to learn JS and create websites, so in 2020 I
            decided to take Frontend course at &apos;Code Academy&apos; in
            Skopje and after 9 months I have graduated as a Frontend Web
            Developer. I&apos;m also a firm believer that we should never
            settle. I&apos;m hard working, super curious, passionate, committed
            and a fast learner!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  )
};

export default About;
