/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import pwa from "next-pwa";

/** @type {import("next").NextConfig} */
const config = {};

const withPWA = pwa({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

export default withPWA({
    ...config,
    reactStrictMode: true,
});
