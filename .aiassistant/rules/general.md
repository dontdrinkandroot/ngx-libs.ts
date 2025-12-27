---
apply: always
---

### Project Overview: @dontdrinkandroot/ngx-libs

This is a monorepo containing Angular libraries and an example application, focused on providing extensions for Angular and Angular Material.

#### Repository Structure
- `projects/dontdrinkandroot/ngx-extensions`: Core library providing general-purpose Angular extensions (HTTP interceptors, utilities, services for cookies, storage, etc.).
- `projects/dontdrinkandroot/ngx-material-extensions`: UI library providing extensions and components specifically for Angular Material (sidenav, toolbar, layout components).
- `projects/dontdrinkandroot/angular-material-example`: A demonstration application showing how to use the libraries.

#### Tech Stack
- **Framework:** Angular 21+ (using standalone components and modern APIs).
- **UI Components:** Angular Material 21+.
- **Language:** TypeScript 5.9+.
- **Package Manager:** Pnpm.
- **Testing:** Vitest.
- **Formatting:** Prettier.

#### Key Conventions
- **Standalone Components:** The project follows modern Angular patterns using standalone components, directives, and pipes.
- **Prefix:** Libraries use the `ddr` prefix for components and directives (as defined in `angular.json`).
- **Strictness:** High strictness in TypeScript and Angular compiler options (strict templates, strict injection parameters).
- **Organization:** Logic is modularized within `lib` folders of each project, with a clear `public-api.ts` defining the exported surface.

#### Development Workflow
- **Building Libraries:** `yarn build:libs`
- **Building App:** `yarn build:app`
- **Testing:** `yarn test:all` (uses Vitest)
- **Running Example:** `yarn serve:example`

#### Important Files
- `angular.json`: Workspace configuration.
- `package.json`: Dependencies and shared scripts.
- `tsconfig.json`: Root TypeScript configuration with path mappings for libraries.
- `dist/`: Build output directory (libraries must be built before they can be used by the example app if using path mappings).

