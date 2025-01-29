import Head from "next/head";
import React from "react";

const HeadTitle = ({ title }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Twelves | Ecommerce Platform</title>
                <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
            </Head>
        </React.Fragment>
    )
}
export default HeadTitle