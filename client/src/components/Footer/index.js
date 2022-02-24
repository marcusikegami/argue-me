import React from "react";


function Footer() {
    return (
        <footer className="container text-center py-3">
         
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/marcusikegami/argue-me" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/github-logo.png')} alt="github link" />
          </a>
          <h3 className="text-dark ">&copy; 2021 by Marcus H. Ikegami </h3>
          <p>ArgueMe is a work in progress, please see the GitHub repo to contribute or contact me with issues</p>
          
        </footer>
    );
}

export default Footer;