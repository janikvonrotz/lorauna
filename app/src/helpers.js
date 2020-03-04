import { get } from 'lodash'

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

const groupBy = (collection, path) => {
  return collection.reduce((accumulator, object) => {
    const key = get(object, path)
    !accumulator[key] ? (accumulator[key] = []) : (accumulator[key].push(object))
    return accumulator
  }, {})
}

export { ObjectId, groupBy }
