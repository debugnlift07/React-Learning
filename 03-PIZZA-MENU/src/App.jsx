import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";

function App() {
  return (
    <>
      <div className="container">
        <AppHeader />
        <AppMenu />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
