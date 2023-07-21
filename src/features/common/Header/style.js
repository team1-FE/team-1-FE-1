import { styled } from "styled-components";

export const HeaderCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StHeaderNav = styled.nav`
  position: relative;
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;

  #nav-logo {
    width: 240px;
    height: 34px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  #nav-user {
    position: absolute;
    right: 10%;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    .nav-link {
      width: 50px;
      height: 50px;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-link:first-child {
      border-right: 1px solid #333;
    }
  }
`;

export const HeaderCatagoryBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #333;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const HeaderCatagoryList = styled.ul`
  display: flex;
`;

export const HeaderCatagoryItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 10px;
  margin: 0 10px;
  &:hover {
    color: #ff6b00;
  }
`;