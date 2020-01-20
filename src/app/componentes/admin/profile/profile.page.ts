import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../../../servicios/auth.service';
import { userI } from '../../../models/userI';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
  ) { }

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({value:'',disabled:true},Validators.required),
    photoURL: new FormControl('', Validators.required)
  })
  ngOnInit() {
  }

  private initValuesForm(userI): void {
    this.profileForm.patchValue({
      displayName:'',
      email:'',
      photoURL:''
    })
  }
}
