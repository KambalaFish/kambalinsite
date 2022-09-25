// export const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

type SizeFormats<T> = { mobile: T; tablet: T; laptop: T; laptopLarge: T };
type SizeFormatsExtended<T> = { mobileSmall: T } & SizeFormats<T>;

const sizeNumbers: SizeFormats<number> = {
  mobile: 414,
  tablet: 768,
  laptop: 1024,
  laptopLarge: 1440,
};

const size: SizeFormats<string> = {
  mobile: `${sizeNumbers.mobile}px`,
  tablet: `${sizeNumbers.tablet}px`,
  laptop: `${sizeNumbers.laptop}px`,
  laptopLarge: `${sizeNumbers.laptopLarge}px`,
};

const breakpoints = [size.mobile, size.tablet, size.laptop, size.laptopLarge];

const minDevice: SizeFormats<string> = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLarge: `(min-width: ${size.laptopLarge})`,
};

const minDeviceMedia: SizeFormats<string> = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  laptopLarge: `@media (min-width: ${size.laptopLarge})`,
};

export { breakpoints, minDeviceMedia, minDevice };
export type { SizeFormatsExtended };
