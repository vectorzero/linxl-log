const colors = require('colors')
const log = args => process.stdout.write(args + '\n')

const setColor = (color = true) => (color ? colors.enable() : colors.disable())

const colorMap = {
  silly: 'rainbow',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
}

colors.setTheme(colorMap)

const getDate = () => {
  const date = new Date()
  const hours = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${hours}:${minute}:${second}`
}

let results = {}
for (let k in colorMap) {
  if (k === 'silly') {
    results['silly'] = arg =>
      log(
        colors.rainbow('[silly]:') +
          colors.bold.gray(getDate()) +
          ` ${arg}`.silly
      )
  } else {
    results[k] = arg =>
      log(
        colors.bold[colorMap[k]](`'[${k}]:'`) +
          colors.bold.gray(getDate()) +
          ` ${arg}`[k]
      )
  }
}

module.exports = results
