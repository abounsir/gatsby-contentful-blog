import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allContentfulPost {
        edges {
          node {
            id
            slug
            title
            subtitle
          }
        }
      }
      site {
        siteMetadata {
          title        
        }
      }
    }
  `) 

  return (
    <Layout location='/' title={data.site.siteMetadata.title}>
      <SEO title="All posts" />
      <Bio />
      {data.posts.edges.map(({ node }) => {
        return (
          <article key={node.id}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {node.title}
                </Link>
              </h3>
            </header>
            <section>
              <p>{node.subtitle}</p>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex