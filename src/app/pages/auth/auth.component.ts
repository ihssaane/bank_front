import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: false
})
export class AuthComponent {
  singInForm!: FormGroup;
  submitted = false;
  isSuccessed = false;
  errorMessage = ''; // Pour afficher un message d’erreur si les identifiants sont invalides

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.singInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remberMe: ['']
    });
  }

  get fb(): any {
    return this.singInForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.singInForm.invalid) {
      return;
    }

    const { username, password } = this.singInForm.value;

    // Vérifie si les identifiants sont corrects
    if (username === 'ihssane' && password === '1234') {
      this.isSuccessed = true;
      this.errorMessage = '';
      this.router.navigateByUrl('/home');
    } else {
      this.isSuccessed = false;
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
