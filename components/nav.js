import React from "react";

const Nav = ({ feed }) => {
  const { title, link, description, image } = feed;

  return (
    <nav className="text-center">
      <ul className="flex justify-between px-4 my-4 py-1">
        <li className="flex px-2 py-1">
          <a target="_blank" href={link} className="flex no-underline">
            <img src={image} width="40" height="32" className="mr-2" />
            <section>
              <p className="text-black-500 font-bold text-m">{title}</p>
              <p className="text-gray-900 text-sm">{description}</p>
            </section>
          </a>
        </li>

        <li className="flex px-2 py-1">
          <a target="_blank" href="https://github.com/imboss712" className="text-blue-500	no-underline text-m font-bold">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
