import React from "react";
import Head from "next/head";

const Error = () => (
    <div className="text-sans mt-24">
        <Head>
            <title>Error</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full text-center text-gray-900">
            <p className="my-4 text-lg">
                Sorry, An Error Occurred !
            </p>

            <a target="_blank" href="https://www.essentiallysports.com/">
                <button type="button" class="align-middle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded text-center my-4 text-m px-5 py-3 m-2 focus:outline-none">
                    Read latest news from EssentiallySports
                </button>
            </a>
        </div>
    </div>
);

export default Error;