import styled from "styled-components";
import Modal from "../Modal";

const StyledModal = styled(Modal)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & img {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;

export default StyledModal;
