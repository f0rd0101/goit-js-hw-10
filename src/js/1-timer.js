// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button[type="button"]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMin = document.querySelector('[data-minutes]');
const dataSec = document.querySelector('[data-seconds]');

button.disabled = true; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          iziToast.error({
              message: 'Please choose a date in the future',
              position: "topRight",
});
         button.disabled = true
      } else {
        
          userSelectedDate = selectedDates[0];
          button.disabled = false;
        }
    },     
};

let userSelectedDate = new flatpickr('input', options);;

class Timer{
    constructor({onTick}){
        this.onTick = onTick
        this.isActive = false;
        this.intervalID = 0;
    }

    start(){
            
        if(this.isActive)  return;
            
        this.isActive = true;
        button.disabled = true;
        input.disabled = true;
        this.intervalID = setInterval(()=>{
            this.updateTime()
        },1000)

    }
    stop(){
        clearInterval(this.intervalId);
        this.isActive = false;
        input.disabled = false; 
    }


    updateTime(){
        const target = userSelectedDate.getTime();
        const now = Date.now();
        if (target <= now) {
         this.stop();
            return;
    }
        const diff = target - now;
        const timeObj = this.convertMs(diff);
        this.onTick(timeObj);
    }
   
    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
}

const startBtn = document.querySelector("button[data-start]")

const timer = new Timer({
    onTick:updatedNumber,
})

startBtn.addEventListener("click",timer.start.bind(timer))

function updatedNumber({days,hours,minutes,seconds}){
    const formatedDays = addZero(days);
    const formatedHours = addZero(hours);
    const formatedMinutes = addZero(minutes);
    const formatedSeconds = addZero(seconds);

    dataDays.textContent = formatedDays;
    dataHours.textContent = formatedHours;
    dataMin.textContent = formatedMinutes;
    dataSec.textContent = formatedSeconds;
}
function addZero(num) {
    return num.toString().padStart(2, '0');
}