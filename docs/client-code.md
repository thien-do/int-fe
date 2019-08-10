**UI framework: React**

- `why` Good design, good tools, also want to try Hooks
- `alt` Angular: too complex for this project
- `alt` Svelte: too immature and experimental atm
- `alt` Vue: tools are not as good as React

**Workflow setup: SPA with Create React App**

- `why` Good design, wide options, compact
- `why` Suitable use case (internal administration system, private content, in-house users)
- `alt` SSR (e.g. Next.js): No need for SEO, fast load, non-JS env
- `alt` pre-compiled HTML (e.g. Gatsby): same as above
- `alt` manual setup: too unnecessarily complicated at this stage

**UI kit: Blueprint**

- `why` Good design, enterprise-focused, also want to try
- `alt` anduin.design: only for scala.js
- `alt` CSS-based (e.g. Bootstrap, Foundation): too risky, poor dev exp
- `alt` Ant Design, IBM's Carbon: too generic

**Styling: CSS Modules + Sass**

- `why` CSS Modules to scope style definitions
- `why` Sass to use Blueprint's CSS variables (and it's the only use case)
- `alt` Utility CSS (e.g. Tailwind, Taychons): cannot use Blueprint's variables

**Principles**

- Internal vs external styling

**Questions**

- Naming files