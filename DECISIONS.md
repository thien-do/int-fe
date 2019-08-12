## Overview

Due to the nature of the challenge and its time constraint, some features had been skipped and assumptions had been made in order to best showcase my direction on the challenge. To be specific:

- Assumptions:
    - The front end is a part of an internal admin system, where its targeted users are mainly internal employees.
    - The number of groups and users are very large, as well as the number of their links.
- Direction: Our main focuses are:
    - Browsing/listing experience and quality of interfaces
    - Workflow and development experience
    - Foundation for further development

Therefore some features (especially those editting ones) may be missing in this MVP but can be implemented easily after.

## Details

> Legends:
> 
> - `why`: why the choice is made
> - `alt`: considered alternative options

Note that these decisions are not made separately, but instead heavily depend on each other. For example, Create React App is chose because it has great supports for other decisions like TypeScript and CSS Modules.

**Version control: Git**

- `why` De facto solution, easy to share and collaborate
- Hosting: GitHub (Personal best)
- Convention: Conventional Commits

**Programming language: TypeScript**

- `why` Best compromise, best dev exp
- `inf` Actually atm we mostly use it for the auto completion
- `alt` Scala.js: interop cost too high, dev exp too low
- `alt` Reason: syntax quite weird, interop cost too high, React-driven
- `alt` Dart: too immature, Angular-driven
- `alt` JavaScript: too, well, unnecessarily dangerous and not good dev exp

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

**Design: Parent > Detail column-style layout (Finder)**

- Pagination: https://www.nngroup.com/articles/item-list-view-all/
- Search is a must, should also have filter, order and group