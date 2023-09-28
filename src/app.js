import React, { useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import WhiteWebSdk from "white-web-sdk";

function App() {
    useEffect(() => {
        var RoomPhase = require("white-web-sdk").RoomPhase;
console.log(RoomPhase.Connected);
    }, []);

    return (
        <div className="App">
            <div style={{ borderWidth: "1px", borderColor: "#333" }}>
                <SignatureCanvas  canvasProps={{   }}   />
                {/*<SignatureCanvas.default canvasProps={{}}/>;*/}
            </div>
        </div>
    );
}
export default App;
