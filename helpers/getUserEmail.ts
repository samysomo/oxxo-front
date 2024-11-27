import { TOKEN_NAME } from "@/constants";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";


export interface JwtPayload {
  userEmail: string;
  userRoles: string[];
}

export const getUserEmail = () => {
  const token = cookies().get(TOKEN_NAME)?.value
  if(!token) return []
  try {
    const decodedToken = jwtDecode<JwtPayload>(token)
    return decodedToken.userEmail
  } catch (error) {
    console.error("Token Invalido", error)
    return []
  }
}
