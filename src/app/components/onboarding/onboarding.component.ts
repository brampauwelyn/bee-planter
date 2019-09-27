import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})

export class OnboardingComponent {
  title = 'onboarding';
  showOnboarding: boolean = this.initSessionStorage();

  initSessionStorage() {
    if (!localStorage.getItem('showOnboarding')) {
      localStorage.setItem('showOnboarding', 'enabled');
      return true;
    }
  }

  stopOnboarding() {
    localStorage.removeItem('showOnboarding');
    localStorage.setItem('showOnboarding', 'disabled');
    this.showOnboarding = false;
  }
}


