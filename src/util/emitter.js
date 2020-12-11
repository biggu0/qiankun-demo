class Emitter {
  constructor () {
    this.chanMap = {}
  }

  on (chan, handler) {
    if (!this.chanMap[chan]) {
      this.chanMap[chan] = new Set()
    }

    this.chanMap[chan].add(handler)
  }

  off (chan, handler) {
    if (!this.chanMap[chan]) return

    this.chanMap[chan].delete(handler)
  }

  emit (chan, msg) {
    if (!this.chanMap[chan]) return
    for (const fn of this.chanMap[chan].values()) { // eslint-disable-line no-restricted-syntax
      try {
        fn(msg)
      } catch (err) {
        console.error(`emitter [${chan}] ${fn} error: `, err)
      }
    }
  }
}

export default new Emitter()
