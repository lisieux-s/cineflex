import styled from 'styled-components';

export default function Footer(props) {
  return (
    <FooterContainer>
        <div>
          <img src={props.posterURL} alt='poster'/>
        </div>
      {
          props.weekday === null ? 
          <span>
              <p>{props.title}</p>
          </span>
          :
          <span>
              <p>{props.title}</p>
              <p>{props.weekday} {props.date}</p>
          </span>
      }
        
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 10px;
  gap: 14px;

  width: 100%;
  height: 117px;
  border-top: 1px solid #9eadba;

  background: #dfe6ed;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 89px;
    width: 64px;
    border-radius: 2px;
    background: #fff;

    img {
        height: 72px;
        width: 48px;
      }
  }
  span {

      p {
        justify-self: flex-start;
          padding: 0;
          margin: 0;
      }
  }
`;