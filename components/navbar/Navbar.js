import Link from "next/link";
import React from "react";
import css from "styled-jsx/css";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <div className="logo"></div>
        <div className="links">
          <Link href="/">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="social"></div>
        <a href="https://github.com/sumirkatt">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sumirkat/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/sumirkat">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/sumi-katakam-03198b230/">
          <FaLinkedin />
        </a>
      </nav>
    </>
  );
}

const styles = css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;
  }
  .logo {
    margin-right: auto;
  }
  .links {
    display: flex;
    margin-right: 40px;
  }
  a {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.2s;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.8);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.04);
  }
  .social a {
    font-size: 28px;
  }
`;

export default Navbar;
