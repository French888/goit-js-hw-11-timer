

// class CountdownTimer {
//   constructor({selector, targetDate}){
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.intervalId = null;
//   }
//   getRefs(){
//     const container = document.querySelector(this.selector);
//     const days = container.querySelector('[data-value = "days"]');
//     const hours = container.querySelector('[data-value="hours"]');
//     const minutes = container.querySelector('[data-value="mins]');
//     const seconds = container.querySelector('[data-value="secs"]');
//     const startBtn = container.querySelector('.start');
//     const stopBtn = container.querySelector('.stop');
//     return { container, days, hours, minutes, seconds, startBtn, stopBtn }
//   }

//   updateTimer({container, days, hours, minutes, seconds}){
//     const time = this.targetDate - Date.now();

//     if(time < 0){
//       this.stop(container)
//       return
//     }

//     days.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
//     hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
//     minutes.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
//     seconds.textContent = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
//   }
  
//   start(){
//     console.log("start", this);
//     this.intervalId = setInterval(() => {
//      this.updateTimer(this.getRefs())
//     }, 1000);
//   }

//   stop(container){
//     clearInterval(this.intervalId)
//     // container.innerHTML = "<h1>Время вышло</h1>"
    
//   }

//   addListeners({startBtn, stopBtn}){
//     startBtn.addEventListener('click', this.start.bind(this));
//      stopBtn.addEventListener('click', this.stop.bind(this));
//   }
// }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 26, 2021 23:55'),
});

// timer.addListeners(timer.getRefs());