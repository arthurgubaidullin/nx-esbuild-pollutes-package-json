import { otherLib } from '@nx-esbuild-pollutes-package-json/other-lib';

export function bundledLib(): string {
  return otherLib();
}
