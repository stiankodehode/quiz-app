import { HashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { AppContainer } from "./components/styled";

function App() {
    return (
        <HashRouter>
            <AppContainer>
                <LandingPage />
            </AppContainer>
        </HashRouter>
    );
}

export default App;
