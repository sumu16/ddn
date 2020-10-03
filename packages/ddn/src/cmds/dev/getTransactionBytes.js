import { init, getTransactionBytes } from '../../plugins/api'

module.exports = {
  command: 'getTransactionBytes',
  aliases: 'GTB',
  desc: 'Get transaction bytes',
  builder: {
    file: {
      alias: 'f',
      describe: 'transaction file'
    }
  },

  handler: function (argv) {
    init(argv)
    getTransactionBytes(argv)
  }
}
