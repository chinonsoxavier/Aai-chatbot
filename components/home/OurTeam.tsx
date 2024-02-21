import { ourTeams } from '@/constants';
import AnimationWidget from '@/widgets/AnimationWidget'
import React from 'react';
import OurTeamCard from './OurTeamCard';

const OurTeam: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-[#f9f6f6] w-full py-20 ">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-darker_text font-semibold text-3xl base:text-2xl">
            Our Awesome Team
          </h1>
          <AnimationWidget />
          <p className="max-w-[520px] text-sm text-dark_text text-center font-light base:text-xs base:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="max-width flex items-center justify-center flex-wrap w-full gap-5 md:py-10 base:py-5">
          {ourTeams.map((team, index) => (
            <OurTeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam