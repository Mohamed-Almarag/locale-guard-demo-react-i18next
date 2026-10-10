# Locale Guard demo: React with react-i18next

A small React workout tracker in English, Arabic, German and Japanese,
translated with [react-i18next](https://react.i18next.com). Each language is a
folder of namespace files, and plurals use i18next suffixes: `count_one`,
`count_other`, and in Arabic also `_zero`, `_two`, `_few` and `_many`. It shows
what [Locale Guard](https://github.com/Mohamed-Almarag/locale-guard) reports on
real pull requests.

## Setup

| | |
|---|---|
| Framework | React 19 with Vite |
| Translation library | `react-i18next`, files loaded by `i18next-http-backend` |
| Locale files | `public/locales/{locale}/*.json`: `public/locales/ar/workouts.json` holds the `workouts` namespace in Arabic |
| Base locale | `en` |

The whole setup is one workflow file,
[.github/workflows/translations.yml](.github/workflows/translations.yml):

```yaml
- uses: Mohamed-Almarag/locale-guard@v1
  with:
    files: public/locales/{locale}/*.json
    format: react-i18next
```

Locale Guard reads plural keys per language: English needs `_one` and `_other`,
Arabic needs six forms, and Japanese needs only `_other`. A Japanese file with
just `count_other` is complete, and an Arabic file with six forms has no extra
keys.

## Pull requests to look at

| Pull request | What it shows | Result |
|---|---|---|
| [#1 Add weekly goals](https://github.com/Mohamed-Almarag/locale-guard-demo-react-i18next/pull/1) | A plural Arabic never got, so the copy-paste block lists the six forms Arabic needs; a German plural without `_other`; a renamed `{{count}}`; an empty value; untranslated text and an extra key | ❌ Fails |
| [#2 Add rest days](https://github.com/Mohamed-Almarag/locale-guard-demo-react-i18next/pull/2) | The first commit forgets German and Japanese, the second one adds them, and the same comment turns green | ✅ Passes |
| [#3 Highlight the streak](https://github.com/Mohamed-Almarag/locale-guard-demo-react-i18next/pull/3) | A change that touches no translation file, so the check finishes in seconds | ✅ Passes |

The `main` branch already has old issues: a plural German never got, and an
Arabic plural with two of its six forms. Locale Guard lists them apart from the
issues each pull request adds, collapsed, and they do not fail the check.

## Run the app

```bash
npm install
npm run dev
```
