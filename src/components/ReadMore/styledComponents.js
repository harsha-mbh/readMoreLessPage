import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const AppHeading = styled.h1`
  color: #1e293b;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 30px;
`
export const AppDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
`
export const AppImage = styled.img`
  width: 100%;
`

export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px;
  background-color: #1f81ff;
  border: none;
  border-radius: 5px;
`
