import styled from 'styled-components';

export const Container = styled.div`
  
  background: #c72828;
  padding: 3rem 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0rem 0rem 7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
