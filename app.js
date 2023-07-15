// importing assets from the other files (index.html + styles.css)
const hourTicker = document.querySelector(".hours-tick")
const minuteTicker = document.querySelector(".minutes-tick")
const secondTicker = document.querySelector(".seconds-tick")
const ampmTicker = document.querySelector(".AM-PM")

// functionality to update the clock time
function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if (h > 12) {
    h = h - 12
    ampm = "PM"
  }

  // toString() to turn the variable into a string, padStart(2) to add two leading "0" if numbers are < 10
  h = h.toString().padStart(2, "0")
  m = m.toString().padStart(2, "0")
  s = s.toString().padStart(2, "0")

  hourTicker.textContent = h
  minuteTicker.textContent = m
  secondTicker.textContent = s
  ampmTicker.textContent = ampm
  // setTimeout(callbackFunction, delayInMilliseconds, arg1, arg2, ...); With this setTimeout will call the updateClock function every second.
  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock()
