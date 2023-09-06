import React from "react";
import SignatureCanvas from "react-signature-canvas";

function App() {
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
