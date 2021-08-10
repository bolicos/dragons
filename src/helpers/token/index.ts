import jwtDecode from "jwt-decode";
import { Token as TokenJWT } from "@/models/user";
import LocalStorage from "@/helpers/storage";

const Token = {
  DECODE: (name: string, value: string) => {
    const storagedToken = LocalStorage.GET("token");
    return !!storagedToken ? jwtDecode<TokenJWT>(storagedToken) : undefined;
  },
};

export default Token;

// client.defaults.headers["Authorization"] = `Bearer ${storagedToken}`; */
