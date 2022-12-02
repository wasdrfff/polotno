export function hexToRgba(color: string, opacity: number) {
  const bigInt = parseInt(color.substring(1), 16);
  return `rgba(${(bigInt >> 16) & 255}, ${(bigInt >> 8) & 255}, ${
    bigInt & 255
  }, ${opacity})`;
}
