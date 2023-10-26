import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-article"
export default class extends Controller {
  connect() {
    console.log('im connected')
  }
  initalize(){
    this.element.setAttribute('data-action, "click->edit-article#showModal"')
  }
  showModal(event){
    this.preventDefault()
    this.url = this.element.getAttribute('href')
    fetch(this.url, {
     headers: {
      Accept: "text/vnd.turbo-stream.html"
      }
    })
    .then(response => response.text())
    .then(html => Turbo.StreamMessage(html))
  }
}
