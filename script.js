const titles = [
  "인셉션",
  "인터스텔라",
  "다크 나이트",
  "기생충",
  "파이트 클럽"
];

const ratings = [8.4, 8.5, 8.5, 8.5, 8.4];
const years = [2010, 2014, 2008, 2019, 1999];

console.log("영화 제목 배열 길이:", titles.length);
console.log("평점 배열 길이:", ratings.length);
console.log("연도 배열 길이:", years.length);

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}

console.log("합계:", sum);

const average = sum / ratings.length;

console.log("평균:", average);

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
    titles[i] + " (" + years[i] + ") : " +
    ratings[i] + " " + label
  );

  const decade = years[i] - years[i] % 10;
  let decadeLabel;

  switch (decade) {
    case 1990:
      decadeLabel = "1990년대";
      break;
    case 2000:
      decadeLabel = "2000년대";
      break;
    case 2010:
      decadeLabel = "2010년대";
      break;
    case 2020:
      decadeLabel = "2020년대";
      break;
    default:
      decadeLabel = "기타 연도";
  }

  console.log("연도대:", decadeLabel);
}

let whileSum = 0;
let i = 0;

while (i < ratings.length) {
  whileSum = whileSum + ratings[i];
  i++;
}

console.log("while 합계:", whileSum);
console.log("for와 while 합계 일치:", sum === whileSum);

const avgText = average.toFixed(1);
const best = titles[maxIndex];

console.log(
  `내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`
);

document.getElementById("stats").textContent =
  "평균 " + avgText + "점";

alert(
  `내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`
);
