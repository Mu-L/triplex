/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
import base from "../themes/base";
import code from "../themes/code";

export type Themes = "base" | "code";

const themeStyles = {
  base,
  code,
} satisfies Record<Themes, string>;

export function rootHTML({
  css = "",
  loadingIndicator = "",
  module = "",
  script = "",
  themes = [],
  title,
}: {
  css?: string;
  loadingIndicator?: string;
  module?: string;
  script?: string;
  themes?: Themes[];
  title: string;
}) {
  const resolvedThemes = themes.map((theme) => themeStyles[theme]);

  return `<!-- THIS FILE IS GENERATED DO NOT MODIFY -->
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>html,body,#root{margin:0;height:100%;min-height:100%;}canvas{outline:none;}${resolvedThemes.join("")}${css}</style>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420.84 476.6'%3E%3Cstyle%3Eg%7Bfill:%23fff%7D@media (prefers-color-scheme:light)%7Bg%7Bfill:%23000%7D%7D%3C/style%3E%3Cg%3E%3Cpath d='M376.77 340.58c-25.9-14.93-51.8-29.87-77.7-44.8-20.95 25.56-52.76 41.87-88.39 41.87s-68.05-16.64-88.99-42.63c-26.92 15.97-53.83 31.95-80.75 47.92-.92.67-8.55 6.42-8.87 16.69-.31 9.76 6.23 15.82 7.16 16.65 70.85 48.5 124.6 82.67 143.72 92.95 5.14 2.76 14.68 7.53 27.09 7.37 11.78-.15 20.73-4.63 25.48-7.2 18.89-10.21 73.24-45.05 145.07-94.39 3.05-2.59 8.6-8.11 8.71-15.38.13-8.24-6.16-15.38-12.53-19.05ZM414.12 92.76c-3.31-4.33-7.01-6.96-9.51-8.52-9.89-6.14-69.23-38.1-150.88-81.04-3.36-1.41-12.82-4.9-19.56-.42-5.53 3.67-7.08 10.94-7.08 15.27.02 30.77.04 61.55.07 92.32 55.29 7.99 97.77 55.55 97.77 113.04 0 14.72-2.82 28.78-7.89 41.7 21.93 11.68 48.48 25.65 78.46 41.19.6.37 7.39 4.44 15.06 1.15 7.65-3.29 9.39-10.98 9.53-11.68.25-62.27.51-124.53.76-186.8-.46-3.29-1.84-9.82-6.73-16.22ZM96.43 223.42c0-57.32 42.22-104.77 97.26-112.98.02-30.79.05-61.59.07-92.38 0-4.63-1.73-11.43-7.08-15.27-6.36-4.57-15.08-2.37-18.38-1.37-82.34 44-142.18 76.68-152.06 82.82-2.28 1.41-6.09 4.04-9.51 8.52C1.84 99.16.46 105.69 0 108.98c.25 62.27.51 124.53.76 186.8.14.7 1.88 8.39 9.53 11.68 7.67 3.3 14.46-.77 15.06-1.15 30.17-15.64 56.87-29.69 78.88-41.41-5.02-12.86-7.8-26.84-7.8-41.48Z'/%3E%3Ccircle cx='210.68' cy='222.36' r='72.66'/%3E%3C/g%3E%3C/svg%3E%0A" />
    </head>
    <body>
        <div id="root">${loadingIndicator}</div>
        ${module && `<script type="module" src="${module}"></script>`}
        ${script && `<script type="module">${script}</script>`}
    </body>
</html>
`;
}
