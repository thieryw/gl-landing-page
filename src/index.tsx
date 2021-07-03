import React from 'react';
import ReactDOM from 'react-dom';
import {GlTemplate} from "gitlanding/GlTemplate";
import {Header} from "./Header";
import {GlHero} from "gitlanding/GlHero";
import heroImageUrl from "./assets/img/hero-image.png";
import {Cards} from "./Cards";
import {GlSection} from "gitlanding/GlSection"
import {GlArticle} from "gitlanding/GlSection/GlArticle"
import {GlAside} from "gitlanding/GlSection/GlAside";





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

      <GlSection
        heading="A few examples to get you enthralled"
        article={
          <GlArticle
            title="GlSection Example"
            articleMd={
              [
                "This an example of how to set up a ",
                "GitLanding section with the full code and imports. ",
                "Follow the link bellow to view on Storybook"
              ].join("")
            }
            buttonLabel="Storybook"
            buttonLink={{
              "href": "https://sb.gitlanding.dev/?path=/story/glsection-glsection--vue-with-code"
            }}
          />
        }


        aside={
          <GlAside
            type="code"
            language="jsx"
            showLineNumbers={true}
            text={`import {GlSection} from "gitlanding/GlSection"
import {GlArticle} from "gitlanding/GlSection/GlArticle"
import {GlAside} from "gitlanding/GlSection/GlAside";

<GlSection
  heading="Your heading"
  article={
    <GlArticle
      title="Your Title"
      articleMd="Your Article"
      buttonLabel="Your Label"
    />
  }
    
  aside={
    <GlAside
      type="code"
      language="ts"
      showLineNumbers={true}
      text={\`
          function sum(x: number; y: number){
              return x+y;
    
          }
      \`}
    />
  }
/>`}
          />
        }
      />

      <GlSection 
        article={
          <GlAside 
            type="code"
            language="jsx"
            showLineNumbers={true}
            text={`import {GlLogoCard} from "gitlanding/GlCards/GlLogoCard";
<GlLogoCard
	iconUrls={[yourIconUrl]}
	title="Your Project Name"
	paragraph="A description for your Project"
	link={{
		"href": "The link for your project"
	}}
/>`}
          />
        }

        aside={
          <GlArticle 
            title="GlCard Example"
            articleMd={[
              "This example shows you how to easily create ",
              "a stylish looking card to showcase a project. ",
              `Go to **Storybook** in the link bellow if you want `,
              "more sophisticated examples."

            ].join("")}

            buttonLabel="Storybook"
            buttonLink={{
              "href": "https://sb.gitlanding.dev/?path=/story/glcards-glcards--vue"
            }}
          />
        }

      />

      <Cards />

    </GlTemplate>
  </React.StrictMode>,
  document.getElementById('root')
);

