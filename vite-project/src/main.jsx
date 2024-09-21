import {createRoot} from "react-dom/client";
import {App as NewApp} from "./app";
const reactProRoot=createRoot(document.getElementById("root"));
reactProRoot.render(
    <NewApp/>
);