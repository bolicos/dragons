export const WEB_APP = {
  NAME: process.env.REACT_APP_NAME,
  ENVIRONMENT: process.env.REACT_APP_ENV,
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  API_AUTH_URL: process.env.REACT_APP_API_AUTH_URL,
};

export const ROUTES = {
  HOME: () => "/",
  DRAGONS_LIST: () => "/dragons",
  DETAILS_DRAGON: (id: string) => `/dragons/${id}/details`,
  EDIT_DRAGON: (id: string) => `/dragons/${id}/edit`,
  CREATE_DRAGON: () => "/dragons/create",
  SIGN_IN: () => "/sign-in",
};
