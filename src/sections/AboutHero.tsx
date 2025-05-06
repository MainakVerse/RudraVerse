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
          <h2 className="text-4xl font-semibold mb-2 text-yellow-500 font-playfair">About Me</h2>
          <p className="text-yellow-500 font-playfair text-lg">
            Hey there! I am Biplab Deka (Rudra). My journey from engineering classrooms to building brands has been anything but linear, and that’s what makes it meaningful. Every win, every failure, every lesson has shaped not just the entrepreneur in me, but the person. </p> 
<p className="text-yellow-500 font-playfair text-lg"><br/>
 Being named among India’s Top 100 Budding Entrepreneurs and receiving the India’s Prime Icon award has been deeply humbling. But titles aside, what drives me most is the ability to help others grow—whether that’s by scaling businesses, simplifying operations, or creating sustainable strategies that actually work.</p>
 <p className="text-yellow-500 font-playfair text-lg"><br/>
As a mentor, I don’t just share frameworks—I share experiences. I believe in showing up honestly, and supporting those who are willing to take the leap. When I’m not working, you’ll probably find me writing, traveling, podcasting, or diving into a new book. I’m also drawn to spiritualism, dark psychology, and emotional healing—tools that help me stay grounded and guide others with empathy and awareness. </p>
<p className="text-yellow-500 font-playfair text-lg"><br/>
To me, entrepreneurship isn’t just about profit or performance—it’s about people, purpose, and building a life you’re proud of. I’m grateful to represent North-East India, and I’m here to keep learning, growing, and hopefully—helping a few others do the same along the way.

          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-playfair">
          <Counter target={750} label="Projects Completed" />
          <Counter target={500} label="Happy Clients" />
          <Counter target={8} label="Years in Business" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
