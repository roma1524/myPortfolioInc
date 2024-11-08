import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { StyledWrapper } from "./components/FlexWrapper";
import { Skills } from "./layout/section/skills/Skills";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Main/>
      <Skills/>
    </StyledWrapper>
  );
}

export default App;


