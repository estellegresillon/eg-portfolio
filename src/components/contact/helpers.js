import { FUNNY_MESSAGES_ARRAY } from "./constants";

export const printLetterByLetter = (destination, message) => {
  let i = 0;

  const interval = setInterval(function(){
    const container = destination;
    if (container) {
      container.innerHTML += message.charAt(i);
    } else {
      clearInterval(interval);
      return;
    }

    i++;

    if (i === message.length){
      clearInterval(interval);
      setTimeout(() => {
        deleteMessage(destination, message);
      }, 1000);
    }
  }, 50);
};

const deleteMessage = (destination, message) => {
  const nextWord = FUNNY_MESSAGES_ARRAY.indexOf(message) + 1;
  let letterIndex = message.length - 1;

  const interval = setInterval(function(){
    const container = destination;
    if (container) {
      container.innerHTML = message.substring(0, letterIndex - 1);
    } else {
      clearInterval(interval);
      return;
    }

    letterIndex--;

    if (letterIndex === 0){
      clearInterval(interval);
      setTimeout(() => {
        if (nextWord === FUNNY_MESSAGES_ARRAY.length) {
          printLetterByLetter(destination, FUNNY_MESSAGES_ARRAY[0]);
        } else printLetterByLetter(destination, FUNNY_MESSAGES_ARRAY[nextWord]);
      }, 500);
    }
  }, 20);
};
