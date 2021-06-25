class Observer {
  subscriptions = []
  
  subscribe = (action, callback) => {
    this.subscriptions.push({ action, callback })
    
    return () => {
      this.subscriptions = this.subscriptions
        .filter(s => s.action !== action && s.callback !== callback)
    }
  }
  
  emit = (action, data) => {
    this.subscriptions
      .filter(s => s.action === action)
      .forEach(s => s.callback(data))
  }
}

const observer = new Observer()

const unsub = observer.subscribe('test', (data) => {
  console.log('handle test: ', data)
})

setTimeout(() => {
  console.log(1)
  observer.emit('test', 'hello world!')
  unsub()
  
  setTimeout(() => {
    console.log(2)
    observer.emit('test', 'hello world!')
  }, 2000)
}, 3000)
