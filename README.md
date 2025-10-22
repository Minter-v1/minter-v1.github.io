<div align="center">
<img alt="Portfolio" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%">
</div>

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)

Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dillionverma/portfolio
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

## Deploying to GitHub Pages

With the provided GitHub Actions workflow, pushing to `main` will build a static export and publish it to GitHub Pages automatically.

1. Enable GitHub Pages in your repository settings and choose **GitHub Actions** as the source.
2. The workflow detects whether the repository name matches `<username>.github.io` and configures the correct base path automatically.
3. For custom domains, set `NEXT_PUBLIC_SITE_URL` and (optionally) `NEXT_PUBLIC_BASE_PATH` repository variables so metadata points to the correct URL.
4. You can trigger a manual deployment via the *Run workflow* button if needed.

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
