exports.assertion = function (selector, count) {
  this.message = `Testing if <${selector}> has count: ${count}`
  this.expected = count
  this.pass = actual => actual === this.expected
  this.value = result => result.value

  this.command = function (callback) {
    var self = this
    return this.api.execute(
      function (selector) {
        return document.querySelectorAll(selector).length
      },
      [selector],
      function (res) {
        callback.call(self, res)
      }
    )
  }
}
