import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { StyledFlexWrapper } from "./components/FlexWrapper";

function App() {
  return (
    <StyledFlexWrapper>
      <Header />
      <Main/>
    </StyledFlexWrapper>
  );
}

export default App;


