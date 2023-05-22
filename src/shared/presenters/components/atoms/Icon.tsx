'use client';

import { IconType } from "react-icons";

interface IconProps {
	icon: IconType;
  size?: number;
  color?: string;
}

export function Icon({ size = 24, color = '', icon }: IconProps) {
  const IconComponent = icon;

  return <IconComponent size={size} color={color} />;
};