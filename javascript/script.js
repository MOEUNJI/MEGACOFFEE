const content = document.getElementsByClassName('content');
// 공통 클래스인 content 불러옴
window.addEventListener('scroll', () => {
    // 윈도우에 스크롤 했을 때
    const winH = window.innerHeight;
    // winH = 브라우저 위쪽에 잡다한거 빼고 콘텐츠가 표시되는 부분의 height만 대입함

    for (let i = 0; i < content.length; i++) {
        // i 가 content 의 갯수보다 작으면 i는 content의 갯수만큼 증가함
        const contentTop = content[i].getBoundingClientRect().top;
        // i 번째에 있는 요소의 top으로부터의 거리를 계산해서 contentTop에 대입함

        //-------------- getBoundingClientRect()로 얻을 수 있는것들!!!---------------------
        // top, bottom, left, right, width, height, x, y의 값이 출력됩니다.
        // top or y - 화면 상단 부터 대상의 처음 위치 값
        // bottom - 화면 상단 부터 대상의 끝 위치 값
        // left or x - 화면 좌측 부터 대상의 처음 위치 값
        // right - 화면 좌측 부터 대상의 끝 위치 값
        // width - 대상의 길이
        // height - 대상의 높이


        if (contentTop - winH < 0) {
            // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값 - 브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 작으면
            content[i].classList.add('in');
            // content 의  i 번째에 있는 요소에 in 을 붙여준다
        }
        if (contentTop - winH > 0) {
            // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값-브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 크면 
            content[i].classList.remove('in');
            // content 의 i 번째에 있는 요소에 in 을 제거해서 스크롤을 올렸다가 다시 내려도 다시 작동하게 함
        }
    }
})

let containerFirst = document.getElementsByClassName("introduction-container")[0];
// container = 버튼들이 들어있는 ul
let controller = containerFirst.children[0];
// controller = 버튼들이 들어있는 ul의 첫번째 li
let liList = controller.children;

let textArea = document.getElementsByClassName("text-area")[0];
// textArea = 텍스트들이 들어있는 ul
let textAreaUl = textArea.children[0];
// textAreaUl = 텍스트들이 들어있는 ul의 첫번째 li
let textAreaLi = textAreaUl.children;

let n = 0;

for (let i = 0; i < liList.length; i++) {
    liList[i].index = i;

    liList[i].addEventListener("click", function (e) {
        e.preventDefault();
        n = e.currentTarget.index;


        for (let j = 0; j < liList.length; j++) {
            if (j == n) {
                liList[j].classList.add("on");
                textAreaLi[j].classList.add("active");
            }
            else {
                liList[j].classList.remove("on");
                textAreaLi[j].classList.remove("active");
            }
        }

    });
};

const buttons = document.querySelector('.buttons');
// 닷을 포함한 prev,next 를 모두 감싸는 버튼의 컨테이너
const container = document.querySelector('.container');
// 슬라이더의 일부분만 보여주는 컨테이너
const slider = document.querySelector('.slider');
// width가 큰 모든 sliderContent가 들어있음
const buttonContainer = document.querySelector('.button-container');
// dot 만들기 위한 dot 컨테이너라고 보면 됨
const sliderWidth = 1920;
// 슬라이더 한 장 한 장의 크기
const sliderLength = slider.childElementCount;
//ul의 자식의 갯수
let moveCheck = true;

for (let i = 0; i < sliderLength; i++) { //li 갯수만큼 반복
    const makeDiv = document.createElement('div'); //div 태그 생성
    makeDiv.classList.add('dot'); //생성한 div태그에 dot 이라는 클래스 부여 ex) <div class="dot"></div>
    buttonContainer.appendChild(makeDiv); //버튼 컨테이너 안에 방금 만든 노드 자식요소로 추가
    makeDiv.addEventListener('click', () => {
        // 생성한 dot 을 클릭했을때
        index = i + 1;
        // dot 의 인덱스는 0 번일때 슬라이드의 인덱스는 1번이 보여야하므로 슬라이더(index) 에 i+1을 대입해준것
        moveSlider(1000);
    })

}
buttonContainer.children[0].classList.add('active2'); // 첫번째 버튼 활성화
// 브라우저를 켰을 때 1번 li 가 보이니까 제일 처음 dot 에 색이 선택되어있어야함



const first = slider.firstElementChild.cloneNode(true);
// html로 추가하지 않고 노드복사 ul의 첫번째 자식복사
const last = slider.lastElementChild.cloneNode(true);
// html로 추가하지 않고 노드복사 ul의 마지막 자식복사

slider.appendChild(first);
// 마지막에 첫번째 자식 복사한걸 넣어줌
slider.insertBefore(last, slider.firstElementChild);
// ul의 첫번재에 마지막 자식 복사한거 넣어줌 
// ex ) 0 1 2 3 4 5 6 = 5 1 2 3 4 5 1

