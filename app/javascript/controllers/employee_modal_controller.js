import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="employee-modal"
export default class extends Controller {
  connect() {
    console.log('im connected!!!')
  }

  initialize(){
    this.element.setAttribute("data-action", "click->emloyee-modal#click")
  }

  click(event){
    event.preventDefault()
       this.url = this.element.getAttribute("href")
       fetch(this.url, {
        headrs: {
          Accept: "text/vnd.turbo-stream.html"
        }
       })
       .then( r => r.text()) 
       .then(html => Turbo.renderStreamMessage(html))
  }
}
