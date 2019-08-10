export interface Request {
  current: number;
  limit: number;
}

export interface Response {
  last: number;
}

export const stringify = (request: Request): String => (
  `_page=${request.current}&_limit=${request.limit}`
);

export const parse = (request: Request, headers: Headers): Response => {
  const items = parseInt(headers.get("X-Total-Count") || "");
  return { last: Math.ceil(items / request.limit) };
};