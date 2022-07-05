import Styled from "styled-components";
import { Colors } from "styles/colors";

type LinkProps = {
  url: string;
  alt: string;
  text: string;
  image?: string;
};

const LinkStyled = Styled.a`
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
        margin-right: 5px;
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
