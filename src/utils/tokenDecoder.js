import jwt from 'jsonwebtoken'

export const tokenDecoder = (authToken) => {
  const { name, given_name, email, picture } = jwt.decode(authToken);

  return { name, given_name, email, picture }
}