import styled from "styled-components";
import MediaContainer from "../MediaContainer";

const StyledMediaContainer = styled(MediaContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 10rem);
  width: 100vw;

  & img {
    height: auto;
    width: 35%;
    border-radius: 1rem;
  }

  & .explanation {
    position: relative;
    height: max-content;
    width: 60%;
    margin-top: 2rem;
    text-align: center;

    font-size: 1.6rem;
    color: #fefefe;
  }
`;

export default StyledMediaContainer;
