import { Response, Server } from "miragejs";
import { CLIENTS_BASE_URLS } from "@/services/clients";
import { UserModel } from "@/models/user";

// Backend HTTP response simulation
const Mirage = () =>
  new Server({
    routes() {
      this.urlPrefix = CLIENTS_BASE_URLS.AUTH() || "";
      this.namespace = "api/v1";
      this.timing = 500;

      this.post("/auth", (schema: any, request) => {
        const headers = {};
        const codeOk = 200;
        const codeInternalServerError = 500;
        const user = JSON.parse(request.requestBody) as UserModel;
        const userIsValid = user.username === "dragons" && user.password === "12345";

        const error = {
          error: ["Internal Server Error"],
        };

        const data = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey" +
            "JpYXQiOjE2MjgzNDk2MDAsImV4cCI6MTYzMDUwO" +
            "TYwMCwiaXNzIjoiaHR0cHM6Ly9mYWtlYXV0aC5t" +
            "b2NrYXBpLmlvIiwiYXVkIjoiaHR0cHM6Ly9naXR" +
            "odWIuY29tL2FuYWx1Y2lhYm9saWNvL2RyYWdvbn" +
            "MiLCJzdWIiOiJUb2tlbiBKV1QiLCJhcHBsaWNhd"+
            "GlvbklkIjoiYW5hbHVjaWFib2xpY28vZHJhZ29u"+
            "cyIsInVzZXJuYW1lIjoiZHJhZ29uIiwicm9sZXM"+
            "iOlsiVklFVyIsIkVESVQiLCJERUxFVEUiLCJORV"+
            "ciXX0.PMy5B6ttzpYo0Za7JYnN5NLkdZEm-"+
            "SeewS4Ltq3k6og",
        };

        return userIsValid
          ? new Response(codeOk, headers, data)
          : new Response(codeInternalServerError, headers, error);
      });

      this.passthrough(`${CLIENTS_BASE_URLS.DRAGONS()}/**`);
    },
  });

export default Mirage;

// PAYLOAD JWT:
// Secret JWT is "dragons"

/*
{
  "iat": 1628349600,
  "exp": 1630509600,
  "iss": "https://fakeauth.mockapi.io",
  "aud": "https://github.com/analuciabolico/dragons",
  "sub": "Token JWT",
  "applicationId": "analuciabolico/dragons",
  "username": "dragons",
  "roles": [
    "VIEW", "EDIT", "DELETE", "NEW"
  ]
}
 */

/* Token JWT
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjgzNDk2MDAsImV4cCI6MTYzMDUwOTYwMCwiaXNzIjoiaHR0cHM6Ly9mYWtlYXV0aC5tb2NrYXBpLmlvIiwiYXVkIjoiaHR0cHM6Ly9naXRodWIuY29tL2FuYWx1Y2lhYm9saWNvL2RyYWdvbnMiLCJzdWIiOiJUb2tlbiBKV1QiLCJhcHBsaWNhdGlvbklkIjoiYW5hbHVjaWFib2xpY28vZHJhZ29ucyIsInVzZXJuYW1lIjoiZHJhZ29uIiwicm9sZXMiOlsiVklFVyIsIkVESVQiLCJERUxFVEUiLCJORVciXX0.PMy5B6ttzpYo0Za7JYnN5NLkdZEm-SeewS4Ltq3k6og */
