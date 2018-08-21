import Webz from './webz'

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Webz === 'undefined') {
  window.Webz = Webz
}

export default Webz
