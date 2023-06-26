import React from 'react';
import LegendRed from "../../assets/legend.png";
import LegendBlack from "../../assets/legendblack.png";
import { Parallax } from "react-parallax";
import "./ParallaxBg.scss"

const ParallaxBg = ({Background}) => {
    const ImageBg = Background === "red" ? LegendBlack : LegendRed;

    return (
        <>
            <Parallax
                blur={0}
                bgImage={ImageBg}
                style={{ backgroundSize: "100%" }}
                strength={300}
            >
                <div style={{ height: "100vh" }}>
                    <div className="loopText">
                        <svg
                            className="svgwave"
                            xmlns="http://www.w3.org/2000/svg"
                            width="301"
                            height="21"
                            viewBox="0 0 301 21"
                        >
                            <path
                                id="wavepath"
                                d="M 0 59 C 164 -128 290 41 459 63 M 458 62 C 304.6667 60.6667 124 448 -2 58"
                            ></path>

                            <text textAnchor="middle">
                                <textPath className="my-text" side="left" href="#wavepath">
                                    <animate
                                        attributeName="startOffset"
                                        from="-100%"
                                        to="150%"
                                        begin="0s"
                                        dur="10s"
                                        repeatCount="indefinite"
                                        values="10%;0%"
                                    ></animate>
                                    HI THERE! I'M SAZKY A CREATIVE ART DIRECTOR, BASED IN SPAIN,
                                    FOLLOWING MY PASSIONS THROUGH ART, ADVERTISING AND
                                    CREATIVITY. ///
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default ParallaxBg;
