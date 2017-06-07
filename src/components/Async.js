import Loadable from 'react-loadable'

import Loading from './Loading'

const Async = (options) => Loadable({
  LoadingComponent: Loading,
  delay: 300,
  ...options
})

export default Async