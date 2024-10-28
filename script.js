// "userInput" variable contains the html element that receives the user text
// "userWord" variable contains the actual user text 

const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result");

const isPalindrome = () => {
    result.style.display = "block";
    const regex = /[^a-zA-Z0-9]/g;

    const userWord = userInput.value;
    const filteredWord = userWord.toLowerCase().replace(regex, "")
    const reversedWord = filteredWord.split('').reverse().join('')

    // console.log(userWord)
    // console.log(filteredWord)
    // console.log(reversedWord)

    if (userWord.length < 1){
        alert("Please input a value");
    } else if (userWord.length >= 1 && filteredWord === reversedWord){
        // console.log(`${userWord} is a palindrome`)
        result.innerHTML = `<strong> ${userWord} </strong> is a palindrome.`
    }else{
        // console.log(`${userWord} is not a palindrome`)
        result.innerHTML = `<strong> ${userWord} </strong> is not a palindrome. `
    }  
    userInput.value = "";
}


    
checkButton.addEventListener("click", isPalindrome)