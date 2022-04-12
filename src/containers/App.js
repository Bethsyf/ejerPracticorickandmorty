import List from "../components/List";
import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: #121227;
`

function App() {
  return (
    <StyledContainer>
      <List />
    </StyledContainer>
  );
}

export default App;