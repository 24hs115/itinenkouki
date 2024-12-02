        function checkCode() {
            var number1 = document.getElementById('number-select1').value;
            var number2 = document.getElementById('number-select2').value;
            var number3 = document.getElementById('number-select3').value;
            var number4 = document.getElementById('number-select4').value;
            var result = "開かない"; // デフォルトの値

            if (number1 === "0" && number2 === "0" && number3 === "0" && number4 === "0") {
                result = "さすがに雑すぎる";
            } 
            

            document.getElementById('result-output').innerText = result;
        }