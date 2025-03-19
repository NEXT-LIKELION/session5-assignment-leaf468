const choices = ["가위", "바위", "보"];
const mapping = {
    가위: 0,
    바위: 1,
    보: 2,
};

const userInput = prompt("가위, 바위, 보 중 하나를 입력하세요.");
if (!(userInput in mapping)) {
    alert("올바른 입력이 아닙니다.");
} else {
    const userChoice = mapping[userInput];
    const computerChoice = Math.floor(Math.random() * 3);

    alert(`컴퓨터 선택: ${choices[computerChoice]}`);

    if (userChoice === computerChoice) {
        alert("비겼습니다!");
    } else if ((userChoice - computerChoice + 3) % 3 === 1) {
        alert("사용자 승리!");
    } else {
        alert("컴퓨터 승리!");
    }
}
