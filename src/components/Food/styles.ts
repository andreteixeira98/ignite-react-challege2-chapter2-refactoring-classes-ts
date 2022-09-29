import styled, { css } from 'styled-components';

interface ContainerProps{
  available:boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 0.5rem;

  width: 22rem;
  
  margin-bottom: 2rem;


  header {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 10rem;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};

    img {
      width:100%;
      height:100%;
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    height:12rem;
    padding: 1.5rem;

    h2 {
      
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 0.75rem;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        background: #fff;
        padding: 0.75rem;
        border-radius: 0.5rem;
        display: flex;
        border: none;
        transition: 0.1s;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 0.5rem;
        }
      }
    }

    div.availability-container {
      
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
        font-size:15px;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 4rem;
        height: 2rem;
        margin-left: 0.5rem;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: -1.5rem;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(2rem);
          -ms-transform: translateX(2rem);
          transform: translateX(2rem);  
        }
      }
    }
  }
`;
