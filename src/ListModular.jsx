import { useState } from "react";
import spotlight from "./art/spotlight.png";
import { listL } from "./dataJohn.js";
import { listR } from "./dataDom.js";
import "./all.css";

export function ListModular() {
    const [matchImage, setMatchImage] = useState(null);

    const [active, setActive] = useState("");

    const [dummy, setDummy] = useState("");
    
    return (
        <div className="list-modular">
            <div className="single-list">
                <div className="list-name">{listL[0][0]}</div>
                <button 
                    className={"list-item " + listL[1][3]}
                    onClick={() => {
                        if (listL[1][3] == "hide") {
                            listL[1][3] = "unhide";
                            setDummy("11");
                            if (matchImage != listL[1][1]) { setMatchImage(listL[1][1]) };
                            setActive(listL[1][2]);
                        }
                        else {
                            listL[1][3] = "hide";
                            setDummy("12");
                            if (matchImage == listL[1][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[1][2]).valueOf())
                        && (listL[1][3] == "unhide")
                        ? "active-left"
                        : "" }
                >
                    1. {listL[1][0]}
                </button>
                <button 
                    className={"list-item " + listL[2][3]}
                    onClick={() => {
                        if (listL[2][3] == "hide") {
                            listL[2][3] = "unhide";
                            setDummy("21");
                            if (matchImage != listL[2][1]) { setMatchImage(listL[2][1]) };
                            setActive(listL[2][2]);
                        }
                        else {
                            listL[2][3] = "hide";
                            setDummy("22");
                            if (matchImage == listL[2][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[2][2]).valueOf())
                        && (listL[2][3] == "unhide")
                        ? "active-left"
                        : "" }
                >
                    2. {listL[2][0]}
                </button>
                <button 
                    className={"list-item " + listL[3][3]}
                    onClick={() => {
                        if (listL[3][3] == "hide") {
                            listL[3][3] = "unhide";
                            setDummy("31");
                            if (matchImage != listL[3][1]) { setMatchImage(listL[3][1]) };
                            setActive(listL[3][2]);
                        }
                        else {
                            listL[3][3] = "hide";
                            setDummy("32");
                            if (matchImage == listL[3][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[3][2]).valueOf())
                        && (listL[3][3] == "unhide")
                        ? "active-left"
                        : "" }
                >
                    3. {listL[3][0]}
                </button>
                <button 
                    className={"list-item " + listL[4][3]}
                    onClick={() => {
                        if (listL[4][3] == "hide") {
                            listL[4][3] = "unhide";
                            setDummy("41");
                            if (matchImage != listL[4][1]) { setMatchImage(listL[4][1]) };
                            setActive(listL[4][2]);
                        }
                        else {
                            listL[4][3] = "hide";
                            setDummy("42");
                            if (matchImage == listL[4][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[4][2]).valueOf())
                        && (listL[4][3] == "unhide")
                        ? "active-left"
                        : "" }
                >
                    4. {listL[4][0]}
                </button>
                <button 
                    className={"list-item " + listL[5][3]}
                    onClick={() => {
                        if (listL[5][3] == "hide") {
                            listL[5][3] = "unhide";
                            setDummy("51");
                            if (matchImage != listL[5][1]) { setMatchImage(listL[5][1]) };
                            setActive(listL[5][2]);
                        }
                        else {
                            listL[5][3] = "hide";
                            setDummy("52");
                            if (matchImage == listL[5][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[5][2]).valueOf())
                        && (listL[5][3] == "unhide")
                        ? "active-left"
                        : "" }
                >
                    5. {listL[5][0]}
                </button>
            </div>

            <div className="featured-match">
                { matchImage == null && dummy.length >= 0
                    ? <img id="null-image" />
                    : <img id="featured-image" src={matchImage} onClick={() => { setMatchImage(null); setActive("") }}  />
                }
                <img id="spotlight" src={spotlight} />
            </div>

            <div className="single-list">
                <div className="list-name">{listR[0][0]}</div>
                <button 
                    className={"list-item " + listR[1][3]}
                    onClick={() => {
                        if (listR[1][3] == "hide") {
                            listR[1][3] = "unhide";
                            setDummy("13");
                            if (matchImage != listR[1][1]) { setMatchImage(listR[1][1]) };
                            setActive(listR[1][2]);
                        }
                        else {
                            listR[1][3] = "hide";
                            setDummy("14");
                            if (matchImage == listR[1][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[1][2]).valueOf())
                        && (listR[1][3] == "unhide")
                        ? "active-right"
                        : "" }
                >
                    1. {listR[1][0]}
                </button>
                <button 
                    className={"list-item " + listR[2][3]}
                    onClick={() => {
                        if (listR[2][3] == "hide") {
                            listR[2][3] = "unhide";
                            setDummy("23");
                            if (matchImage != listR[2][1]) { setMatchImage(listR[2][1]) };
                            setActive(listR[2][2]);
                        }
                        else {
                            listR[2][3] = "hide";
                            setDummy("24");
                            if (matchImage == listR[2][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[2][2]).valueOf())
                        && (listR[2][3] == "unhide")
                        ? "active-right"
                        : "" }
                >
                    2. {listR[2][0]}
                </button>
                <button 
                    className={"list-item " + listR[3][3]}
                    onClick={() => {
                        if (listR[3][3] == "hide") {
                            listR[3][3] = "unhide";
                            setDummy("33");
                            if (matchImage != listR[3][1]) { setMatchImage(listR[3][1]) };
                            setActive(listR[3][2]);
                        }
                        else {
                            listR[3][3] = "hide";
                            setDummy("34");
                            if (matchImage == listR[3][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[3][2]).valueOf())
                        && (listR[3][3] == "unhide")
                        ? "active-right"
                        : "" }
                >
                    3. {listR[3][0]}
                </button>
                <button 
                    className={"list-item " + listR[4][3]}
                    onClick={() => {
                        if (listR[4][3] == "hide") {
                            listR[4][3] = "unhide";
                            setDummy("43");
                            if (matchImage != listR[4][1]) { setMatchImage(listR[4][1]) };
                            setActive(listR[4][2]);
                        }
                        else {
                            listR[4][3] = "hide";
                            setDummy("44");
                            if (matchImage == listR[4][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[4][2]).valueOf())
                        && (listR[4][3] == "unhide")
                        ? "active-right"
                        : "" }
                >
                    4. {listR[4][0]}
                </button>
                <button 
                    className={"list-item " + listR[5][3]}
                    onClick={() => {
                        if (listR[5][3] == "hide") {
                            listR[5][3] = "unhide";
                            setDummy("53");
                            if (matchImage != listR[5][1]) { setMatchImage(listR[5][1]) };
                            setActive(listR[5][2]);
                        }
                        else {
                            listR[5][3] = "hide";
                            setDummy("54");
                            if (matchImage == listR[5][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[5][2]).valueOf())
                        && (listR[5][3] == "unhide")
                        ? "active-right"
                        : "" }
                >
                    5. {listR[5][0]}
                </button>
            </div>
        </div>
    )
}
