import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;
    
    constructor() {
        this.myForm = new FormGroup({
            'username': new FormControl(), // FormControl is what was created automatically in the template approach when attaching ngModel to an input.
            'email': new FormControl(),
            'password': new FormCofntrol(),
        });
    }
}
