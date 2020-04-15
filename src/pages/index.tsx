import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'

export default (props) => {
  const { data } = props;
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <>
        <h1>Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </>
    </div>
  )
}

export const query = graphql`
  query findAllMarkdownPosts {
    allMarkdownRemark {
      edges {
        node {
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
