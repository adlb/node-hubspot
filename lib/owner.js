class Owner {
  constructor (client) {
    this.client = client
  }

  get (options = { inactives: false, email: undefined }, cb) {
    const URLoptions = '?includeInactive=' + options.inactives + (options.email ? '&email=' + options.email : '')

    return this.client._request({
      method: 'GET',
      path: '/owners/v2/owners' + URLoptions
    }, cb)
  }
}

module.exports = Owner
