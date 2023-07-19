import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue = '';
  answerDisplayed = false;

  appendToDisplay(value: string): void {
    if (Number(value) && this.answerDisplayed) {
      this.displayValue = '';
    }
    this.displayValue += value;
    this.answerDisplayed = false;
  }

  calculate(): void {
    try {
      this.displayValue = eval(this.displayValue)
    } catch (error) {
      this.displayValue = 'Error';
    }
    this.answerDisplayed = true;
  }

  clearDisplay(): void {
    this.displayValue = '';
  }
}