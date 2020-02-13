import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data:{
  post: {
    title,
    author,
    slug,
    subtitle,
    image,
    content :{
      childMarkdownRemark :{
        html
      }
    }
  }
} }) => {
  return (
    <Layout location={slug} title={title}>
      <SEO
        title={title}
        description={subtitle}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {title}
          </h1>
          <Image fluid={image.fluid} alt={title}/> 
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulPost(slug: {eq: $slug}) {
      title
      slug
      author
      subtitle
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          base64
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
          aspectRatio
        }
      }
    }
  }
`
