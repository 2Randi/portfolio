import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Networks and Systems Engineer",
                    "DevOps junior"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
            }}
        />
    );
}

export default Typing;
