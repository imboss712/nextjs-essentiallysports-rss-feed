import React from "react";

const Article = ({ article }) => {
    const { title, pubDate, link, author, description, categories, enclosure } = article;
    return (
        <div className="m-4 p-5 border border-gray-400 hover:border-blue-500">
            <a
                target="_blank"
                href={link}
                className="text-left no-underline text-gray-800 flex flex-nowrap flex-col"
            >
                <div style={{ alignSelf: 'center' }}>
                    <img
                        src={enclosure.link}
                        alt={title}
                    />
                </div>

                <div>
                    <p className="pl-1 mt-2 mb-3 text-m text-gray-700 underline"><strong>{categories[0]}</strong></p>
                    <h3 className="m-0 text-black-500 text-lg font-bold break-words">{title}</h3>
                    <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-900 break-words hidden lg:block md:block">{description}</p>

                    <ul className="flex justify-between mt-2 mb-1 pt-2">
                        <li className="flex">
                            <p className="text-m text-red-700">{author}</p>
                        </li>

                        <li className="flex">
                            <p className="text-m text-gray-900">{new Date(pubDate).toDateString()}</p>
                        </li>
                    </ul>
                </div>
            </a>
        </div>
    );
}

export default Article;
