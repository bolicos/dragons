export const WEB_APP = {
  NAME: process.env.WEB_APP_NAME,
  ENVIRONMENT: process.env.WEB_APP_ENV,
  BASE_URL: process.env.WEB_APP_BASE_URL,
  API_BASE_URL: process.env.WEB_APP_BFF_BASE_URL,
};

export const ROUTES = {
  HOME: () => "/",
  SIGN_IN: () => "/sign-in",
  NOT_FOUND: () => "/not-found",
  ERROR: () => "/error",
  ALL: () => "*",
};
