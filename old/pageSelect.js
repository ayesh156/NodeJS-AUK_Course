import About from "./Http Modules/pages/about.js";
import Contact from "./Http Modules/pages/contact.js";
import { log } from "node:console";
import Home from "./Http Modules/pages/home.js";
import NotFound from "./Http Modules/pages/not-found.js";
import {URL} from 'node:url';

export const pageSelect = (url, res) => {

    const urlParams = new URL(`http://localhost:4000${url}`);
    log(urlParams.searchParams);

    if(url === "/"){
        res.end(Home());
    }else if(url === "/contact"){
        res.end(Contact());
    }else if(url === "/about"){
        res.end(About());
    }else {
        res.end(NotFound());
    }
}