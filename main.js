// "imports": {
//       "@popperjs/core": "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js",
//       "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.esm.min.js"
// }
// import * as bootstrap from 'bootstrap'

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')

const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')

const toastTrigger4 = document.getElementById('liveToastBtn4')
const toastLiveExample4 = document.getElementById('liveToast4')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
    toastTrigger2.addEventListener('click', () => {
      toastBootstrap.show()
    })
}

if (toastTrigger3) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
    toastTrigger3.addEventListener('click', () => {
      toastBootstrap.show()
    })
}

if (toastTrigger4) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample4)
    toastTrigger4.addEventListener('click', () => {
      toastBootstrap.show()
    })
}