let elBody = document.querySelector("body");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elText = document.querySelector(".resultP");
let classContainer = document.querySelector(".container");

elForm.addEventListener("input", function(event){
  event.preventDefault();

  // elInput = elInput.value.trim()
  // alert(elInput);

  function weekDay(num){

    if(num.length != 0){
      num = Number(num)
      if(!isNaN(num)){
        if(!(num < 0)){
          switch (num) {
            case 0:

              elBody.style.backgroundColor = "#fff";
              return elText.textContent = "Siz 0 kiritdingiz, bunday hafta ketma-ketligi mavjud emas";   break;

            case 1:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Dushanba"

            case 2:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Seshanba"

            case 3:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Chorshanba"

            case 4:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Payshanba"

            case 5:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Juma"

            case 6:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Shanba"

            case 7:
              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "lightgreen";
              return elText.textContent = "Yakshanba"

            default:

              classContainer.style.backgroundColor = "#faebd7";
              elBody.style.backgroundColor = "#e03c0e";
              return elText.textContent = "Bunday qiymat mavjud emas";
          }
        }
        else{
          elBody.style.backgroundColor = "#e03c0e";
          return elText.textContent = "Iltimos, musbat son kiriting"
        }
      }
      else{
        elBody.style.backgroundColor = "#e03c0e";
        classContainer.style.backgroundColor = "#faebd7";
        // elBody.style.backgroundColor = "#e03c0e";
        return elText.textContent = "Iltimos, raqamli ma'lumot kiriting"
      }
    }
    else{
      elBody.style.backgroundColor = "#fff";
      classContainer.style.backgroundColor = "#e03c0e";
      return elText.textContent = "Maydon bo'sh, unga ma'lumot kiriting"
    }
  }

  elText.textContent =  weekDay(elInput.value);


})