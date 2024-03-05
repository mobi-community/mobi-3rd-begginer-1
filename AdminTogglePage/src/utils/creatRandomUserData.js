import { ALPHABET } from "../const/ALPHABET"

/**
 * @param startNumber - number : 랜덤한숫자생성의 시작숫자(정수로)
 * @param endNumber - number : 랜덤한숫자생성의 마지막숫자(정수로)
 * @description startNumber,endNumber 를입력받아 startNumber~number 까지 랜덤한 정수 반환
 */
const getRandomNumber = (startNumber, endNumber) => {
  return Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber
}

/**
 * @description
 * - 랜덤하게 생성된 영어이름의 길이값을 생성합니다 randomNameLength
 * -
 */
const creatRandomUserName = () => {
  const randomNameLength = getRandomNumber(3, 8) // 랜덤하게 생성될 영어이름의 이름길이

  // 26개의 알파벳중 랜덤한 알파벳을 randomNameLength만큼 선택해서 하나의 배열로 반환
  const pickedAlphabet = Array(randomNameLength)
    .fill(0)
    .map(() => ALPHABET[getRandomNumber(0, ALPHABET.length - 1)])
  pickedAlphabet[0] = pickedAlphabet[0].toUpperCase()
  const randomName = pickedAlphabet.join("")
  return randomName
}

const creatRandomUserBirth = () => {
  const getYear = () => {
    const year = getRandomNumber(
      new Date().getFullYear() - 100,
      new Date().getFullYear()
    )
    return String(year)
  }

  const getMonth = () => {
    const getMonth = getRandomNumber(1, 12)
    if (getMonth < 10) {
      const stringMonth = "0" + String(getMonth)
      return stringMonth
    }
    const stringMonth = String(getMonth)
    return stringMonth
  }
  const getDay = () => {
    const getDay = getRandomNumber(1, 31)
    if (getDay < 10) {
      const stringDay = "0" + String(getDay)
      return stringDay
    }
    const stringDay = String(getDay)
    return stringDay
  }
  const birth = `${getYear()}-${getMonth()}-${getDay()}`
  return birth
}

const creatRandomPhone = () => {
  const fourDigitNumber = getRandomNumber(0, 9999)
  const phone = `010-${fourDigitNumber}-${fourDigitNumber}`
  return phone
}

const creatRandomLastLoginRecords = () => {
  const getYear = () => {
    const year = getRandomNumber(
      new Date().getFullYear() - 3,
      new Date().getFullYear()
    )
    return String(year)
  }

  const getMonth = () => {
    const getMonth = getRandomNumber(1, 12)
    if (getMonth < 10) {
      const stringMonth = "0" + String(getMonth)
      return stringMonth
    }
    const stringMonth = String(getMonth)
    return stringMonth
  }
  const getDay = () => {
    const getDay = getRandomNumber(1, 31)
    if (getDay < 10) {
      const stringDay = "0" + String(getDay)
      return stringDay
    }
    const stringDay = String(getDay)
    return stringDay
  }
  const LastLoginRecords = `${getYear()}.${getMonth()}.${getDay()}`
  return LastLoginRecords
}
export const creatRandomUserData = (numPeople) => {
  const MockData = Array(numPeople)
    .fill(0)
    .map((_, idx) => {
      return {
        id: idx,
        name: creatRandomUserName(),
        birth: creatRandomUserBirth(),
        phone: creatRandomPhone(),
        loginRecords: creatRandomLastLoginRecords(),
      }
    })
  console.log(MockData)
  return MockData
}
