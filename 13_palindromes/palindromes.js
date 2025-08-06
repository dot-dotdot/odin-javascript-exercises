const palindromes = function (string) {
    let cleanString = string
                        .toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                        .replace(/\s+/g, "");

    let leftIndex = 0;
    let rightIndex = cleanString.length - 1;

    while (leftIndex < rightIndex) {
        let leftChar = cleanString.charAt(leftIndex);
        let rightChar = cleanString.charAt(rightIndex);

        if (leftChar !== rightChar) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
};

palindromes("Animal loots foliated detail of stool lamina.");

// Do not edit below this line
module.exports = palindromes;
