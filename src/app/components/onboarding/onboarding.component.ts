import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})

export class OnboardingComponent {
  title = 'onboarding';
  LBL = {
    startOnboarding: 'start onboarding',
    stopOnboarding: 'stop onboarding'
  };
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


