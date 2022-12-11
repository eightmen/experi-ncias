#!/bin/env node
//@ts-check

const { exec } = require('egzek')

const bots = ['dependabot-preview[bot]', 'dependabot[bot]']

const [output] = exec('npx all-contributors check', { stdio: 'pipe' })

let [header, missingContributors] = output.split('\n')

missingContributors = missingContributors
  .split(', ')
  .ma