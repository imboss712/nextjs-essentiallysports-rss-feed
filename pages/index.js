import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import Error from "../components/error";
import Articles from "../components/articles";

const baseRSSUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
const feedUrl = "https://www.essentiallysports.com/feed/";

const Home = () => {
  // if (isLoading) {
  //   return <Loading />;
  // } else if (isError) {
  //   return <Error />;
  // } else if (feed) {
  //   console.log("feed 3: " + data.feed);
  //   return (
  //     <div className="text-sans">
  //       <Head>
  //         <title>Home</title>
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>

  //       <Nav feed={feed} />

  //       <div className="w-full text-gray-900">
  //         <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-center font-bold">
  //           Latest News &rarr;
  //         </h1>

  //         {/* Articles */}

  //         <div className="max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around">
  //           
  //           <a
  //             href="https://nextjs.org/learn"
  //             className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
  //           >
  //             <h3 className="m-0 text-blue-500 text-lg font-bold">
  //               Next.js Learn &rarr;
  //             </h3>
  //             <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900">
  //               Learn about Next.js by following an interactive tutorial!
  //             </p>
  //           </a>
  //           <a
  //             href="https://github.com/zeit/next.js/tree/master/examples"
  //             className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
  //           >
  //             <h3 className="m-0 text-blue-500 text-lg font-bold">
  //               Examples &rarr;
  //             </h3>
  //             <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900">
  //               Find other example boilerplates on the Next.js GitHub.
  //             </p>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return null;
  // }

  const [isLoading, setLoading] = useState(true);
  const [feed, setFeed] = useState();
  const [articles, setArticles] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const url = baseRSSUrl + feedUrl;
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setFeed(data.feed);
        setArticles(data.items);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchArticles();
  }, [])

  if (isLoading) {
    return (
      <Loading />
    );
  } else if (isError) {
    return (
      <Error />
    );
  } else if (feed != null) {
    return (
      <Articles feed={feed} articles={articles} />
    );
  } else {
    return null;
  }
}

export default Home;
