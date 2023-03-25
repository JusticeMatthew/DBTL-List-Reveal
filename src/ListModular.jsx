import { useState } from "react";
import wmlogo from "./art/wmlogo.png";
import spotlight from "./art/spotlight.png";
// import { J1, J2, J3, J4, J5 } from "./testdataJohn.js";
// import { D1, D2, D3, D4, D5 } from "./testdataDom.js";
import { J1, J2, J3, J4, J5 } from "./dataJohn.js";
import { D1, D2, D3, D4, D5 } from "./dataDom.js";
import "./all.css";

export function ListModular() {
    const [openingScreenVisible, setOpeningScreenVisible] = useState("YES");

    const [styleJ1, setStyleJ1] = useState("hide");
    const [styleJ2, setStyleJ2] = useState("hide");
    const [styleJ3, setStyleJ3] = useState("hide");
    const [styleJ4, setStyleJ4] = useState("hide");
    const [styleJ5, setStyleJ5] = useState("hide");

    const [styleD1, setStyleD1] = useState("hide");
    const [styleD2, setStyleD2] = useState("hide");
    const [styleD3, setStyleD3] = useState("hide");
    const [styleD4, setStyleD4] = useState("hide");
    const [styleD5, setStyleD5] = useState("hide");

    const [matchImage, setMatchImage] = useState(null);

    const [active, setActive] = useState("");

    const makeListsVisible = () => { setOpeningScreenVisible("") }
    
    const changeStyleJ1 = () => {
        if (styleJ1 == "hide") {
            setStyleJ1("unhide");
            if (matchImage != J1[1]) { setMatchImage(J1[1]) };
            setActive(J1[2])
        }
        else {
            setStyleJ1("hide");
            if (matchImage == J1[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleJ2 = () => {
        if (styleJ2 == "hide") {
            setStyleJ2("unhide");
            if (matchImage != J2[1]) { setMatchImage(J2[1]) };
            setActive(J2[2])
        }
        else {
            setStyleJ2("hide");
            if (matchImage == J2[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleJ3 = () => {
        if (styleJ3 == "hide") {
            setStyleJ3("unhide");
            if (matchImage != J3[1]) { setMatchImage(J3[1]) };
            setActive(J3[2])
        }
        else {
            setStyleJ3("hide");
            if (matchImage == J3[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleJ4 = () => {
        if (styleJ4 == "hide") {
            setStyleJ4("unhide");
            if (matchImage != J4[1]) { setMatchImage(J4[1]) };
            setActive(J4[2])
        }
        else {
            setStyleJ4("hide");
            if (matchImage == J4[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleJ5 = () => {
        if (styleJ5 == "hide") {
            setStyleJ5("unhide");
            if (matchImage != J5[1]) { setMatchImage(J5[1]) };
            setActive(J5[2])
        }
        else {
            setStyleJ5("hide");
            if (matchImage == J5[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleD1 = () => {
        if (styleD1 == "hide") {
            setStyleD1("unhide");
            if (matchImage != D1[1]) { setMatchImage(D1[1]) };
            setActive(D1[2])
        }
        else {
            setStyleD1("hide");
            if (matchImage == D1[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleD2 = () => {
        if (styleD2 == "hide") {
            setStyleD2("unhide");
            if (matchImage != D2[1]) { setMatchImage(D2[1]) };
            setActive(D2[2])
        }
        else {
            setStyleD2("hide");
            if (matchImage == D2[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleD3 = () => {
        if (styleD3 == "hide") {
            setStyleD3("unhide");
            if (matchImage != D3[1]) { setMatchImage(D3[1]) };
            setActive(D3[2])
        }
        else {
            setStyleD3("hide");
            if (matchImage == D3[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleD4 = () => {
        if (styleD4 == "hide") {
            setStyleD4("unhide");
            if (matchImage != D4[1]) { setMatchImage(D4[1]) };
            setActive(D4[2])
        }
        else {
            setStyleD4("hide");
            if (matchImage == D4[1]) { setMatchImage(null); setActive("") }
        }
    }

    const changeStyleD5 = () => {
        if (styleD5 == "hide") {
            setStyleD5("unhide");
            if (matchImage != D5[1]) { setMatchImage(D5[1]) };
            setActive(D5[2])
        }
        else {
            setStyleD5("hide");
            if (matchImage == D5[1]) { setMatchImage(null); setActive("") }
        }
    }

    const resetImage = () => { setMatchImage(); setActive("") }

    return (
        <div>

            { openingScreenVisible == "YES"
                ?
                <div className="open-modular">
                    <img id="open-logo" src={wmlogo} onClick={makeListsVisible} />
                </div>
                :
                <div className="list-modular">
                    <div className="single-list">
                        <div className="list-name">John's List:</div>
                        <button
                            className="list-item"
                            id={styleJ1}
                            onClick={changeStyleJ1}
                            style={ (String(active).valueOf() == String(J1[2]).valueOf())
                                && (styleJ1 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: "-0.75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", minHeight: "12vh" }
                                : {  } }
                        >
                            1. {J1[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleJ2}
                            onClick={changeStyleJ2}
                            style={ (String(active).valueOf() == String(J2[2]).valueOf())
                                && (styleJ2 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: "-0.75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", minHeight: "12vh" }
                                : {  } }
                        >
                            2. {J2[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleJ3}
                            onClick={changeStyleJ3}
                            style={ (String(active).valueOf() == String(J3[2]).valueOf())
                                && (styleJ3 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: "-0.75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", minHeight: "12vh" }
                                : {  } }
                        >
                            3. {J3[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleJ4}
                            onClick={changeStyleJ4}
                            style={ (String(active).valueOf() == String(J4[2]).valueOf())
                                && (styleJ4 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: "-0.75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", minHeight: "12vh" }
                                : {  } }
                        >
                            4. {J4[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleJ5}
                            onClick={changeStyleJ5}
                            style={ (String(active).valueOf() == String(J5[2]).valueOf())
                                && (styleJ5 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: "-0.75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", minHeight: "12vh" }
                                : {  } }
                        >
                            5. {J5[0]}
                        </button>
                    </div>

                    <div className="featured-match">
                        { matchImage == null
                            ? <img id="null-image" />
                            : <img id="featured-image" src={matchImage} onClick={resetImage}  />
                        }
                        <img id="spotlight" src={spotlight} />
                    </div>

                    <div className="single-list">
                        <div className="list-name">Dom's List:</div>
                        <button
                            className="list-item"
                            id={styleD1}
                            onClick={changeStyleD1}
                            style={ (String(active).valueOf() == String(D1[2]).valueOf())
                                && (styleD1 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: ".75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", marginLeft: "-1.5vw", minHeight: "12vh" }
                                : {  } }
                        >
                            1. {D1[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleD2}
                            onClick={changeStyleD2}
                            style={ (String(active).valueOf() == String(D2[2]).valueOf())
                                && (styleD2 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: ".75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", marginLeft: "-1.5vw", minHeight: "12vh" }
                                : {  } }
                        >
                            2. {D2[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleD3}
                            onClick={changeStyleD3}
                            style={ (String(active).valueOf() == String(D3[2]).valueOf())
                                && (styleD3 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: ".75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", marginLeft: "-1.5vw", minHeight: "12vh" }
                                : {  } }
                        >
                            3. {D3[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleD4}
                            onClick={changeStyleD4}
                            style={ (String(active).valueOf() == String(D4[2]).valueOf())
                                && (styleD4 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: ".75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", marginLeft: "-1.5vw", minHeight: "12vh" }
                                : {  } }
                        >
                            4. {D4[0]}
                        </button>
                        <button
                            className="list-item"
                            id={styleD5}
                            onClick={changeStyleD5}
                            style={ (String(active).valueOf() == String(D5[2]).valueOf())
                                && (styleD5 == "unhide")
                                ? { fontSize: "3.75vh", color: "darkred", backgroundColor: "lightyellow", textShadow: "1px 1px black", boxShadow: ".75vh 0.5vh 1.25vh black", width: "23vw", paddingLeft: "1vw", paddingRight: "1vw", marginLeft: "-1.5vw", minHeight: "12vh" }
                                : {  } }
                        >
                            5. {D5[0]}
                        </button>
                    </div>
                </div>
            }
        
        </div>
    )
}
