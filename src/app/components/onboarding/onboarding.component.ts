import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})

export class OnboardingComponent {
  title = 'Welcome';
  LBL = {
    startOnboarding: 'start onboarding',
    stopOnboarding: 'stop onboarding'
  };
  showOnboarding: boolean = this.initSessionStorage();
  onboardingStep: number = 1;

  initSessionStorage() {
    if (!localStorage.getItem('showOnboarding')) {
      localStorage.setItem('showOnboarding', 'enabled');
      return true;
    }else if (localStorage.getItem('showOnboarding') === 'enabled') {
      return true;
    }  
  }

  onboardingGoToNextStep() {
    this.onboardingStep += 1;
  }

  stopOnboarding() {
    localStorage.removeItem('showOnboarding');
    localStorage.setItem('showOnboarding', 'disabled');
    this.showOnboarding = false;
  }
}


