import * as React from 'react';

import { IconType } from './types';

type IconTailwindcssProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const defaultColor = '#06B6D4';

const IconTailwindcss: IconType = React.forwardRef<SVGSVGElement, IconTailwindcssProps>(function IconTailwindcss({ title = 'Tailwind CSS', color = 'currentColor', size = 24, ...others }, ref) {
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
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  );
});

export { IconTailwindcss as default, defaultColor };
