import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a cs student and I am currently learning software development.I am mostly interested in web development and I am always looking to learn  new skills in the web dev world.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/galpodlipnik1'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;