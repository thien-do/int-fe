
Goal: Best user management system in 4 hours

Note: these decisions are not necessarily in parallel or as a series. They
simply depend on each other (i.e. decisions are made to achieve the best
compromise between several concerns/aspects)

- Version control: Git (De facto)
    - Hosting: GitHub (Personal best)
    - Convention: Conventional Commits

- Programming language: TypeScript (Best compromise, best dev exp)
    - Not Scala.js: interop cost too high, dev exp too low
    - Not Reason: syntax quite weird, interop cost too high, React-driven
    - Not Dart: too immature, Angular-driven
    - Not JavaScript: too, well, unnecessarily dangerous and not good dev exp

- UI framework: React (Good design, good tools, also want to try Hooks)
    - Not Angular: too complex for this project
    - Not Svelte: too immature and experimental atm
    - Not Vue: tools are not as good as React

- Workflow setup: SPA with Create React App (Good design)
    - Not SSR (e.g. Next.js): A user management system is likely a part of an
        internal administration system, serving private content for internal
        users. This eliminates much benefits of a SSR (SEO, non-JS env,
        sharing, etc.)
    - Not pre-compiled HTML (e.g. Gatsby): same as above
    - Not manual setup: too unnecessarily complicated at this stage

- (Mock) Back end: JSON Server