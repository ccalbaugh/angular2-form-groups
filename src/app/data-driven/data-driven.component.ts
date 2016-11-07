import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

    genders = [
        'male',
        'female'
    ];
    
    constructor(private formBuilder: FormBuilder) {
        this.myForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl('Max', Validators.requiredh), // FormControl is what was created automatically in the template approach when attaching ngModel to an input.
                'email': new FormControl('', [
                    Validators.required, 
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            }),
            'password': new FormControl('', Validators.required),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([
                new FormControl('Cooking', Validators.required)
            ])
        });
    }

    onAddHobby() {
        (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required));// casting for safety
    }

    onSubmit() {
        console.log(this.myForm);
    }
}
