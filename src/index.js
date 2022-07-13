module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero";
    }
    let n = number.toString().split("");
    let string = "";
    if (number < 100) {
        n.unshift("0");
    }
    if (number < 10) {
        n.unshift("0");
    }
    toNumber = (a) => {
        switch (a) {
            case "1":
                string += "one";
                break;
            case "2":
                string += "two";
                break;
            case "3":
                string += "three";
                break;
            case "4":
                string += "four";
                break;
            case "5":
                string += "five";
                break;
            case "6":
                string += "six";
                break;
            case "7":
                string += "seven";
                break;
            case "8":
                string += "eight";
                break;
            case "9":
                string += "nine";
                break;
            case "0":
                break;
        }
    };
    toNumber(n[0]);
    if (number > 99) {
        string += " hundred ";
    }

    switch (n[1]) {
        case "1":
            switch (n[2]) {
                case "0":
                    string += "ten";
                    break;
                case "1":
                    string += "eleven";
                    break;
                case "2":
                    string += "twelve";
                    break;
                case "3":
                    string += "thirteen";
                    break;
                case "5":
                    string += "fifteen";
                    break;
                case "8":
                    string += "eighteen";
                    break;
                default:
                    toNumber(n[2]);
                    string += "teen";
                    break;
            }
            break;
        case "2":
            string += "twenty ";
            toNumber(n[2]);
            break;
        case "3":
            string += "thirty ";
            toNumber(n[2]);
            break;
        case "4":
            string += "forty ";
            toNumber(n[2]);
            break;
        case "5":
            string += "fifty ";
            toNumber(n[2]);
            break;
        case "6":
            string += "sixty ";
            toNumber(n[2]);
            break;
        case "7":
            string += "seventy ";
            toNumber(n[2]);
            break;
        case "8":
            string += "eighty ";
            toNumber(n[2]);
            break;
        case "9":
            string += "ninety ";
            toNumber(n[2]);
            break;
        case "0":
            toNumber(n[2]);
            break;
        default:
            toNumber(n[2]);
            break;
    }
    return string.trim();
};
