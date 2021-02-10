const harcer =
  [
    {
      harc: {
        title: 'Իռլանդիայի մայրաքաղաքը․ ',
        img: 'img/irland.jpg'
      },
      patasxan: [
        { text: 'Կարդիֆ', correct: false },
        { text: 'Էդինբուրգ ', correct: false },
        { text: 'Դուբլին ', correct: true },
        { text: 'Բելֆաստ ', correct: false }
      ],
    },
    {
      harc: {
        title: 'Բուլղարիայի մայրաքաղաքը․ ',
        img: 'img/bulx.jpg'
      },
      patasxan: [
        { text: 'Վառնա', correct: false },
        { text: 'Սոֆիա', correct: true },
        { text: 'Լյուբլյանա', correct: false },
        { text: 'Զագրեբ', correct: false }
      ]
    },
    {
      harc: {
        title: 'ինչպե՞ս է կոչվում Հյուսիսային Մակեդոնիայի մայրաքաղաքը․ ',
        img: 'img/mak.jpg'
      },
      patasxan: [
        { text: 'Սկոպիե', correct: true },
        { text: 'Վելես', correct: false },
        { text: 'Կումանովո', correct: false },
        { text: 'Բիտոլա', correct: false }
      ]
    },
    {
      harc: {
        title: 'Լիխտենշտեյնի մայրաքաղաքը․',
        img: 'img/lixtensheyn.jpg'
      },
      patasxan: [
        { text: 'Վադուց', correct: false, img: 'img/irland.jpg' },
        { text: 'Վալետտա', correct: false },
        { text: 'Բելգրադ', correct: true },
        { text: 'Լյուքսեմբուրգ', correct: false }
      ]
    },
    {
      harc: {
        title: 'Լատվիայի մայրաքաղաքը․',
        img: 'img/lat.jpg'
      },
      patasxan: [
        { text: 'Սիգուլդա', correct: false },
        { text: 'Վիլնյուս', correct: false },
        { text: 'Ռիգա', correct: true },
        { text: 'Կաունաս', correct: false }
      ]
    }
  ]

const startBtn = document.getElementById('start')
const nextBtn = document.getElementById('next')
const questionContElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const questionTitle = document.getElementById('questionTitle')
const nkar = document.getElementById('nkar')
const answerButtonsElement = document.getElementById('answer')

let poxvacQuestion, NerkaIndex

index = 0
startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {

  NerkaIndex++
  setNextQuestion()
})

function startGame() {
  startBtn.classList.add('hide')
  poxvacQuestion = harcer.sort(() => Math.random() - .10)


  NerkaIndex = 0
  questionContElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  reset()
  showQuestion(poxvacQuestion[NerkaIndex])
}

function showQuestion(question) {
  questionTitle.innerText = question.harc.title
  nkar.setAttribute('src', question.harc.img)

  question.patasxan.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct

    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)


  })
}

function reset() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(el) {
  const selectedButton = el.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (poxvacQuestion.length > NerkaIndex + 1) {
    nextBtn.classList.remove('hide')

  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

