**Overview**

```ts
interface Group {
  id: string; // maybe Number or Symbol
  /* additional info, such as "name" or "description" */
}

interface User {
  id: string; // maybe Number or Symbol
  groupId: string; // see Group interface
  /* additional info, such as "name" or "description" */
}
```

**(Mock) Implementation**

- API server with https://github.com/typicode/json-server
- Data generated with https://github.com/marak/faker.js
