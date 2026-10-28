const titles = [
  "인셉션",
  "인터스텔라",
  "다크 나이트",
  "기생충",
  "파이트 클럽"
];

const ratings = [8.4, 8.5, 8.5, 8.5, 8.4];
const years = [2010, 2014, 2008, 2019, 1999];

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
  sum += ratings[i];
}

console.log("합계:", sum);

const average = sum / ratings.length;

console.log("평균:", average.toFixed(2) + "점");

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

console.log("최고 점수:", titles[maxIndex], max + "점");

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
    titles[i] + " (" + years[i] + ") " +
    ratings[i] + "점 " + label
  );
}

const avgText = average.toFixed(1);

alert(
  `내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${titles[maxIndex]}`
);
