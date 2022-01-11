import styled from "styled-components";

const Text = (props) => {
  const { children, size, lineheight, color, bold, margin, padding, onClick } =
    props;
  const styles = { size, lineheight, color, bold, margin, padding };
  return (
    <>
      <P {...styles} onClick={onClick}>
        {children}
      </P>
    </>
  );
};

export default Text;

const P = styled.p`
  text-align: center;
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? 400 : 700)};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `margin: ${props.padding};` : "")};
`;

Text.defaultProps = {
  size: "16",
  lineheight: "20",
  color: "#896a60",
  bold: 400,
  margin: "",
  padding: "",
  onClick: () => {},
};
