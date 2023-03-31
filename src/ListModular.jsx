import { useState } from "react";
import spotlight from "./art/spotlight.png";
import { listL } from "./dataJohn.js";
import { listR } from "./dataDom.js";
import "./all.css";

export function ListModular() {
    const [styleL1, setStyleL1] = useState("hide");
    const [styleL2, setStyleL2] = useState("hide");
    const [styleL3, setStyleL3] = useState("hide");
    const [styleL4, setStyleL4] = useState("hide");
    const [styleL5, setStyleL5] = useState("hide");

    const [styleR1, setStyleR1] = useState("hide");
    const [styleR2, setStyleR2] = useState("hide");
    const [styleR3, setStyleR3] = useState("hide");
    const [styleR4, setStyleR4] = useState("hide");
    const [styleR5, setStyleR5] = useState("hide");

    const [matchImage, setMatchImage] = useState(null);

    const [active, setActive] = useState("");

    return (
        <div className="list-modular">
            <div className="single-list">
                <div className="list-name">{listL[0][0]}</div>
                <button 
                    className={"list-item " + styleL1}
                    onClick={() => {
                        if (styleL1 == "hide") {
                            setStyleL1("unhide");
                            if (matchImage != listL[1][1]) { setMatchImage(listL[1][1]) };
                            setActive(listL[1][2])
                        }
                        else {
                            setStyleL1("hide");
                            if (matchImage == listL[1][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[1][2]).valueOf())
                        && (styleL1 == "unhide")
                        ? "active-left"
                        : "" }
                >
                    1. {listL[1][0]}
                </button>
                <button
                    className={"list-item " + styleL2}
                    onClick={() => {
                        if (styleL2 == "hide") {
                            setStyleL2("unhide");
                            if (matchImage != listL[2][1]) { setMatchImage(listL[2][1]) };
                            setActive(listL[2][2])
                        }
                        else {
                            setStyleL2("hide");
                            if (matchImage == listL[2][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[2][2]).valueOf())
                        && (styleL2 == "unhide")
                        ? "active-left"
                        : "" }
                >
                    2. {listL[2][0]}
                </button>
                <button
                    className={"list-item " + styleL3}
                    onClick={() => {
                        if (styleL3 == "hide") {
                            setStyleL3("unhide");
                            if (matchImage != listL[3][1]) { setMatchImage(listL[3][1]) };
                            setActive(listL[3][2])
                        }
                        else {
                            setStyleL3("hide");
                            if (matchImage == listL[3][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[3][2]).valueOf())
                        && (styleL3 == "unhide")
                        ? "active-left"
                        : "" }
                >
                    3. {listL[3][0]}
                </button>
                <button
                    className={"list-item " + styleL4 }
                    onClick={() => {
                        if (styleL4 == "hide") {
                            setStyleL4("unhide");
                            if (matchImage != listL[4][1]) { setMatchImage(listL[4][1]) };
                            setActive(listL[4][2])
                        }
                        else {
                            setStyleL4("hide");
                            if (matchImage == listL[4][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[4][2]).valueOf())
                        && (styleL4 == "unhide")
                        ? "active-left"
                        : "" }
                >
                    4. {listL[4][0]}
                </button>
                <button
                    className={"list-item " + styleL5}
                    onClick={() => {
                        if (styleL5 == "hide") {
                            setStyleL5("unhide");
                            if (matchImage != listL[5][1]) { setMatchImage(listL[5][1]) };
                            setActive(listL[5][2])
                        }
                        else {
                            setStyleL5("hide");
                            if (matchImage == listL[5][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listL[5][2]).valueOf())
                        && (styleL5 == "unhide")
                        ? "active-left"
                        : "" }
                >
                    5. {listL[5][0]}
                </button>
            </div>

            <div className="featured-match">
                { matchImage == null
                    ? <img id="null-image" />
                    : <img id="featured-image" src={matchImage} onClick={() => { setMatchImage(null); setActive("") }}  />
                }
                <img id="spotlight" src={spotlight} />
            </div>

            <div className="single-list">
                <div className="list-name">Dom's List:</div>
                <button
                    className={"list-item " + styleR1 }
                    onClick={() => {
                        if (styleR1 == "hide") {
                            setStyleR1("unhide");
                            if (matchImage != listR[1][1]) { setMatchImage(listR[1][1]) };
                            setActive(listR[1][2])
                        }
                        else {
                            setStyleR1("hide");
                            if (matchImage == listR[1][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[1][2]).valueOf())
                        && (styleR1 == "unhide")
                        ? "active-right"
                        : "" }
                >
                    1. {listR[1][0]}
                </button>
                <button
                    className={"list-item " + styleR2}
                    onClick={() => {
                        if (styleR2 == "hide") {
                            setStyleR2("unhide");
                            if (matchImage != listR[2][1]) { setMatchImage(listR[2][1]) };
                            setActive(listR[2][2])
                        }
                        else {
                            setStyleR2("hide");
                            if (matchImage == listR[2][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[2][2]).valueOf())
                        && (styleR2 == "unhide")
                        ? "active-right"
                        : "" }
                >
                    2. {listR[2][0]}
                </button>
                <button
                    className={"list-item " + styleR3}
                    onClick={() => {
                        if (styleR3 == "hide") {
                            setStyleR3("unhide");
                            if (matchImage != listR[3][1]) { setMatchImage(listR[3][1]) };
                            setActive(listR[3][2])
                        }
                        else {
                            setStyleR3("hide");
                            if (matchImage == listR[3][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[3][2]).valueOf())
                        && (styleR3 == "unhide")
                        ? "active-right"
                        : "" }
                >
                    3. {listR[3][0]}
                </button>
                <button
                    className={"list-item " + styleR4}
                    onClick={() => {
                        if (styleR4 == "hide") {
                            setStyleR4("unhide");
                            if (matchImage != listR[4][1]) { setMatchImage(listR[4][1]) };
                            setActive(listR[4][2])
                        }
                        else {
                            setStyleR4("hide");
                            if (matchImage == listR[4][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[4][2]).valueOf())
                        && (styleR4 == "unhide")
                        ? "active-right"
                        : "" }
                >
                    4. {listR[4][0]}
                </button>
                <button
                    className={"list-item " + styleR5}
                    onClick={() => {
                        if (styleR5 == "hide") {
                            setStyleR5("unhide");
                            if (matchImage != listR[5][1]) { setMatchImage(listR[5][1]) };
                            setActive(listR[5][2])
                        }
                        else {
                            setStyleR5("hide");
                            if (matchImage == listR[5][1]) { setMatchImage(null); setActive("") }
                        }
                    }}
                    id={ (String(active).valueOf() == String(listR[5][2]).valueOf())
                        && (styleR5 == "unhide")
                        ? "active-right"
                        : "" }
                >
                    5. {listR[5][0]}
                </button>
            </div>
        </div>
    )
}
