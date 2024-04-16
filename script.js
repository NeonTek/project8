const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const phone = document.getElementById('phone');
const intro = document.getElementById('intro-message');
const results = document.getElementById('results-div');


const validator = (input) => {
  resetUI()
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  results.appendChild(document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`));
  results.classList.remove('hidden');
  results.classList.add('normal');
  intro.classList.remove('normal');
  intro.classList.add('higher');
}




const resetUI = () => {
  results.innerText = '';
  results.classList.add('hidden');
  intro.classList.remove('higher');
  intro.classList.add('normal');
};




clearBtn.addEventListener("click", function() {resetUI()});

checkBtn.addEventListener("click", function () {
  validator(userInput.value);
  updateUI(userInput.value);
})

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validator(userInput.value);
    updateUI(userInput.value);
  }
})

