// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LockImg = styled.img`
  margin-top: auto;
  height: 60px;
  width: 60px;
  color: ${props => (props.isLocked ? '#3c2940' : '#06b6d4')};
`
export const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
`

export const ButtonElement = styled.button`
  height: 34px;
  width: 90px;
  padding: 5px;
  border-radius: 8px;
  margin-bottom: auto;
  margin-top: auto;
  color: white;
  background-color: ${props => (props.isLocked ? '#823d38' : '#06b6d4')};
`
