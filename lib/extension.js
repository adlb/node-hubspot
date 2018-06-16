class Extension {
  constructor (client) {
    this.client = client
  }

  create(data, cb) {
    return this.client._request({
      method: 'POST',
      path: '/extensions/sales-objects/v1/object-types',
      body: data
    }, cb)
  }

  view(id, cb) {
    return this.client._request({
      method: 'GET',
      path: '/extensions/sales-objects/v1/object-types/' + id
    }, cb)
  }

  modify(id, data, cb) {
    return this.client._request({
      method: 'POST',
      path: '/extensions/sales-objects/v1/object-types/' + id,
      body: data
    }, cb)
  }

  delete(id, cb) {
    return this.client._request({
      method: 'DELETE',
      path: '/extensions/sales-objects/v1/object-types/' + id
    }, cb)
  }
}

module.exports = Extension