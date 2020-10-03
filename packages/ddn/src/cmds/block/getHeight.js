import { init, getHeight } from '../../plugins/api'

module.exports = {
  command: 'getHeight',
  aliases: 'height',
  desc: 'Get block height',
  builder: {},

  handler: function (argv) {
    init(argv)
    getHeight(argv)
  }
}
