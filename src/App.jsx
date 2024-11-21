import "./css/App.css";
import {Route, Routes} from "react-router-dom";
import {Auth} from "./components/Auth";
import {Loader} from "./components/Loader";

const App = () => {
    return (
        <div className="limiter">
            <Loader />
            <div
                className="container-login100"
                style={{backgroundImage: "url(/images/bg.jpg)"}}
            >
                <Routes>
                    <Route path="/" element={<Auth />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
