import { default as Home } from './components/home/Home'
import { default as Cash } from './components/cash/Cash'
import { default as Money } from './components/money/Money'
import { default as Counter } from './components/counter/Counter'
import { default as Main } from './components/main/Main'
import { money as MoneyData } from './data'
import { default as Question } from './components/question/Question'
import { questionData as question } from './data'
import { default as Stop } from './components/stop/Stop'
import { default as Start } from './components/start/Start'
import { default as Small } from './components/small/Small'
import startPlay from './sound/play.mp3'
import correct from './sound/correct.mp3'
import wait from './sound/wait.mp3'
import wrong from './sound/wrong.mp3'
import startImg from './img/play.jpg'
import wrongImg from './img/wrong.jpg'
import bgImg from './img/bg.jpg'





export {
    Home, Cash, Money, MoneyData, Counter, Main,
    Question, question, Stop, Start, startPlay, correct, wait, wrong, Small, startImg,
    wrongImg, bgImg
}