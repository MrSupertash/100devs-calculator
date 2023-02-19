function Calculator()  {
    methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    let numbers = {
        lastKey: '',
        calcStr: '',
        op: null,
        isOperator: false,
        num1: 0,
        num2: 0,
        currentNumber: 0,
    }
    

    this.start = function() {
        let validInputs = document.querySelectorAll('.num');
        console.log(validInputs);
        validInputs.forEach(element => element.addEventListener('click', input));
    };

    let convertIdToKey = function(key) {
        switch(key) {
            case 'num0':
                return '0';
                break;
            case 'num1':
                return '1';
                break;
            case 'num2':
                return '2';
                break;
            case 'num3':
                return '3';
                break;
            case 'num4':
                return '4';
                break;
            case 'num5':
                return '5';
                break;
            case 'num6':
                return '6';
                break;
            case 'num7':
                return '7';
                break;
            case 'num8':
                return '8';
                break;
            case 'num9':
                return '9';
                break;                
            case 'addition':
                return '+';
                break;
            case 'subtraction':
                return '-';
                break;
            case 'multiplication':
                return '*';
                break;
            case 'division':
                return '/';
                break;
            case 'decimalPoint':
                return '.';
                break;
            case 'result':
                return '=';
                break;
        };
    };

    let splitNums = function(key) {

        if (key === '+' ||
            key === '-' ||
            key === '*' ||
            key === '/' ||
            key === '=') {
                numbers.isOperator = true;
                numbers.op = key;
                console.log(numbers.calcStr);
                numbers.currentNumber = numbers.calcStr.slice(0, numbers.calcStr.length - 1);
            } else {
                // numbers.num1 = numbers.calcStr;
            };

            console.log(numbers.currentNumber);

            console.log(numbers.op);
            // console.log(numbers.num1);
            // console.log(numbers.num2);

            // this.display(this.numStr);
            // console.log(key);
    };
    

    input = function(event) {
        numbers.lastKey = convertIdToKey(event.target.id);
        numbers.calcStr += numbers.lastKey;

        console.log(numbers.lastKey);
        console.log(numbers.calcStr);        

        // this.createNums((this.convertIdToKey(event.target.id)))
        // console.log(this.nums.a);
        // console.log(this.nums.op);

        display(numbers.calcStr);
        splitNums(numbers.calcStr);

        

        // this.calculate(this.convertIdToKey(event.target.id));            
        
    };

    // let nums = {
    //     a: '3',
    //     b: '',
    //     op: '',
    // };

    let display = function(nums) {
        document.getElementById('display').innerText = nums;
    };   

    // this.createNums = function(num) {

    //     // console.log(num);
    //     if (num === '+' ||
    //         num === '-' ||
    //         num === '*' ||
    //         num === '/' ||
    //         num === '=') {
    //             this.nums.op = num;
    //         } else {
    //             this.nums.a += num;
    //         };
    //         // console.log(this.nums.a);
    //         // console.log(this.nums.op);
    // };


};

let calculator = new Calculator;

calculator.start();