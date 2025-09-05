import Header from "./components/header/Header"
import SubHeader from "./components/subHeader/SubHeader";
import Dashboard from "./components/dashboard/Dashboard";

function App() {

  return (
    <div className="home__container">
      <header>
        <Header />
        <SubHeader />
      </header>
      <main>
        <Dashboard />
      </main>

    </div>
  )
}

export default App
