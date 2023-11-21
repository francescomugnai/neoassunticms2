// This is all you.

import Alpine from 'alpinejs'
window.Alpine = Alpine

// Componenti Alpine 
import sticky from './alpine/sticky.js'
import loadToolkit from './alpine/loadToolkit.js'
import scroll from './alpine/scroll.js'
import burger from './alpine/burger.js'
import closemenu from './alpine/closemenu.js'

// Li carico 
Alpine.data('sticky', sticky)
Alpine.data('loadToolkit', loadToolkit)
Alpine.data('scroll', scroll)
Alpine.data('burger', burger)
Alpine.data('closemenu', closemenu)

// Inizializzo
Alpine.start()
