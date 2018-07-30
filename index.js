const Webz = require('./lib/index')

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Webz === 'undefined') {
  window.Webz = Webz
}

module.exports = Webz
