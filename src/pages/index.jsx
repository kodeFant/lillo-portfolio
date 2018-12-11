/* global tw */
/* eslint no-unused-expressions: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint no-return-assign: 0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import "typeface-montserrat";
import Header from "../components/Header";
import favicon from "../favicon.png";
import rightArrow from "../right-arrow.svg";
import github from "../github.svg";
import "./global.scss";

const Page = styled.div`
  ${tw(
    "text-white font-sans p-0 m-0 bg-indigo-darker antialiased border-8 sm:border-16 border-solid border-indigo leading-normal relative"
  )};
  background: #191e38
    url(https://www.transparenttextures.com/patterns/dark-denim.png);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const SliderWrapper = styled.section`
  ${tw("sm:px-8 px-4 md:px-24")};
`;

const Footer = styled.footer`
  ${tw(
    "text-center pb-6 pt-12 text-xs text-grey-light tracking-wide z-50 uppercase"
  )};
  a {
    ${tw("text-orange hover:text-orange-light no-underline")};
  }
`;

const Item = styled.div`
  ${tw("bg-black rounded-lg shadow-lg flex")};
  height: 525px;
  @media (max-width: 500px) {
    height: 450px;
  }
`;

const ItemContent = styled.div`
  ${tw("py-8 px-6 flex flex-wrap content-between relative")};
`;

const Top = styled.div`
  ${tw("z-30 flex flex-col")};
`;

const Bottom = styled.div`
  ${tw("z-30")};
`;

const Preview = styled(OutboundLink)`
  ${tw(
    "text-white inline-block text-xl relative mb-0 py-1 tracking-wide no-underline uppercase"
  )};
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
`;

const PreviewTitle = styled(OutboundLink)`
  ${tw(
    "text-white inline-block relative mb-0 py-1 tracking-wide no-underline"
  )};
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
`;

const Repo = styled(OutboundLink)`
  ${tw(
    "text-white text-sm inline-block mb-4 py-1 tracking-wide no-underline opacity-75"
  )};
  transition: all 0.4s ease-in-out;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    ${tw("opacity-100")};
  }
`;

const Desc = styled.div`
  ${tw("text-sm text-white opacity-75")};
`;

const BGImage = styled.div`
  ${tw("absolute pin rounded-lg")};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw("rounded-lg")};
    opacity: 0.5 !important;
  }
`;

const ItemTitle = styled.h2`
  ${tw("text-white text-xl mb-4")};
  @media (min-width: 576px) {
    ${tw("text-white text-3xl mb-4")};
  }
`;

const Gradient = styled.div`
  ${tw("absolute pin rounded-lg z-20")};
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;

const Divider = styled.div`
  ${tw("bg-orange w-16 mb-4")};
  height: 3px;
`;

const FeaturesWrapper = styled.div`
  ${tw("text-grey-lighter text-xs flex items-end")};
  min-height: 50px;
`;

const Heading = styled.h2`
  ${tw("text-2xl md:text-4xl font-normal")};
`;

const Grid = styled.div`
  ${tw("py-12")};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

class Index extends Component {
  state = {
    name: "[DIRECTORY_NAME]",
    url: "[GITHUB_REPO_URL]"
  };

  selectChange = event => {
    this.setState({
      name: event.target.selectedOptions[0].dataset.name,
      url: event.target.selectedOptions[0].dataset.url
    });
  };

  render() {
    const {
      data: {
        allSitesYaml: { edges },
        site: { siteMetadata }
      }
    } = this.props;

    const { name, url } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{siteMetadata.siteTitle}</title>
          <meta
            name="description"
            content="Web-portefølje for Lars Lillo Ulvestad, webutvikler spesialisert i JavaScript og WordPress."
          />
          <meta name="image" content={favicon} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="lillo.tech" />
          <meta property="og:url" content="https://lillo.tech" />
          <meta
            property="og:title"
            content="Portefølje for webutvikler Lars Lillo Ulvestad"
          />
          <meta
            property="og:description"
            content="Web-portefølje for Lars Lillo Ulvestad, webutvikler spesialisert i JavaScript og WordPress."
          />
          <meta property="og:image" content={favicon} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@larsparsfromage" />
          <meta
            name="twitter:title"
            content="Portefølje for webutvikler Lars Lillo Ulvestad"
          />
          <meta
            name="twitter:description"
            content="Web-portefølje for Lars Lillo Ulvestad, webutvikler spesialisert i JavaScript og WordPress."
          />
          <meta name="twitter:image" content={favicon} />
        </Helmet>
        <Page>
          <Header />
          <SliderWrapper>
            <Heading>Prosjekter</Heading>
            <Grid>
              {edges.map(site => {
                const {
                  id,
                  title,
                  description,
                  preview,
                  features,
                  cover,
                  url
                } = site.node;
                return (
                  <Item key={id}>
                    <ItemContent>
                      <Top>
                        <Preview href={preview}>
                          Besøk{" "}
                          <img
                            src={rightArrow}
                            alt="Arrow"
                            aria-hidden="true"
                          />
                        </Preview>
                        {url ? (
                          <Repo href={url}>
                            <img src={github} alt="Arrow" aria-hidden="true" />{" "}
                            GitHub
                          </Repo>
                        ) : null}
                        <Desc>{description}</Desc>
                      </Top>
                      <Bottom>
                        <PreviewTitle href={preview}>
                          <ItemTitle>{title}</ItemTitle>
                        </PreviewTitle>
                        <Divider />
                        <FeaturesWrapper>{features.join(", ")}</FeaturesWrapper>
                      </Bottom>
                      <BGImage>
                        <Gradient />
                        <Img fluid={cover.childImageSharp.fluid} />
                      </BGImage>
                    </ItemContent>
                  </Item>
                );
              })}
            </Grid>
          </SliderWrapper>
          <Footer>
            Kodet av{" "}
            <OutboundLink href="https://kodefant.no">kodeFant</OutboundLink>.{" "}
          </Footer>
        </Page>
      </React.Fragment>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allSitesYaml: PropTypes.shape({
      edges: PropTypes.array.isRequired
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired
    })
  }).isRequired
};

export const overviewQuery = graphql`
  query OverviewQuery {
    allSitesYaml {
      edges {
        node {
          id
          title
          url
          name
          description
          preview
          features
          cover {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
