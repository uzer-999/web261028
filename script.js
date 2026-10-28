
// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)

// 1. 영화 제목, 평점, 개봉 연도
const titles = ["인셉션", "인터스텔라", "다크 나이트", "기생충", "파이트 클럽"];
const ratings = [8.4, 8.5, 8.5, 8.5, 8.4];
const years = [2010, 2014, 2008, 2019, 1999];

// 2. 평점 합계
let sum = 0;

for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}

console.log("합계:", sum);

// 3. 평균 평점
const average = sum / ratings.length;

console.log("평균:", average);

// 4. 최고 평점 영화와 8점 이상 영화 개수
let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > max) {
    max = ratings[i];
    maxIndex = i;
  }

  if (ratings[i] >= 8) {
    count++;
  }
}

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

// 5. 영화별 등급 출력
for (let i = 0; i < ratings.length; i++) {
  let label;

  if (ratings[i] >= 8.5) {
    label = "명작";
  } else if (ratings[i] >= 7) {
    label = "추천";
  } else {
    label = "보통";
  }

  console.log(
    titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label
  );
}

// 6. 요약 한 줄
const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

// 7. DOM 보너스: 기존 HTML의 평균 평점 영역에 표시
document.getElementById("stats").textContent =
  "평균 " + avgText + "점";
