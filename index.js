class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let skip = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let fixed = [];
    let wordArray = string.split(' ')
    for (const word of wordArray) {
      if (word == wordArray[0]) {
        fixed.push( this.capitalize(word) )
      }
      else {
        if (skip.includes(word)) {
          fixed.push(word)
        }
        else {
          fixed.push( this.capitalize(word) )
        }
      }
    }
    return fixed.join(' ')
  }

}