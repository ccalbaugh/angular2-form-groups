import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;
    
    constructor() {
        this.myForm = new FormGroup({
            'username': new FormControl('Max', Validators.requiredh), // FormControl is what was created automatically in the template approach when attaching ngModel to an input.
            'email': new FormControl('', [
                Validators.required, 
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            'password': new FormCofntrol('', Validators.required)
        });
    }

    onSubmit() {
        console.log(this.myForm);
    }
}
