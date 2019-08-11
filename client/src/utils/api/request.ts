import * as Page from "./page";

const host = "http://localhost:3001";

// This supports https://github.com/typicode/json-server#routes
interface Request {
  path: string;
  // This can be better if we can prevent this from being set in case of
  // non-GET methods
  page?: Page.Request;
}

// @TODO: build queries with https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const stringify = (req: Request): string => ([
  req.page ? Page.stringify(req.page) : ""
].join("&"));

const parse = (req: Request, headers: Headers) => ({
  page: req.page && Page.parse(req.page, headers)
});

interface Response<T> {
  body: T;
  page?: Page.Response;
}

async function request<T>(request: Request): Promise<Response<T>> {
  const url = `${host}/${request.path}?${stringify(request)}`;
  const res = await fetch(url);
  const json = await res.json();
  return { body: json, ...parse(request, res.headers) };
}

export default request;