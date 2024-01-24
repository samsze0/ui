# UI

A React UI component library compatible with Next13.

Many of my own projects are developed with this UI library. Components in this library are heavily scoped to those specific projects and hence are not suitable for general use.

Credits to shadcn/ui for the initial inspiration.

**Dependencies**

- Tailwind (required)
- Zustand (required)
- RadixUI (required)
- NextJS 13
- Supabase
- Tanstack query
- Tanstack table
- Framer motion
- `i18next` & `react-i18next` (not using `next-i18next` or NextJS's built-in i18n features)
- React-hook-form (required for forms)

See `package.json` for exhaustive list of required/optional peer dependencies

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
    "@@/*": ["<path-to-ui>/src/*"]
  }
}
```

**For Tailwind (required)**

Copy example configuration from [samsze1/ui-demo](https://github.com/samsze1/ui-demo)

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

Setup path resolvers similar to the `tsconfig` above.

**Change UI lib version**

1. `cd` into submodule
2. `git checkout <ref>`
3. Stage/commit the submodule reference

**Not working?**

See example project in [samsze1/ui-demo](https://github.com/samsze1/ui-demo)

## Why distribution by source?

**Advantages**

- Unified build pipeline
- Minus the headaches of dependency management (peer dependencies, optional dependencies)

**Disadvantages**

- More complex to deploy (e.g. for edge)

## Development Setup

This step is optional. Developing within the submodule rather can make things simpler for multi projects setup.

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
