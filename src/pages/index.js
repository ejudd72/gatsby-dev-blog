import React from "react"
import Banner from "../components/banner"
import ArchiveGrid from "../components/archive-grid"
const IndexPage = () => {
  return (
    <div>
      <Banner imgName="../images/computer.jpg" />
      <ArchiveGrid />
    </div>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//             featuredImage {
//               childImageSharp {
//                 sizes(maxWidth: 630) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// featuredImage {
//   childImageSharp {
//     sizes(maxWidth: 630) {
//       ...GatsbyImageSharpSizes
//     }
//   }
// }
