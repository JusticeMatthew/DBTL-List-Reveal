import { useState } from "react";
import spotlight from "./art/spotlight.png";
import { listL } from "./dataJohn.js";
import { listR } from "./dataDom.js";
import "./all.css";

export function ListModular() {
    const [matchImage, setMatchImage] = useState(null);
    const [active, setActive] = useState("");
    const [dummy, setDummy] = useState("");

    function ListSingle(arr, L_R) {
        return (
            <div className="single-list">
                <div className="list-name">{arr[0][0]}</div>
                {arr.slice(1, arr.length).map(item => {
                    const i = arr.indexOf(item).toString();
                    return (
                        <button 
                            className={"list-item " + item[3]}
                            onClick={() => {
                                if (item[3] == "hide") {
                                    item[3] = "unhide";
                                    setDummy(i.concat("a"));
                                    if (matchImage != item[1]) { setMatchImage(item[1]) };
                                    setActive(item[2]);
                                } else {
                                    item[3] = "hide";
                                    setDummy(i.concat("b"));
                                    if (matchImage == item[1]) { setMatchImage(null); setActive("") }
                                }
                            }}
                            id={ (String(active).valueOf() == String(item[2]).valueOf())
                                && (item[3] == "unhide") && dummy.length >= 0
                                ? ((L_R == "L") ? "active-left" : "active-right")
                                : "" }
                        >
                            {i}. {item[0]}
                        </button>
                    )
                }) }
            </div>
        )
    }
    
    return (
        <div className="list-modular">
            { ListSingle(listL, "L") }
            <div className="featured-match">
                { matchImage == null && dummy.length >= 0
                    ? <img id="null-image" />
                    : <img id="featured-image" src={matchImage} onClick={() => { setMatchImage(null); setActive("") }}  />
                }
                <img id="spotlight" src={spotlight} />
            </div>
            { ListSingle(listR, "R") }            
        </div>
    )
}
