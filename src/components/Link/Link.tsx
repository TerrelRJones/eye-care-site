import styled from "styled-components";
import { Colors } from "styles/colors";

export type LinkProps = {
  url: string;
  text: string;
  image?: string;
  alt?: string;
  color?: string;
  hoverColor?: string;
};

const LinkStyled = styled.a<Pick<LinkProps, "color" | "hoverColor">>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ color }) => color || Colors.white};
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 20px;
  margin-bottom: 8px;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;

  ${({ hoverColor }) =>
    hoverColor
      ? ` &:hover { color: ${hoverColor}; text-decoration: underline;}`
      : null}

  img {
    width: 1rem;
    margin-right: 5px;
  }
`;

export const Link = ({
  url,
  alt,
  text,
  image,
  color,
  hoverColor,
}: LinkProps) => {
  return (
    <LinkStyled
      href={url}
      color={color}
      hoverColor={hoverColor}
      target="_blank"
    >
      {image ? <img src={image} alt={alt} /> : null}
      {text}
    </LinkStyled>
  );
};
