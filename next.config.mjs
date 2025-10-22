const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function normalizeBasePath(input) {
  if (!input) return "";

  let candidate = input;

  if (candidate.includes("://")) {
    try {
      const url = new URL(candidate);
      candidate = url.pathname || "";
    } catch {
      candidate = "";
    }
  }

  if (!candidate) return "";

  if (!candidate.startsWith("/")) {
    candidate = `/${candidate}`;
  }

  candidate = candidate.replace(/\/+$/, "");

  return candidate === "/" ? "" : candidate;
}

const SITE_BASE_PATH = normalizeBasePath(rawBasePath);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(SITE_BASE_PATH && {
    basePath: SITE_BASE_PATH,
    assetPrefix: SITE_BASE_PATH,
  }),
};

export default nextConfig;
