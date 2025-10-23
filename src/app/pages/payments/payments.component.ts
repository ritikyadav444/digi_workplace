import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent {
  selectedPlan: string = '';

  plans = [
    {
      name: 'Essential',
      price: '$6/month',
      features: [
        'Up to 3 team members',
        'Unlimited clients',
        'Unlimited orders',
        'Task Management',
        'Single Workspace',
        'Support',
      ],
      id: 'essential',
    },
    {
      name: 'Professional',
      price: '$29/month',
      features: [
        'Up to 10 team members',
        'Unlimited clients',
        'Unlimited orders',
        'Task Management',
        'Single Workspace',
        'Invoicing & Payment',
        'Support',
      ],
      id: 'professional',
    },
    {
      name: 'Elite',
      price: '$99/month',
      features: [
        'Up to 25 team members',
        'Unlimited clients',
        'Unlimited orders',
        'Task Management',
        'Single Workspace',
        'Invoicing & Payment',
        'Support',
      ],
      id: 'elite',
    },
  ];

  selectPlan(planId: string) {
    this.selectedPlan = planId;
  }

  isSelected(planId: string): boolean {
    return this.selectedPlan === planId;
  }

  canProceedToPayment(): boolean {
    return this.selectedPlan !== '';
  }
}
