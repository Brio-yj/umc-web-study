         function add(char) {
        var display = document.getElementById('display'); // 우리가 식을 입력할 input 태그를 불러옵니다.
        // display.value는 input 태그 안에 들어 있는 값을 의미합니다.
        display.value += char;
        // display.value += char; 로 쓸 수도 있습니다.
        // input 태그의 값 뒤에 char 문자를 추가해 주는 역할을 합니다.
        }
        function calculate() {
        var display = document.getElementById('display');
        var result = eval(display.value); // 식을 계산하고 result 변수에 저장합니다.
        document.getElementById('result').value = result;
        }
        function reset() {
        document.getElementById('display').value = "";
        document.getElementById('result').value = "";
        }
        var numberClicked = false; // 전역 변수로 numberClicked를 설정
        function add (char) {
            if(numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,
                if(isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,
                // 아무것도 하지 않는다.
                } 
                else { // 연산자가 아니라면!
                document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                }
            }
            else { // 만약에 이전에 숫자를 입력 했으면,
            document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
            }   
 
 
        // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
        if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
            numberClicked = false; // numberClicked를 false로 설정한다.
        } 
        else {
            numberClicked = true; // numberClicked를 true로 설정한다.
        }
    }