import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { Contacts } from "./layout/section/contacts/Contacts";
import { AboutMe } from "./layout/section/aboutMe/AboutMe";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main/>
      <AboutMe />
      <Works />
      <Skills/>
      <Contacts/>
      <Footer />
    </>
  );
}

export default App;


