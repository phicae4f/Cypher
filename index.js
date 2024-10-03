const contentEl = document.querySelector('.content')
const newSpanEl = document.createElement("span")

const toCrypt = document.querySelector('.toCrypt')
const toDecrypt = document.querySelector('.toDecrypt')


const buttonElCrypt = document.createElement('button')
buttonElCrypt.textContent='Зашифровать слово'
contentEl.append(buttonElCrypt)


const buttonElDecrypt = document.createElement('button')
buttonElDecrypt.textContent='Расшифровать слово'
contentEl.append(buttonElDecrypt)


buttonElCrypt.onclick = () => {
    const stringInput = prompt("Строка: ")
    const shiftInput = +prompt("Шаг: ")
    const encryptText = ceasarCipher(stringInput, shiftInput)
    newSpanEl.textContent=encryptText
    toCrypt.append(newSpanEl)
}

function  ceasarCipher(text, shift){
    const alphabet = 'absdefghijklmnopqrstuvwxyz'
    const alphabetUpper = "ABSDEFGHIJKLMNOPQRSTUVWXYZ"

    function shifrChar(char, shift){
        if(alphabet.includes(char)){
            const index = alphabet.indexOf(char)
            return alphabet[(index+shift) % alphabet.length]
        }else if(alphabetUpper.includes(char)){
            const index = alphabetUpper.indexOf(char)
            return alphabetUpper[(index+shift) % alphabetUpper.length]
        }
        return char
    }

    let encryptedText=''
    for(let char of text){
        encryptedText+=shifrChar(char, shift)
    }
    return encryptedText
}



//расшифровка

buttonElDecrypt.onclick = () => {
    caesarDecrypt()
}

function caesarDecrypt(){
    const textDecrypt = prompt("Зашифрованное слово:")
    const shiftDecrypt = +prompt("Шаг: ")
    xz(textDecrypt, shiftDecrypt)       
}
function xz(encryptedText, shift){
    let decryptedText=''

    for(let i=0; i< encryptedText.length; i++){
        let char = encryptedText[i]

        if(char.match(/[a-z]/i)){
            //возвр код символа по его индексу
            let code = encryptedText.charCodeAt(i)
            //опр с какого знач наичнать рассчеты
            let lowerLimit = char === char.toLowerCase() ? 97 : 65
            //преобр полученный код  обратно в символ
            decryptedText+=String.fromCharCode(((code - lowerLimit - shift + 26) %26) + lowerLimit)
        }else{
            decryptedText+=char
        }
    }
    return toDecrypt.append(decryptedText)
}

contentEl.append(toCrypt)
contentEl.append(toDecrypt)