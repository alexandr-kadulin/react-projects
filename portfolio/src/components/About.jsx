import aboutSvg from '../assets/about.svg';
import { SectionTitle } from '.';

export const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="..." className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            voluptates qui temporibus, quasi cumque maxime voluptate, quis
            exercitationem sequi incidunt inventore reprehenderit praesentium
            quam deserunt. Quam fugiat placeat a dolore!
          </p>
        </article>
      </div>
    </section>
  );
};
