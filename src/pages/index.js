import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'layouts/layout';
import { Box, H1, Text, Link, H2 } from 'ds';
import SEO from 'components/seo';
import { Pronunciation } from 'components/pronunciation';
import { ProfileLinks } from 'components/profile-links';
import { Footer } from 'components/footer';

const Home = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            writingDesc
            keywords
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Varun Vachhar" keywords={site.siteMetadata.keywords} />

      <Box maxWidth={9} mx="auto" px={[0, 0, 5]}>
        <Box as="header" mt={6} mb={5} px={3}>
          <H1 fontSize={3} mb={0} lineHeight="copy">
            <Pronunciation />
          </H1>
          <Text mt={0} measure="wide" fontSize={2}>
            finder of new ways to confuse myself
          </Text>
        </Box>

        <main>
          <Box as="section" mb={4} px={3}>
            <H2 mb={1} fontSize={3}>
              About
            </H2>
            <Text measure="wide" fontSize={2}>
              I am a developer with a strong focus on design, interactivity and
              animation. Originally from New Delhi, I currently live in Toronto
              and am the Director, UI Architecture at{' '}
              <Link to="https://rangle.io">Rangle.io</Link>. In my spare time, I
              like to experiment with creative coding, making{' '}
              <Link to="http://triangle.life">triangles</Link> and other playful
              experiences for the web.
            </Text>
          </Box>

          <ProfileLinks />

          <blockquote className="twitter-tweet" data-conversation="none">
            <p lang="en" dir="ltr">
              Making progress{' '}
              <a href="https://t.co/IGrZWzqqbT">pic.twitter.com/IGrZWzqqbT</a>
            </p>
            &mdash; Compositor (@getcompositor){' '}
            <a href="https://twitter.com/getcompositor/status/929689837971623936?ref_src=twsrc%5Etfw">
              November 12, 2017
            </a>
          </blockquote>
        </main>
        <Footer px={3} />
      </Box>
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
