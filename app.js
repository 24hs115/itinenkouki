        function checkCode() {
            var number1 = document.getElementById('number_select1').value;
            var number2 = document.getElementById('number_select2').value;
            var number3 = document.getElementById('number_select3').value;
            var number4 = document.getElementById('number_select4').value;
            var result = "開かない"; // デフォルトの値

            if (number1 === "0" && number2 === "0" && number3 === "0" && number4 === "0") {
                result = "開いた　これは本当にやめたほうがいいね";
            } if else(number1 === "0" && number2 === "0" && number3 === "0" && number4 === "1") {
                result = "まさか1から試そうとしてないよね？"; 
            } if else(number1 === "1" && number2 === "2" && number3 === "3" && number4 === "4") {
                result = "開いた　覚えやすいよね"; 
            } if else(number1 === "2" && number2 === "5" && number3 === "2" && number4 === "5") {
                result = "開いた　結構な人が使ってると思う"; 
            } if else(number1 === "1" && number2 === "1" && number3 === "2" && number4 === "9") {
                result = "開いた　お肉好きなんだね"; 
            } if else(number1 === "3" && number2 === "1" && number3 === "5" && number4 === "0") {
                result = "開いた　サイコー！"; 
            } if else(number1 === "5" && number2 === "9" && number3 === "6" && number4 === "3") {
                result = "開いた　大声で叫ばないようにね"; 
            } if else(number1 === "7" && number2 === "7" && number3 === "7" && number4 === "7") {
                result = "開いた　運がよくなりそうだね"; 
            }
            else{
                    result = "開かない";
            }
            

            document.getElementById('result-output').innerText = result;
        }
