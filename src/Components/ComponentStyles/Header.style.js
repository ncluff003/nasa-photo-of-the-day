import styled from "styled-components";
import Header from "../Header";

const StyledHeader = styled(Header)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  min-height: 5rem;
  width: 100vw;
  padding: 2rem 4rem;
  background-color: #222222;
  border-bottom: 0.25rem groove #fefefeaa;
  margin-bottom: 2.8rem;

  & p {
    position: relative;
    display: inline-block;
    height: max-content;
    width: max-content;
    font-size: 3rem;
    color: #fefefe;
  }
`;

export default StyledHeader;
