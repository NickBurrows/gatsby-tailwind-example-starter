import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import TopNav from "../components/TopNav"

const IndexPage = () => { 
    const [mounted, setMounted] = useState(true);

    return (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <div className="container py-4">
        <h3>Bootstrap 5 React Examples</h3>
        <h6>no jquery, no reactstrap, no react-bootstrap</h6>
        {mounted &&
            <div>
                <TopNav />
            </div>
        }
    </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
        </p>
    </Layout>
)}

export default IndexPage
