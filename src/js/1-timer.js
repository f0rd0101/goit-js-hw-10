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

let userSelectedDate;

const fp = new flatpickr('input', options);
