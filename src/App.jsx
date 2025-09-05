import Header from "./components/header/Header"
import Button from '@mui/material/Button';
import SubHeader from "./components/subHeader/SubHeader";
import SectionAbove from "./components/sectionAbove/SectionAbove";
import ActionHeader from "./components/ActionHeader/ActionHeader";
import SectionBelow from "./components/sectionBelow/SectionBelow";

function App() {

  return (
    <div className="home__container">
      <header>
        <Header />
        <SubHeader />
      </header>
      <main>
        <section className="home__section1">
          <SectionAbove />
        </section>
        <section className="home__actions">
          <ActionHeader />
        </section>
        <section className="home__section2">
          <SectionBelow />
        </section>
      </main>

    </div>
  )
}

export default App
