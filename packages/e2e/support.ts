/// <reference types="cypress" />
import * as toolbelt from 'ts-toolbelt'

// Workaround for @testing-library/dom problem.
// We should be able remove it in the future.
if (typeof global === 'undefined') {
  Object.assign(window, { global