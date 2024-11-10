import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { StyledWrapper } from "./components/FlexWrapper";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { Contacts } from "./layout/section/contacts/Contacts";
import { AboutMe } from "./layout/section/aboutMe/AboutMe";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Main/>
      <AboutMe />
      <Skills/>
      <Works />
      <Contacts/>
      <Footer />
    </StyledWrapper>
  );
}

export default App;


