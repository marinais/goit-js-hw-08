import throttle from 'lodash.throttle'

const formEl = document.querySelector(".feedback-form")
const STORAGE_KEY = "feedback-form-state"


formEl.addEventListener("input", throttle(saveData, 500))
formEl.addEventListener("submit", submitInfo)

updateData ()

const formData = {}

function saveData (e) {
    // const formData = localStorage.getItem(STORAGE_KEY)

    formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    console.log(JSON.stringify(formData))
}
  
function submitInfo (e) {
    e.preventDefault()
    const {elements:{email, message}} = e.currentTarget
    const formData = {email:email.value, message:message.value}
    // formData[e.target.name] = e.target.value
   
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY) 
    e.currentTarget.reset() 
}

function updateData () {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedData){
        formEl.elements.email.value = savedData.email || "";
        formEl.elements.message.value = savedData.message || "";
        console.log(savedData)
    }

}

