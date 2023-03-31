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
                {listL.slice(1, listL.length).map(item => {
                    const i = listL.indexOf(item).toString();
                    return (
                        <button 
                            className={"list-item " + item[3]}
                            onClick={() => {
                                if (item[3] == "hide") {
                                    item[3] = "unhide";
                                    setDummy(i.concat("a"));
                                    if (matchImage != item[1]) { setMatchImage(item[1]) };
                                    setActive(item[2]);
                                }
                                else {
                                    item[3] = "hide";
                                    setDummy(i.concat("b"));
                                    if (matchImage == item[1]) { setMatchImage(null); setActive("") }
                                }
                            }}
                            id={ (String(active).valueOf() == String(item[2]).valueOf())
                                && (item[3] == "unhide")
                                ? "active-left"
                                : "" }
                        >
                            {i}. {item[0]}
                        </button>
                    )
                }) }
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
                {listR.slice(1, listR.length).map(item => {
                    const i = listR.indexOf(item).toString();
                    return (
                        <button 
                            className={"list-item " + item[3]}
                            onClick={() => {
                                if (item[3] == "hide") {
                                    item[3] = "unhide";
                                    setDummy(i.concat("c"));
                                    if (matchImage != item[1]) { setMatchImage(item[1]) };
                                    setActive(item[2]);
                                }
                                else {
                                    item[3] = "hide";
                                    setDummy(i.concat("d"));
                                    if (matchImage == item[1]) { setMatchImage(null); setActive("") }
                                }
                            }}
                            id={ (String(active).valueOf() == String(item[2]).valueOf())
                                && (item[3] == "unhide")
                                ? "active-right"
                                : "" }
                        >
                            {i}. {item[0]}
                        </button>
                    )
                }) }
            </div>
        </div>
    )
}
