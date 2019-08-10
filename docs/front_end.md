- Version control: Git
    - Why: De facto solution, easy to share and collaborate
    - Hosting: GitHub (Personal best)
    - Convention: Conventional Commits

- Programming language: TypeScript
    - Why: Best compromise, best dev exp
    - Alt: Scala.js: interop cost too high, dev exp too low
    - Alt: Reason: syntax quite weird, interop cost too high, React-driven
    - Alt: Dart: too immature, Angular-driven
    - Alt: JavaScript: too, well, unnecessarily dangerous and not good dev exp

- UI framework: React
    - Why: Good design, good tools, also want to try Hooks
    - Alt: Angular: too complex for this project
    - Alt: Svelte: too immature and experimental atm
    - Alt: Vue: tools are not as good as React

- Workflow setup: SPA with Create React App
    - Why: Good design, wide options, compact, suitable context (A user
        management system is likely a part of an internal administration
        system, serving private content for internal users. 
    - Alt: SSR (e.g. Next.js): No need for SEO, fast load, non-JS env
    - Alt: pre-compiled HTML (e.g. Gatsby): same as above
    - Alt: manual setup: too unnecessarily complicated at this stage

- UI kit: Blueprint
    - Why: Good design, enterprise-focused, also want to try
    - Alt: anduin.design: only for scala.js
    - Alt: CSS-based (e.g. Bootstrap, Foundation): too risky, poor dev exp
    - Alt: Ant Design, IBM's Carbon: too generic