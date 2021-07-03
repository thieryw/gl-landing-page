import React from 'react';
import ReactDOM from 'react-dom';
import {GlTemplate} from "gitlanding/GlTemplate";
import {Header} from "./Header";
import {GlHero} from "gitlanding/GlHero";
import heroImageUrl from "./assets/img/hero-image.png";





ReactDOM.render(
  <React.StrictMode>
    <GlTemplate
      header={<Header />}
    >
      <GlHero
        title="Git Landing"
        subTitle="Set up a stylish landing page for your project in just a few minutes"
        imageSrc={heroImageUrl}
      />
    </GlTemplate>
  </React.StrictMode>,
  document.getElementById('root')
);

