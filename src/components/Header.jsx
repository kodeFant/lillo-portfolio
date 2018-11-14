/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Content from './Content';
import Description from './Description';

const Intro = styled(Content)`
  ${tw('py-8 md:py-16')};
`;

const Title = styled.h1`
  ${tw('text-3xl md:text-5xl')};
  span {
    ${tw('text-orange')};
  }
`;

const Social = styled.section`
  ${tw('flex flex-wrap items-center justify-center sm:justify-start mt-8')};
`;

const Button = styled(OutboundLink)`
  ${tw(
    'cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline'
  )};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`;

const Homepage = styled(Button)`
  ${tw('bg-indigo text-white')};
`;

const GitHub = styled(Button)`
  ${tw('bg-grey-dark text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue text-white')};
`;

const LinkedIn = styled(Button)`
  ${tw('bg-blue-light text-white  sm:mx-4 my-4 sm:my-0')};
`;

const Header = () => (
  <Intro>
    <Title>
      Lars Lillo Ulvestad -<span> Portefølje</span>
    </Title>
    <Description>
      <p>
        Hei. Jeg heter <span>Lars Lillo Ulvestad.</span>
        <br />
        Jeg er webutvikler og lager nettsider i JavaScript og PHP
        <span>.</span>
        <br />
        Jeg er er en lagspiller og deler gladelig kunnskap og entusiasme for vårt samarbeid
        <span>.</span>
        <br />
        Jeg har bakgrunn som kommunikasjonsrådigver og webjournalist i henholdsvis{' '}
        <a href="https://www.norad.no" target="_blank" rel="noopener noreferrer">
          Norad
        </a>{' '}
        og{' '}
        <a href="https://www.norad.no" target="_blank" rel="noopener noreferrer">
          Teknisk Ukeblad
        </a>{' '}
        <span>.</span>
      </p>
    </Description>
    <Social>
      <Homepage role="button" href="https://www.kodefant.no">
        Nettside
      </Homepage>
      <GitHub role="button" href="https://github.com/kodeFant">
        GitHub
      </GitHub>
      <Twitter role="button" href="https://twitter.com/larsparsfromage">
        Twitter
      </Twitter>
      <LinkedIn role="button" href="https://www.linkedin.com/in/larslilloulvestad/">
        LinkedIn
      </LinkedIn>
    </Social>
  </Intro>
);

export default Header;
