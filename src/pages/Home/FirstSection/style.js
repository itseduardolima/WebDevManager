import styled from 'styled-components'

export const Welcome = styled.section `
  padding: 100px;
  align-items: center;
  background-color: #e8e2ff;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 912px) {

    padding: 40px;
    flex-direction: column;
  }

  @media only screen and (max-width: 540px) {
    padding: 20px;
  }

  @media only screen and (max-width: 414px) {
    flex-direction: column;
  }

`

export const ContentContainer = styled.div`

  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 912px) {
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`

export const Content = styled.div`

  h1 {
  margin-top: 100px;
  color: #6f5acd;
  font-weight: bold;
  font-size: 2.5em;
  }

  p {
  width: 65%;
  font-size: 1.3em;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #2b1392;
  }

  @media only screen and (max-width: 1550px) {
    h1 {
     font-size: 2em;
   }
 
    p {
     margin-top: 30px;
     width: 70%;
     font-size: 1em;
   }
 }

 @media only screen and (max-width: 1024px) {
  p {
   margin-top: 30px;
   width: 80%;
   font-size: 1em;
 }
}

@media only screen and (max-width: 912px) {
  h1 {
    width: 100%;
    font-size: 2em;
  }

  p {
    width: 100%;
    margin-top: 30px;
    font-size: 1em;
  }
}

@media only screen and (max-width: 540px) {
  h1 {
    font-size: 1.5em;
  }
   p {
    font-size: 0.8em;
  }
}

@media only screen and (max-width: 414px) {
  h1 {
    width: 100%;
    font-size: 1.5em;
  }

   p {
    width: 100%;
    margin-top: 30px;
    font-size: 0.9em;
  }
}

`

export const HomeImg = styled.div `
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 50px;
    width: 600px;
  }

  @media only screen and (max-width: 1550px){
    img {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 1024px) {
    img {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 912px) {
    margin-top: 70px;
    width: 100%;

    img {
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 820px) {
    img {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 540px) {
    img {
      margin-top: 10px;
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 414px) {
    margin-top: 70px;
    width: 100%;

    img {
      max-width: 400px;
    }
  }
`

