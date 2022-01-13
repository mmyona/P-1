// template
const aTemplate = require('./pages/자유.hbs')
const bTemplate = require('./pages/비밀.hbs')
const cTemplate = require('./pages/정보.hbs')
const dTemplate = require('./pages/홍보.hbs')
const eTemplate = require('./pages/SW.hbs')
const homeTemplate = require('./pages/home.hbs')
const loginTemplate = require('./pages/login.hbs')
const signupTemplate = require('./pages/signup.hbs')
const fTemplate = require('./pages/write.hbs')
const gTemplate = require('./pages/read.hbs')

const Home = homeTemplate()
const a= aTemplate()
const b = bTemplate()
const c = cTemplate()
const d = dTemplate()
const e = eTemplate()
const login = loginTemplate()
const signup = signupTemplate()
const f = fTemplate()
const g = gTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/자유': a,
  '/비밀': b,
  '/정보': c,
  '/홍보': d,
  '/SW': e,
  '/login': login,
  '/signup': signup,
  '/write': f,
  '/read' : g
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

