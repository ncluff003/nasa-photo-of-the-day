import styled from "styled-components";
import Title from "../Title";

const StyledTitle = styled(Title)`
  position: relative;
  height: max-content;
  min-height: 5rem;
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & .title {
    position: relative;
    height: max-content;
    width: 33%;
    font-size: 2.6rem;
    color: #ffd700;
  }

  & .help-text {
    position: relative;
    height: max-content;
    width: 30%;
    font-size: 1.4rem;
    color: #fefefe;
  }
`;

export default StyledTitle;
