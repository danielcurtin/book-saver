<h1 align=center>Book Saver</h1>

## Abstract
Book Saver is an application that pulls the data from the NYT Best Sellers Lists, and allows the user to view them. There's a homepage that starts with a popular section that displays 4 of the current #1 books, and then a bunch of filters the user can click through to view the current books on all the non-deprecated NYT Bestsellers Lists. When a user clicks on a book, they'll be brought to a new page displaying more info about the book, and give a couple of buttons for the user to have quick access to sites they can purchase the book from. There's also a login page and an account registration page that allows a user to connect their google account or create a new account on the app, all authenticated through Google Firebase.

## Project Viewing
Unfortunately, since the app uses Secret API Keys through Google Firebase, it's unable to be pulled down and run locally. However, it's fully usable [here](https://danielcurtin.github.io/book-saver)

<details>
<summary> <h2>Preview</h2> </summary>
<br>

Home Page
![image](https://user-images.githubusercontent.com/114776048/232245661-b2f54cb3-ddde-4106-a616-6c16a3bc9d0c.png)

Home Page under a filter
![image](https://user-images.githubusercontent.com/114776048/232245982-c165b58e-54c8-4202-9c6c-0f8c28ea0628.png)

Single Book View
![image](https://user-images.githubusercontent.com/114776048/232245683-88e73e1d-2ee1-4d54-b1f5-4b50849024d4.png)

Login Page
![image](https://user-images.githubusercontent.com/114776048/232245892-be5d6cb4-d02d-44dc-97a6-ec9164a69b18.png)

Register Page
![image](https://user-images.githubusercontent.com/114776048/232245915-6f53dd82-a2b8-4fe3-a503-bc7a48cec16f.png)

</details>


## Context
This application is our Mod 3 Stretch Tech group project, and we worked on it for ~20 hours.

## Contributors
[Trevor Fitzgerald](https://www.github.com/trevorfitz0)<br>
[Tom Doder](https://www.github.com/lordschwifty)<br>
[Daniel Curtin](https://www.github.com/danielcurtin)<br>

## Learning Goals
- Pick up a new technology outside the scope of the Turing Program and implement it into a project.
- Solidify our understanding of React fundamentals.
- Create a multi-page UX utilizing React Router.

## Wins + Challenges
- A win came in the form of Firebase implementation - the docs were easy to understand and the installation process was much simpler than expected.
- A challenge came in the form of Testing - Cypress performs inconsistently at best - tests will fail, then pass upon refresh. It was a challenge to know when our test was actually correct vs. when they were written wrong.
