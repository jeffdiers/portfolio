import * as React from 'react';

import { IconType } from './types';

type IconNpmProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * The title provides an accessible short text description to the SVG
   */
  title?: string;
  /**
   * Hex color or color name or "default" to use the default hex for each icon
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string | number;
}

const defaultColor = '#CB3837';

const IconNpm: IconType = React.forwardRef<SVGSVGElement, IconNpmProps>(function IconNpm({ title = 'npm', color = 'currentColor', size = 24, ...others }, ref) {
  if (color === 'default') {
    color = defaultColor;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>
    </svg>
  );
});

export { IconNpm as default, defaultColor };
