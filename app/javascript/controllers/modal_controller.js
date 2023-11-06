import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  connect() {
    this.modal = new bootstrap.Modal(this.element, {
      keyboard: false
    })
    this.modal.show()
  }

  disconnect() {
    this.modal.hide()
  }
   
  submitEnd(e){
    if(e.detail.success) {
    this.hideModal()
    }
  }

  hideModal(){
    this.element.remove()
  }
}