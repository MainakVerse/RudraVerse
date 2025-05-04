'use client';

import Image from 'next/image';
import CountUp from 'react-countup';

type CounterProps = {
  target: number;
  label: string;
};

const Counter = ({ target, label }: CounterProps) => {
  return (
    <div className="rounded-xl border p-4 shadow-sm text-center w-full">
      <p className="text-3xl font-bold text-yellow-400">
        <CountUp end={target} duration={2} />
      </p>
      <p className="text-sm text-yellow-600 mt-1">{label}</p>
    </div>
  );
};

const AboutHero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 mt-8 max-w-screen-xl mx-auto">
      {/* Image Section */}
      <div className="lg:col-span-4">
        <div className="h-full w-full relative rounded-xl overflow-hidden shadow-md min-h-[450px]">
          <Image
            src="/hero-image.png" // Replace with your image path
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bento Section */}
      <div className="lg:col-span-8 flex flex-col gap-4">
        {/* Text Box */}
        <div className="flex-1 rounded-xl border p-6 shadow-md ">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-500">About Me</h2>
          <p className="text-yellow-500">
            Hey there! I am Biplab Deka (Rudra). I am a Dynamic and creative professional with expertise in content management, writing, and social media strategy, currently managing
 Luxe Magazine. Skilled in crafting engaging content, blogging, and
 storytelling to captivate audiences and drive brand growth. 
 <br/><br/>
 Adept at
 balancing creativity with data-driven decision-making to deliver
 impactful results. Known for strong writing skills, attention to detail, and
 collaboration, ensuring every project exceeds expectations.
 <br/><br/>
 If you are searching for the best place to get a brand elevation, get a creative portfolio or even a mentor in your success, I would be glad to hold your hands in the path of excellence.

          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Counter target={750} label="Projects Completed" />
          <Counter target={500} label="Happy Clients" />
          <Counter target={5} label="Years in Business" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
