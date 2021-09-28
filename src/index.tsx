import React from 'react';
import ReactDOM from 'react-dom';
import {GlTemplate} from "gitlanding/GlTemplate";
import {Header} from "./Header";
import {GlHero} from "gitlanding/GlHero";
import heroImageUrl from "./assets/img/hero-image.png";
//import {Cards} from "./Cards";
import {GlArticle} from "gitlanding/GlArticle"
import {GlIllustration} from "gitlanding/GlIllustration"
import {GlFooter} from "gitlanding/GlFooter";
import {GlFooterBottomDiv} from "gitlanding/GlFooter/GlFooterBottomDiv";
import exampleGif from "./assets/img/example.gif";



ReactDOM.render(
  <React.StrictMode>
    <GlTemplate
      headerOptions={{
        "position": "fixed",
        "isRetracted": "smart"

      }}
      header={<Header />}
      footer={

        <GlFooter
          links={
            [
              {
                "title": "Github",
                "href": "https://github.com/thieryw/gitlanding"
              },
              {
                "title": "Documentation",
                "href": "https://docs.gitlanding.dev/"
              },
              {
                "title": "Storybook",
                "href": "https://sb.gitlanding.dev"
              }
            ]
          }
          bottomDiv={<GlFooterBottomDiv contentMd="M.I.T Licence" />}
        />
      }
    >
      <GlHero
        title="A stylish landing page for open source projects"
        subTitle="GitLanding enables you to create a landing page in a matter of minutes."
        imageSrc={heroImageUrl}
      />

      <GlArticle 
        title="A brief explanation"
        illustrationPosition="left"
        body={`**Gitlanding** is an **open source** **React** module that enables you to stylishly show case your open projects in but a few minutes.
you can easily use it by creating a react project and hosting if for free thanks to **Github Pages**.

To further increase efficiency, we use typescript for that nice inference that makes it easy to pick up.
        `}
        illustration={
          <GlIllustration 
            type="image"
            url={exampleGif}
          />
        }
        hasAnimation={true}
        buttonLabel="See example project"
        buttonLink={{
          "href": "https://www.sspcloud.fr/"
        }}
      />



    </GlTemplate>
  </React.StrictMode>,
  document.getElementById('root')
);