slider.style.width = slider.childElementCount * sliderWidth + 'px';
// ul의 스타일(너비)를 = ul의 자식갯수(li갯수) * 1000(li 하나하나의 width)

let index = 1;
// 처음 브라우저를 열었을 때 보이는 슬라이더의 인덱스는 1이어야 하니까 1을 대입함
container.children[0].style.transform = 'translateX(-' + (index * 1920) + 'px)';

buttons.children[0].addEventListener('click', prev);
buttons.children[1].addEventListener('click', next);

setInterval(() => {
    next();
}, 5000);
//5초에 한 번씩 next 함수 실행


const inputText = document.getElementById("input-text");
let btn = document.querySelector(".search-btn");
btn.addEventListener("click", input);
window.addEventListener("keyup", (e)=> {
    if(e.key == "Enter" && inputText === document.activeElement) {
        //inputText === document.activeElement (활성화된게 inputText 일때 엔터를 누르면 먹음(inputText 없으면 안 먹음))
        input();
    }
});







function prev() {
    if (moveCheck) {
        moveCheck = false;
        // 연속으로 눌러 에러가 나는 현상을 방지하기 위해 prev 버튼을 클릭하면 더 이상 클릭하지 못하게 막음
        index--;
        // prev 버튼이니 이전으로 가야하므로 --

        setTimeout(() => {
            if (index === 0) {
                // prev버튼을 눌러 인덱스가 0이 되었다면(노드 복사해서 appendChild로 넣어준 5번 화면이 되었다면)
                index = slider.childElementCount - 2;
                // 인덱스에 ul>li의 갯수에서 2를 뺀 (5번)을 대입해준다
                moveSlider(0);
            }
            moveCheck = true;
            // 왼쪽으로 가는 무빙이 끝난 후에 다시 prev 버튼을 클릭 할 수 있게 moveCheck 를 true로 바꿔줌

        }, 1000)
        moveSlider(1000);
    }
}

function next() {
    if (moveCheck) {
        moveCheck = false;
        // 연속으로 눌러 에러가 나는 현상을 방지하기 위해 prev 버튼을 클릭하면 더 이상 클릭하지 못하게 막음
        index++;
        //  next 버튼이니 다음으로 가야하므로 ++

        setTimeout(() => {
            // 
            if (index === slider.childElementCount - 1) {
                // 버튼을 눌러 인덱스가 6이 되었다면(노드 복사해서 insertBefore(last, slider.firstElementChild);로 넣어준 1번 화면이 되었다면)
                index = 1;
                // 인덱스에 1을 대입해준다 (0번은 복사해서 넣은 5번화면이기에 1번대입)
                moveSlider(0);
            }
            moveCheck = true;
            // 오른쪽으로 가는 무빙이 끝난 후에 다시 next 버튼을 클릭 할 수 있게 moveCheck 를 true로 바꿔줌
        }, 1000)
        moveSlider(1000);
    }
}
function updateButtons() {
    for (let i = 0; i < sliderLength; i++) {
        buttonContainer.children[i].classList.remove('active2');
        // 닷을 담고있는 컨테이너의 모든 자식들한테서 active를 제거해놓음
    }
    if (index === 0) {
        // 인덱스가 0 과 같다면(5번 화면을 가리키고 있다면)
        buttonContainer.children[sliderLength - 1].classList.add('active2');
        // 닷을 담고있는 컨테이너의 자식 sliderLength = slider.childElementCount;(5)-1 = 4 즉 마지막 인덱스(4)를 가지고 있는 닷에 active를 붙여준다.
    } else if (index === sliderLength + 1) {
        // 인덱스가 (5+1) = 6 이라면 즉 숫자 1 화면이 보이고 있다면
        buttonContainer.children[0].classList.add('active2');
        // 닷을 담는 컨테이너의 첫번째 닷에 active붙여줌
    } else {
        buttonContainer.children[index - 1].classList.add('active2');
        // index-1 = 숫자1 화면이 보이려면 닷의 인덱스는 0번이 선택되어야하고 숫자 2 화면이 보이려면 닷의 인덱스는 1번이라서 index - 1
        // 닷을 담는 컨테이너의 자식의 index - 1 한 닷의 인덱스에 active 붙여준다
    }
}
function moveSlider(time) {
    // 매개변수로 써줘서 인수로 time을 넣어줌(어디에 넣든 값을 바꿀 수 있도록)
    slider.style.transition = time + 'ms';
    container.children[0].style.transform = 'translateX(-' + (index * 1920) + 'px)';
    updateButtons();
}



function input() {
    window.open("https://www.google.com/maps/search/%EB%A9%94%EA%B0%80%EC%BB%A4%ED%94%BC " + inputText.value + "/data=!3m1!4b1");
}