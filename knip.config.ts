import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev
 * @see https://knip.dev/reference/plugins/metro
 */
const knipConfig: KnipConfig = {
  entry: ["src/app/**/*.{ts,tsx}"],
  project: ["src/**/*.{ts,tsx}"],
};

export default knipConfig;
