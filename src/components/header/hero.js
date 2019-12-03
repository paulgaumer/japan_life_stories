import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import podcastBannerNoCity from "../../images/banner.png"
// import podcastBanner from "../../images/podcast-banner.png"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    // <div className="flex flex-col items-center">
    <div className="">
      <Link to="/">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="JLS Logo"
          className=""
        />
        {/* <img src={podcastBannerNoCity} alt="JLS Logo" className="" /> */}
      </Link>
    </div>
  )
}

export default Hero
