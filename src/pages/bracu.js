import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { Link } from 'gatsby';
import { IconBookmark } from '@components/icons';

const StyledRedCircle = styled.span`
  display: inline-block;
  width: 10px;           
  height: 10px;          /* Adjust size */
  background-color: var(--burgundy); /* Circle color */
  border-radius: 50%;    /* Makes it a circle */
`

const StyledGreenCircle = styled.span`
  display: inline-block;
  width: 10px;           
  height: 10px;          /* Adjust size */
  background-color: var(--green); /* Circle color */
  border-radius: 50%;    /* Makes it a circle */
`

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;
const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
const StyledPost = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--green-tint);

    header,
    a {
      width: 100%;
    }
  }

  .post__icon {
    ${({ theme }) => theme.mixins.flexBetween};
    color: var(--green);
    margin-bottom: 30px;
    margin-left: -5px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .post__title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .post__desc {
    color: var(--light-slate);
    font-size: 17px;
  }

  .post__date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-transform: uppercase;
  }

  ul.post__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;


const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;

const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--green-tint);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const BracuPage = ({location, data}) => {

    const posts = data.coursesRemark.edges;
    
    const groupedBySemester = posts.reduce((acc, post) => {
        const { frontmatter } = post.node;
        const { semester } = frontmatter;

        if (!acc[semester]) {
            acc[semester] = [];
        }

        acc[semester].push(post);

        return acc;
    }, {});


    return (
        <Layout location={location}>
            <Helmet title="BRAC University" />

            <StyledMainContainer>
              <header>
                <h1 className="big-heading">BRAC University</h1>
                <p className="subtitle">
                  Course content for my offered courses at BRACU. Click on a course to follow.
                </p>
              </header>
              {Object.entries(groupedBySemester).map(([semester, posts]) => (
                <div key={semester}>
                  <h2 className='medium-heading'>{semester}</h2>
                  <StyledGrid>
                  {posts.length > 0 &&
                    posts.map(({ node }, i) => {
                      const { frontmatter } = node;
                      const { title, slug, date, status } = frontmatter;
                      const formattedDate = new Date(date).toLocaleDateString();
                      // get course name after : of title
                      const courseName = title.split(": ")[1];
                      const courseCode = title.split(": ")[0];

                      return (
                        <StyledPost key={i}>
                          <div className="post__inner">
                            <header>
                              <div className="post__icon">
                                <IconBookmark />
                              </div>
                              <h5 className="post__title">
                                <Link to={slug}>{courseCode}</Link>
                              </h5>
                            </header>

                            <footer>
                              <span className="post__date">{courseName}</span>
                            </footer>
                          </div>
                        </StyledPost>
                      );
                  })}
                  </StyledGrid>
                  <br />
                  <br />
                </div>
              ))}
            </StyledMainContainer>            
        </Layout>
    )
}

BracuPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default BracuPage;

export const pageQuery = graphql`
  {
    coursesRemark: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content/bracu/"}}
  ) {
    edges {
      node {
        frontmatter {
          title
          semester
          slug
          date
          status
        }
      }
    }
  }
  }
`;