/* eslint-disable @next/next/no-img-element */
import Text from "../elements/Text";
import styled from "styled-components";
import profile from "../public/profile.jpg";

const Profile = (props) => {
  const { name, img, content } = props;
  return (
    <>
      <Container>
        <Img src={profile.src} alt="image" />
        <Name>{name}</Name>
        <Introduce>{content}</Introduce>
        <Introduce>{content}</Introduce>
      </Container>
    </>
  );
};

export default Profile;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const Name = styled.p`
  font-size: 1.5rem;
`;
const Introduce = styled.p``;
const Img = styled.img`
  width: 300px;
  border-radius: 150px;
`;
