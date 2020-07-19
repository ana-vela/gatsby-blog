import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
    return (
        <Helmet
            title={`${title}  - Ana Vela`}
            meta={[
                {
                    name: `Front-End Developer Blog and Portfolio`,
                    content: description
                }
            ]}
        />
    )
}

export default SEO;
