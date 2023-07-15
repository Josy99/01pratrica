import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  color: black;
`

export const ContentImage = styled.div`
  width: 50%;
  img {
    width: 20rem;
    height: 20rem;
  }
`

export const ContentDescription = styled.div`
  width: 50%;

  display: flex;
  gap: 1rem;
  flex-direction: column;
`
