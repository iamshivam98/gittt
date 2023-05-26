// import { LightningElement, track } from 'lwc';

// export default class HelloWorld extends LightningElement {
//   @track name = '';

//   showText() {
//     console.log(this.name);
//     alert('Welcome, ' + this.name);
//   }
// }
import { LightningElement, track } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    @track name;
    @track welcomeMessage;

    handleInputChange(event) {
        this.name = event.target.value;
    }

    showWelcomeMessage() {
        this.welcomeMessage = 'Welcome, ' + this.name;
    }
}
