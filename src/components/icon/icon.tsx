import {IconColorPalette, IconName} from "./types";
import {icons} from "./icons";
import {Container} from './icon-styled'
import {variables} from "../../variables";

export type IconProps = {
  // size?: IconSizes
  color?: IconColorPalette
  className?: string
  'aria-label'?: string
  name: IconName
}

export function Icon({
                       name,
                       color,
                       className,
                       'aria-label': ariaLabel,
                     }: IconProps) {
  const IconComponent = icons[name]
  const usedColor = color ? (variables.colors.common[color] as string) : undefined


  return <Container
    iconColor={color}
    className={className}
    aria-hidden
    aria-label={ariaLabel ?? `icon-${name}`}
    data-icon-name={`icon-${name}`}>
    <IconComponent
      color={usedColor}
    />
  </Container>
}