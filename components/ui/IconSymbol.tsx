import { Icon as LucideIcon, icons } from 'lucide-react-native';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

export type IconSymbolName = keyof typeof icons;

/**
 * An icon component that uses Lucide icons for consistent cross-platform rendering.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  const IconComponent = icons[name]; // Dynamically select the icon component

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons.`);
    return null;
  }

  return <IconComponent color={color} size={size} style={style} />;
}
