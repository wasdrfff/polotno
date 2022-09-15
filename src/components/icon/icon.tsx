import { IconColorPalette, IconName } from "./types";
import { icons } from "./icons";
import { Container } from "./icon-styled";
import { theme } from "../../variables";

export type IconProps = {
  size?: number;
  color?: IconColorPalette;
  className?: string;
  "aria-label"?: string;
  name: IconName;
  onClick?: () => void;
};

export function Icon({
  name,
  size,
  color,
  className,
  "aria-label": ariaLabel,
  onClick,
}: IconProps) {
  const IconComponent = icons[name];
  const usedColor = color ? (theme.colors[color] as string) : undefined;

  return (
    <Container
      iconColor={color}
      className={className}
      size={size}
      aria-hidden
      aria-label={ariaLabel ?? `icon-${name}`}
      data-icon-name={`icon-${name}`}
      onClick={onClick}
    >
      <IconComponent color={usedColor} />
    </Container>
  );
}
