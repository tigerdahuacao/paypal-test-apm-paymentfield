import LinkA from "./Link/LinkA";
import LinkB from "./Link/LinkB";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.App}>
            <LinkA />
            <LinkB />
        </div>
    );
}

export default App;
