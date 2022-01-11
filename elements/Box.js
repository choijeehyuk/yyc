import styled from "styled-components";

const Box = (props) => {
  const { children, width, height } = props;
  const styles = { width, height };

  return (
    <>
      <EBox {...styles}>{children}</EBox>
    </>
  );
};

export default Box;

const EBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

Box.defaultProps = {
  width: "100",
  height: "100",
};
