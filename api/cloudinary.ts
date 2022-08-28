import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { ImageLoader } from 'next/dist/client/future/image';

/*
https://stackoverflow.com/questions/71235874/how-to-allow-all-domains-for-image-nextjs-config
https://cloudinary.com/documentation/fetch_remote_images
https://cloudinary.com/documentation/javascript_image_transformations
https://cloudinary.com/documentation/transformation_reference
* */

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
  },
});

type LoaderParams = {
  aspectRatio?: string;
  format?: string;
};

const customLoader: (loaderParams: LoaderParams) => ImageLoader =
  ({ aspectRatio, format = 'auto' }: LoaderParams) =>
  ({ src, width, quality }) => {
    if (quality) {
      return cld
        .image(src)
        .resize(aspectRatio ? fill(width).aspectRatio(aspectRatio) : fill(width))
        .quality(quality)
        .format(format)
        .setDeliveryType('fetch')
        .toURL();
    }
    return cld
      .image(src)
      .resize(aspectRatio ? fill(width).aspectRatio(aspectRatio) : fill(width))
      .format(format)
      .setDeliveryType('fetch')
      .toURL();
  };

export { customLoader };
