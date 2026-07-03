import { loadConfig } from "c12";
import { defu } from "defu";

export interface AppConfig {
  theme: "light" | "dark" | "system";
  apiEndpoint: string;
}

const defaultConfig: AppConfig = {
  apiEndpoint: "/api/trpc",
  theme: "system",
};

export const getAppConfig = async (overrides: Partial<AppConfig> = {}) => {
  const { config } = await loadConfig<AppConfig>({
    defaults: defaultConfig,
    name: "tachys",
  });

  return defu(overrides, config, defaultConfig);
};
