import styled from "styled-components";
import DatePicker from "../DatePicker";

const StyledDatePicker = styled(DatePicker)`
  position: relative;
  height: max-content;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .date-picker-label {
    position: relative;
    margin-right: 2rem;
    font-size: 2.6rem;
    color: #ffd700;
  }

  & #date {
    position: relative;
    padding: 1rem;
    height: max-content;
    width: max-content;
    font-size: 1.6rem;
    background-color: #fefefe55;
    border: 0.2rem solid #fefefeaa;
    border-radius: 0.5rem;
    color: #fefefeaa;
  }
`;

export default StyledDatePicker;
