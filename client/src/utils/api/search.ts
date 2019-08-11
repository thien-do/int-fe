export interface Request {
  query: string;
}

export interface Response {
}

export const stringify = (request: Request): String => (
  `q=${request.query}`
);

export const parse = (request: Request, headers: Headers): Response => ({
});