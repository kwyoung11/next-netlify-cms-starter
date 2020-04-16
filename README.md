## Who This Package is For
This is for developers who want to build a Next.js static site backed by Netlify CMS.

## What this Package Includes
- Normalize.css and Styled Component Theme Provider in a [custom _app.js](https://nextjs.org/docs/advanced-features/custom-app)
- Server Side Rendering (SSR) of styled-component styles via a [custom _document.js](https://nextjs.org/docs/advanced-features/custom-document)
- Integration of your Next.js pages/templates to Netlify CMS's preview templates by importing netlify-cms as a module and providing a HOC that injects styled-component styles into the preview template.
- content directory (where your collections, files, etc live)
- data directory (site config, miscellaneous config files)
- Provides common set of default scripts and packages:
    - scripts:
        - `yarn dev`
        - `yarn build`
        - `yarn start`
        - `yarn export`
        - `yarn test`
        - `yarn lint`
        - `yarn format`
    - dependencies:
        - formik
        - react-icons
        - react-markdown
        - styled-components
        - styled-media-query
        - styled-normalize
    - devDependencies: 
        - typescript
        - eslint
        - prettier
        - jest
        - react-testing-library
        - commitlint
        - husky
    

## Getting Started

Clone the repo and run the development server:
```bash
git clone https://github.com/kwyoung11/next-netlify-cms-starter
cd next-netlify-cms-starter
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Learn More About Netlify CMS

To learn more about Next.js, take a look at the following resources:

- [Netlify CMS Documentation](https://www.netlifycms.org/docs) - learn about Netlify CMS features.

You can check out [the Netlify CMS GitHub repository](https://github.com/netlify/netlify-cms) - your feedback and contributions are welcome!
