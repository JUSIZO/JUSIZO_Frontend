// JavaScript로 탭을 관리
function openTab(tabName) {
    // 모든 탭 숨기기
    var tabs = document.getElementsByClassName("custom-box");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    // 선택한 탭 표시
    document.getElementById(tabName).style.display = "block";
}

// 탭 버튼에 이벤트 리스너 추가하여 활성화 상태 변경
let btns = document.querySelectorAll(".nav-link");
btns.forEach((selectedBtn) => {
    selectedBtn.addEventListener("click", (e) => {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        selectedBtn.classList.add("active");
    });
});
