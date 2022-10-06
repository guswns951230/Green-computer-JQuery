/*
  
*/

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // progress bar가 있다면 실행
    if (document.querySelector(".progressbar") !== null) {
      // progress bar setting method
      setProgress();
    }
  });
});

// progress의 width를 scroll에 따라 수정
function setProgress() {
  // scroll한 높이
  let curreY = document.documentElement.scrollTop;
  console.log(curreY);
  // 전체 높이
  let totalY =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log(totalY);

  // 퍼센트로 바꿔 progress css의 width 값에 넣기
  let percentage = (curreY / totalY) * 100;
  document.querySelector(".progress").style.width = percentage + "%";
}
