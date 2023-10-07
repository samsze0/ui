# Artizon UI

A React component library compatible with Next13.

Many Artizon products are developed with this component library. Components in this library are heavily scoped to those specific projects and hence are not suitable for general use.

**Stack**

- Supabase
- Tanstack query
- Tailwind
- Framer motion
- I18next
- React-hook-form
- Zustand
- RadixUI
- shadcn/ui

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
  },
}
```

**For other package bundlers**

Setup path resolvers similar to the example with NextJS

## Why use Git Submodules?

This project is intended to be distributed by source. The problem with `shadcn/ui`'s approach (NPM scripts that copies the source to the intended locations) is that it inevitably leaves stale copies of the source code in many places. With Git submodules this wouldn't be an issue. However, the tradeoff is that anyone who wishes to add custom modifications to the source code will need to fork this repo and setup submodules themselves.

## Tradeoffs of Distribution-by-source

- Unified build pipeline
- Minus the headaches of dependency management (peer dependencies, optional dependencies)
- Free to go private (as NPM private packages require monthly subscriptions)
- More complex to deploy (e.g. edge)

## Development Setup

If you would like to develop side-by-side, the following setup is recommended:

1. Clone your (or this) components library repo
2. Setup a local symbolic link to your repo

## License

MIT
