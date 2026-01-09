import "./styles/leo-lov-styling.module.css";
import { MainNavByMariePierreLessard } from "./components/main-nav/main-nav";
import { GlobalHeaderByMariePierreLessard } from "./components/g-header/g-header";
import { MainByMariePierreLessard } from "./components/main-el/main-el";
import { GlobalFooterByMariePierreLessard } from "./components/g-footer/g-footer";

function App() {

    return (
        <>
            <MainNavByMariePierreLessard />
            <GlobalHeaderByMariePierreLessard />
            <MainByMariePierreLessard />
            <GlobalFooterByMariePierreLessard />
        </>
    )
};

export default App;
