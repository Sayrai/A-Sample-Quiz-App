# QuizEngageSarah

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Sarah's Response

I had no idea the challenge was for 2hours would have opted to do it tomorrow, this is what I could come up with while commuting home(Bank closes 4pm WAT).


My thought process:
1) Thought about Design(UI), ease of use, navigation, adding reuasble components.
2) first was to use State managemant library to store the data in state as opposed to using session storage since I would need to do a check after the user submits the answer(if its correct- "answerId" key that is being returned).
3) Also add validation for the form input and then disable the button not to submit if the user hasn't inputted an answer in the form.

# Things I would have loved to add given more time:
1) Page loaders- for feedback
2) When the user selects an answer, give them visual feedback whether the answer is correct or wrong and allow them to request the next question.
3) Add a bit of colors to the quiz page
 4) A score for the user to keep track of their correct and incorrect answers.
5)Showing the user the correct answer if they chose the wrong one.
6) Adding an http request interceptor to take care of the base API url.
7) Store the users quiz performance persistently(using redux) so they can compare to earlier quiz sessions.
8) roper error handling in case of lost connection.
9) Unit Test using karma(for the two endpoints)

# Challenge:
1) Tested the second endpoint(https://us-central1-quizengage.cloudfunctions.net/getAnswers?cat={CITIES}) on postman returned using various categories: 
"Category does not exist!"


