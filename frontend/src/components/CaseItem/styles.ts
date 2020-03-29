import styled from "styled-components";

export const Container = styled.li`
  padding: 25px;
  padding-bottom: 5px;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #555;
    line-height: 19px;
    margin: 10px 0px 20px;
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;

    div {
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 10px;
        line-height: 18px;
      }

      span {
        color: #555;
        line-height: 19px;
      }
    }

    button {
      border: 0;
      background: none;
    }
  }
`;
