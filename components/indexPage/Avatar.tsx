import styled from 'styled-components';
import { minDeviceMedia } from '@styles/theme';
import { minDevice } from '@styles/theme';
import React from 'react';

const srcSet = (format: string): string =>
  `/me/me240.${format} 240w, /me/me300.${format} 300w, /me/me400.${format} 400w, /me/me450.${format} 450w, /me/me500.${format} 500w, 
  /me/retina/me300@2x.${format} 2x, /me/retina/me300@3x.${format} 3x,`;

/*можно обойтись без этого контейнера, но тогда это может вызвать камулейтив
лейаут шифт в старых браузерах, чекай: https://www.youtube.com/watch?v=4-d_SoCHeWE*/
const AvatarContainer = styled.picture`
  width: clamp(180px, calc(57.6923076923vw - 4.61538461538px), 240px);
  ${minDeviceMedia.mobile} {
    width: clamp(241px, 17.2514619883vw + 167.68128655px, 300px);
  }
  ${minDeviceMedia.tablet} {
    width: clamp(301px, calc(38.8235294118vw + 2.83529411765px), 400px);
  }
  ${minDeviceMedia.laptop} {
    width: clamp(401px, calc(11.7788461538vw + 280.384615385px), 450px);
  }
  ${minDeviceMedia.laptopLarge} {
    width: clamp(451px, calc(13.3879781421vw + 258.213114754px), 500px);
  }
  //width: clamp(240px, 40vw, 500px);
  aspect-ratio: 1 / 1;
  height: auto;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  height: auto;
`;

const sizes =
  `${minDevice.laptopLarge} 500px, ` +
  `${minDevice.laptop} 450px, ` +
  `${minDevice.tablet} 400px, ` +
  `${minDevice.mobile} 300px, ` +
  `240px`;

const Avatar = () => {
  return (
    <AvatarContainer>
      <source
        type={'image/avif'}
        srcSet={srcSet('avif')}
        sizes={sizes}
        width={'300'}
        height={'300'}
      />
      <StyledImage
        src={'/me/me240.png'}
        width={'300'}
        height={'300'}
        alt={'me'}
        decoding={'async'}
        loading={'eager'}
        srcSet={srcSet('png')}
        sizes={sizes}
      />
    </AvatarContainer>
  );
};

export { Avatar };
