// const nodeSdk = require('./lib').default
// const node = {
//   keypair: {
//     publicKey: 'b2c06f9ea640e545a8ee895b5b2353c9da2f5d62bee23a5ed7af6e0cbd74bcb9',
//     privateKey:
//       '53124d7091ed8b43ad0243d125da658eeb9a37c6c9912ce7c45e7791de37e171b2c06f9ea640e545a8ee895b5b2353c9da2f5d62bee23a5ed7af6e0cbd74bcb9'
//   },
//   Gaccount: {
//     address: 'D6e3qXMXeMNJrxz39y8VpiQBP3eWNvGHWs',
//     password: 'enter boring shaft rent essence foil trick vibrant fabric quote indoor output'
//   },
//   nethash: '899tg1xh',
//   Daccount: {
//     address: 'D7mAEwZJ1ueWNQ5hpMeCdoXgfNzEipTCwK',
//     publicKey: '679c073e6fab284398c213ea7d01a8d4f2f384060086fb17a78caca39e5893e5',
//     password: 'expand abstract call cattle report shy mercy toss clip ivory together index'
//   },
//   Eaccount: {
//     address: 'DAwqtaU9XNfJ1bUffmYbM2MTd4m7sKijeo',
//     publicKey: '1ab2070455a9969cab2b3f0614b90de5c99a9d620701593337bf6c50b5a973c5',
//     password: 'sentence party panda damp maple always seat offer tortoise virus elegant recipe'
//   }
// }
// async function name (params) {
//   const evidence = {
//     source_address: '资源地址', // string
//     title: '标题', // string
//     description: '描述', // string
//     hash: 'md5Values', // string
//     short_hash: 'md5SliceValues', // string
//     author: '作者', // string
//     size: '大小', // string
//     type: '类型', // string
//     time: '1626962107472', // string
//     tags: 'evidence', // string
//     metadata: '{userId:11,photourl:"xxx"}' // string
//   }
//   const transaction = await nodeSdk.evidence.createEvidence(evidence, node.Gaccount.password)
//   console.log(JSON.stringify({ transaction }))
// }
// name()
const Ajv = require('ajv')
const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' }
  },
  required: ['foo'],
  additionalProperties: false
}

const data = { foo: 1 }
const valid = ajv.validate(schema, data)
if (!valid) console.log(ajv.errors)
