import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'layouts/layout';
import SEO from 'components/seo';
import { Pronunciation } from 'components/pronunciation';
import { Icon } from 'ds';

const Home = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            writingDesc
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO
        title="Varun Vachhar"
        keywords={['generative design', 'javascript', 'creative coding']}
      />

      <div className="mw9 center ph5-l f5 lh-copy dark-gray sans-serif">
        <header className="mt6 mb5 ph3">
          <h1 className="ma0 f4">
            <Pronunciation />
          </h1>
          <p className="mt0 measure-wide">
            finder of new ways to confuse myself
          </p>
        </header>

        <section className="mb4 ph3">
          <h2 className="ma0 f4">About</h2>
          <p className="mt0 measure-wide">
            I am a developer with a strong focus on design, interactivity and
            animation. Originally from New Delhi, I currently live in Toronto
            and am the Director, UI Architecture at{' '}
            <a className="link dim primary" href="https://rangle.io">
              Rangle.io
            </a>
            . In my spare time, I like to experiment with creative coding,
            making{' '}
            <a className="link dim primary" href="http://triangle.life">
              triangles
            </a>{' '}
            and other playful experiences for the web.
          </p>
        </section>

        <nav className="measure-wide mb6">
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title={site.siteMetadata.writingDesc}
            href="{{ 'writing' | absolute_url }}"
          >
            Writing
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on twitter"
            href="http://twitter.com/winkerVSbecks"
          >
            Twitter
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on github"
            href="http://github.com/winkerVSbecks"
          >
            Github
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on CodePen"
            href="http://codepen.io/winkerVSbecks"
          >
            CodePen
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dn dib-ns"
            title="varun vachhar on dribbble"
            href="http://dribbble.com/winkerVSbecks"
          >
            Dribbble
          </a>
        </nav>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query writingFeatured {
    allMdx(limit: 4) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
