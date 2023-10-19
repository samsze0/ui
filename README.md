# Artizon UI

A React UI component library compatible with Next13.

Many of my own projects are developed with this UI library. Components in this library are heavily scoped to those specific projects and hence are not suitable for general use.

**Stack**

- Tailwind (required)
- Zustand (required)
- RadixUI (required)
- shadcn/ui (credits to)
- NextJS 13
- Supabase
- Tanstack query
- Tanstack table
- Framer motion
- `i18next` & `react-i18next` (not using `next-i18next` or NextJS's built-in i18n features)
- React-hook-form (required for forms)

See `package.json` for exhaustive list of peer dependencies

## Usage

1. Setup Git submodules e.g. `git submodule add https://github.com/<user>/<repo> <dest-dir>`

**For NextJS**

Add configurations as follows:

```js
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
```

Add path aliases to `tsconfig.json` as follows:

```json
{
  "paths": {
    "@artizon/ui": ["./ui"],
    "@artizon/ui/next": ["./ui/next"],
    "@artizon/ui/next-client-components": ["./ui/next-client-components"],
    "@@/*": ["./ui/src/*"]
  }
}
```

where `ui` is the destination directory of the Git submodule

**For Tailwind (required)**

Example configuration can be found in `tailwind.config.js`

**In `package.json`**

```json
{
  "scripts": {
    "build": "pnpm submodule && next build",
    "submodule": "git submodule update --init --recursive --remote"
  }
}
```

**For other package bundlers**

Setup path resolvers similar to:

```json
{
  "paths": {
    "@artizon/ui": ["./ui"],
    "@artizon/ui/next": ["./ui/next"],
    "@artizon/ui/next-client-components": ["./ui/next-client-components"],
    "@@/*": ["./ui/src/*"]
  }
}
```

**Change UI lib version**

1. `cd` into submodule
2. `git checkout <ref>`
3. Stage/commit the submodule reference

## Why distribution by source?

**Advantages**

- Unified build pipeline
- Minus the headaches of dependency management (peer dependencies, optional dependencies)
- Free to go private (as NPM private packages require monthly subscriptions)

**Disadvantages**

- More complex to deploy (e.g. edge)

## Development Setup

1. Clone the UI lib to local
2. Replace the submodule with a symbolic link to that repo. ⚠️ Don't stage/commit the symbolic link

**If you accidentally stage/commit the symlink**

1. Remove `.git/modules/<xxx>`
2. Remove entry from `.git/config`

Still doesn't work?

- Try `git rm --cache -r <xxx>`
- As the last resort, do `git reset --hard`

## License

MIT
