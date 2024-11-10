import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { StyledWrapper } from "./components/FlexWrapper";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { Contacts } from "./layout/section/contacts/Contacts";
import { AboutMe } from "./layout/section/aboutMe/AboutMe";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Main/>
      <AboutMe />
      <Skills/>
      <Works />
      <Contacts/>
    </StyledWrapper>
  );
}

export default App;


