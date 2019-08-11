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
  const countStr = headers.get("X-Total-Count")
  const count = Math.max(parseInt(countStr || ""), 1);
  return { last: Math.ceil(count / request.limit) };
};