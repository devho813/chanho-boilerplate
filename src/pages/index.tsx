import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <h1>👋 Chanho`s Boilerplate</h1>
      <Chanho
        src="https://avatars2.githubusercontent.com/u/29947014?s=460&u=4749fe67e031e967bb5659895d0dc8e1f9365205&v=4"
        alt="chanho image"
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`;

const Chanho = styled.img`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`;
