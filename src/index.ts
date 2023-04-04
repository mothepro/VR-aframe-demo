import 'aframe'

setTimeout(() => alert('This is from mo!'), 5_000)
document.querySelector('a-entity').addEventListener('model-error', console.error)
document.querySelector('a-entity').addEventListener('model-loaded', console.warn)
