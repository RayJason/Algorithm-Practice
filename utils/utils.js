import fs from 'fs-extra'

function randomString(length) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function initNewArr() {
  const newArr = []
  for (let i = 0; i < 1000; i++) {
    newArr.push({
      name: randomString(randomInt(10, 100)),
      id: i,
    })
  }

  fs.writeFile('./utils/newArr.json', JSON.stringify(newArr), (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('写入成功')
      initOldArr(newArr)
    }
  })
}

function initOldArr(newArr) {
  // 随机改名
  let maxId = newArr.length
  const oldArr = []
  newArr.forEach((tag) => {
    const randomNumber = randomInt(0, 10)

    if (randomNumber < 5) {
      oldArr.push({
        name: tag.name,
        id: tag.id,
      })
    } else if (randomNumber < 7) {
      // 重命名
      oldArr.push({
        name: tag.name + randomString(randomInt(10, 100)),
        id: tag.id,
      })
    } else if (randomNumber < 8) {
      oldArr.push({
        name: tag.name,
        id: tag.id,
      })

      // 新增
      maxId++
      oldArr.push({
        name: randomString(randomInt(10, 100)),
        id: maxId,
      })
    } else {
      // 删除
    }
  })

  // 打乱顺序
  oldArr.sort((a, b) => 0.5 - Math.random())

  fs.writeFile('./utils/oldArr.json', JSON.stringify(oldArr), (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('写入成功')
    }
  })
}

initNewArr()

export { randomString, randomInt }
