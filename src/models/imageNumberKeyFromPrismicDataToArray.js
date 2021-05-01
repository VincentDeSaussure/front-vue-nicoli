export function imageNumberKeyFromPrismicDataToArray(data) {
  return Object.keys(data).filter(key => key.match(/^image\d$/)).map(key => data[key])
}