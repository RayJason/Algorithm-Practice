import fs from 'fs-extra'

/**
 * 原则：
 * 1. 数据内容以newArr为准
 * 2. id唯一
 */

const testIndex = 802

function planA(oldArr, newArr) {
  console.log(newArr[testIndex])
  console.time('planA')

  // 根据标签名首字母排序
  const latestTagsSort = newArr.sort((a, b) => a.name.localeCompare(b.name))
  // const latestTagsSort = newArr // 新数组不按照首字母排序

  let result = []

  // 遍历oldArr，保持原本的id顺序
  for (const tag of oldArr) {
    const existIndexInNew = latestTagsSort.findIndex(
      (item) => item.id === tag.id
    )
    if (existIndexInNew !== -1) {
      // 未删除（重命名/未重命名）的tag
      result.push(latestTagsSort[existIndexInNew])
      // 从新数组中删除已保存的tag 剩下的就是新增的
      latestTagsSort.splice(existIndexInNew, 1)
    }
  }

  result = result.concat(newArr)

  console.timeEnd('planA')
  console.log(result[testIndex])
}

function planB(oldArr, newArr) {
  console.log(newArr[testIndex])
  console.time('planB')

  const hash = {}
  oldArr.forEach((tag, i) => (hash[tag.id] = i))
  newArr.sort((a, b) => {
    const seqA = hash[a.id]
    const seqB = hash[b.id]
    if (seqA && seqB) return seqA - seqB
    if (seqA) return -1
    if (seqB) return 1
    return a.name.localeCompare(b.name)
    // return 1 // 新数组不按照首字母排序
  })

  console.timeEnd('planB')
  console.log(newArr[testIndex])
}

async function test() {
  const newArr = await fs.readFile('./utils/newArr.json', 'UTF8')
  const oldArr = await fs.readFile('./utils/oldArr.json', 'UTF8')

  console.log('读取newArr成功', JSON.parse(newArr).length)
  console.log('读取oldArr成功', JSON.parse(oldArr).length)

  planA(JSON.parse(oldArr), JSON.parse(newArr))
  planB(JSON.parse(oldArr), JSON.parse(newArr))
}

test()
