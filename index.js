
function theBeatlesPlay (musicians, instruments) {
  let arr = [];
  for (let n = 0; n < musicians.length; n ++) {
    arr.push(`${musicians[i]} plays ${instruments[n]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  const loudFacts = []

  let i = 0
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`)
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(num) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    num++
  } while (num < 15)
  return arr
}
