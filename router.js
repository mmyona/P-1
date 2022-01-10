// template
const aTemplate = require('./pages/자유.hbs')
const bTemplate = require('./pages/비밀.hbs')
const cTemplate = require('./pages/정보.hbs')
const dTemplate = require('./pages/홍보.hbs')
const eTemplate = require('./pages/SW.hbs')
const homeTemplate = require('./pages/home.hbs')
const loginTemplate = require('./pages/login.hbs')
const login2Template = require('./pages/login2.hbs')
const signupTemplate = require('./pages/signup.hbs')

const Home = homeTemplate()
const a= aTemplate()
const b = bTemplate()
const c = cTemplate()
const d = dTemplate()
const e = eTemplate()
const login = loginTemplate()
const login2 = login2Template()
const signup = signupTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/자유': a,
  '/비밀': b,
  '/정보': c,
  '/홍보': d,
  '/SW': e,
  '/login': login,
  '/login2': login2,
  '/signup': signup
}

// entry point
function initialRoutes (el) {
  renderHTML(el, routes['/'])
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname])
  }

// set browser history
function historyRouterPush (pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(el, routes[pathName])
}

// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  historyRouterPush
} 

