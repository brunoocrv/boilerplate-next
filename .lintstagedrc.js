module.exports = {
  '*.{js, tsx, ts, tsx}': (filenames) => [
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}