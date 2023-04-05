import React from "react";
import Head from "next/head";

const Loading = () => (
    <div className="text-sans mt-24">
        <Head>
            <title>Loading...</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full text-center text-gray-900">
            <p className="my-4 text-lg">
                Loading Latest News...
            </p>
        </div>
    </div>
);

export default Loading;
