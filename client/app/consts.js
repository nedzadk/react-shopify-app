
// Boilerplate

let api_base = 'http://localhost:3000'
if (__PRERELEASE__)
  api_base = 'TODO https://api-stage.example.com'
else if (__RELEASE__)
  api_base = 'TODO https://api.example.com'
export const API_BASE = api_base

let www_base = 'TODO http://www.example.local:3000'
if (__PRERELEASE__)
  www_base = 'TODO https://www-stage.example.com'
else if (__RELEASE__)
  www_base = 'TODO https://www.example.com'
export const WWW_BASE = www_base

export const APP_NAME = 'Nechko Plugin'
export const SUPPORT_EMAIL = 'nedzadk@gmail.com'
export const COMPANY_NAME = 'Nechko Inc.'

export const validations = {
  email: 'nedzadk@gmail.com',
  url:   'nechko.myshopify.com',
  equal: (a, b) => `${a} does not match the ${b}`,
}
