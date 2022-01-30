import styled from "styled-components";

const Text = (props) => {
  const {
    children,
    mSize,
    smSize,
    size,
    lineheight,
    color,
    bold,
    margin,
    padding,
    onClick,
  } = props;
  const styles = {
    size,
    mSize,
    smSize,
    lineheight,
    color,
    bold,
    margin,
    padding,
  };
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
  @media (max-width: 600px) {
    ${(props) => (props.mSize ? `font-size: ${props.mSize};` : "")};
  }
  @media (max-width: 400px) {
    ${(props) => (props.smSize ? `font-size: ${props.smSize};` : "")};
  }
  text-align: center;
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
  ${(props) => (props.lineheight ? `line-height: ${props.lineheight};` : "")};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? 400 : 700)};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `margin: ${props.padding};` : "")};
`;

Text.defaultProps = {
  size: "1rem",
  lineheight: "",
  color: "#896a60",
  bold: 400,
  margin: "",
  padding: "",
  onClick: () => {},
};
