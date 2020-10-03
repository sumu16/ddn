import { init, delegateStat } from '../../plugins/maintain'

module.exports = {
  command: 'delegateStat',
  aliases: 'DStat',
  desc: 'Analyze delegates status',
  builder: {},

  handler: function (argv) {
    init(argv)
    delegateStat(argv)
  }
}
