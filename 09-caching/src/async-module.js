function getComponent() {
  return import('loadsh').then(({ default: _ }) => {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  })
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
