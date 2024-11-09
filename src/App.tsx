import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { StyledWrapper } from "./components/FlexWrapper";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Main/>
      <Skills/>
      <Works />
    </StyledWrapper>
  );
}

export default App;


