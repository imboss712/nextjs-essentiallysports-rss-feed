import React from "react";
import Head from "next/head";
import Nav from "./nav";
import Article from "./article";

const Articles = ({ feed, articles }) => (
    <div className="text-sans">
        <Head>
            <title>{feed.title}</title>
            <meta name="description" content={feed.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav feed={feed} />

        <div className="w-full text-center">
            <h1 className="m-0 w-full pt-12 leading-tight text-5xl font-bold">
                Latest News &rarr;
            </h1>

            {articles.length == 0 ? <p className="my-4 text-lg">
                No Articles Found !
            </p> : articles.map((article, index) => (
                <Article key={index} article={article} />
            ))}

            <a target="_blank" href="https://www.essentiallysports.com/">
                <button type="button" class="align-middle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded text-center my-4 text-m px-5 py-3 mx-2 my-20 focus:outline-none">
                    Read more news from EssentiallySports
                </button>
            </a>
        </div>
    </div>
);

export default Articles;