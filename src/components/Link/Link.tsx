import styled from "styled-components";
import { Colors } from "styles/colors";

export type LinkProps = {
  url: string;
  text: string;
  image?: string;
  alt?: string;
};

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${Colors.white};
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 20px;
  margin-bottom: 8px;
  text-transform: capitalize;

  img {
    width: 1rem;
    margin-right: 10px;
  }
`;

export const Link = ({ url, alt, text, image }: LinkProps) => {
  return (
    <LinkStyled href={url} target="_blank">
      {image ? <img src={image} alt={alt} /> : null}
      {text}
    </LinkStyled>
  );
};
