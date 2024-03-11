// 고유번호
// 이름
// 생년월일 YYYY-MM-DD
// 연락처
// 마지막 로그인
//1 | 김피넛 | 2003-03-03 | 010-****-1234 | 2023.03.02.13:52:36:22
import { faker } from "@faker-js/faker";
export const UserData = () => {
  //이름
  const randomUserName = () => {
    const firstName = [
      "김",
      "이",
      "박",
      "최",
      "정",
      "강",
      "조",
      "윤",
      "장",
      "임",
      "한",
      "오",
      "서",
      "신",
      "권",
      "황",
      "안",
      "송",
      "전",
      "홍",
      "고",
      "문",
      "양",
      "손",
      "배",
      "조",
      "백",
      "허",
      "유",
      "남",
    ];
    const lastName = [
      "서연",
      "하준",
      "지우",
      "민준",
      "서현",
      "준우",
      "지민",
      "도윤",
      "예은",
      "건우",
      "예원",
      "지훈",
      "소율",
      "재원",
      "예린",
      "지한",
      "서영",
      "민서",
      "시우",
      "다은",
      "서진",
      "지유",
      "민지",
      "승우",
      "다인",
      "민재",
      "서아",
      "윤우",
      "소민",
      "태영",
      "윤서",
      "은우",
      "지윤",
      "시아",
      "은서",
      "윤아",
      "우진",
      "하윤",
      "가온",
      "태민",
      "가윤",
      "재현",
      "가은",
      "태경",
      "다현",
      "가현",
      "승민",
      "나윤",
      "민영",
      "세은",
    ];
    const fullName =
      firstName[Math.floor(Math.random() * firstName.length)] +
      lastName[Math.floor(Math.random() * lastName.length)];
    return fullName;
  };

  // 생년월일 YYYY-MM-DD
  const randomUserBirth = () => {
    //날짜생성
    const startYear = 1920;
    const endYear = 2024;

    const randomYear =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDate = Math.floor(Math.random() * 31) + 1;
    const formattedMonth =
      randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
    const formattedDate = randomDate < 10 ? `0${randomDate}` : `${randomDate}`;
    // 월과 일이 한 자리 수일 경우 두 자리로 1~9 : 0+숫자 ,
    const fullBirth = `${randomYear}-${formattedMonth}-${formattedDate}`;
    return fullBirth;
  };

  // 연락처
  const randomPhoneNumber = () => {
    const randomNumber = `010-${Math.floor(Math.random() * 9000) + 1000}-${
      Math.floor(Math.random() * 9000) + 1000
    }`;
    const blindNumber = randomNumber.split("-");
    blindNumber[1] = "****";
    return blindNumber.join("-");
  };

  // 로그인시간
  const randomUserLogin = () => {
    const randomLogin = faker.date.between({
      from: "2020-01-01T00:00:00.000Z",
      to: "2024-03-01T00:00:00.000Z",
    });
    return randomLogin.toLocaleString("ja-JP").replace(/\//g, ".");
    /*
      const formattedMonth =
      randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
    const formattedDate = randomDate < 10 ? `0${randomDate}` : `${randomDate}`;
    // 월과 일이 한 자리 수일 경우 두 자리로 1~9 : 0+숫자 ,
    
    */
  };

  return Array(200)
    .fill()
    .map((array, index) => ({
      // page: Math.floor(index / 20) + 1,
      id: index + 1,
      name: randomUserName(),
      birthday: randomUserBirth(),
      number: randomPhoneNumber(),
      createdAt: randomUserLogin(),
    }));
};
