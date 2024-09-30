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

    console.log(groupedBySemester)

    return (
        <Layout location={location}>
            <Helmet title="BRAC University" />

            <main>
                <h1>BRAC University Courses</h1>

                <p>Course content for my offerred courses. Click on a course to follow.</p>

                <br/>

                {Object.keys(groupedBySemester).map((semester, i) => {
                    const posts = groupedBySemester[semester];

                    return (
                        <div key={i}>
                            <h2>{semester}</h2>
                            <ul>
                                {posts.map(({ node }) => {
                                    const { title } = node.frontmatter;

                                    return (
                                        <li key={title}>
                                            <Link to={node.frontmatter.slug}>{title}</Link>
                                            {/* <p>hehe</p> */}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}

                <hr/>

                <p>This page is still under development.</p>
            </main>
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
        }
      }
    }
  }
  }
`;