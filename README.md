# Astronomy Picture of the Day React App

This app displays images or videos from the NASA's API Astronomy Picture of the Day. Detailed info about the API here: https://github.com/nasa/apod-api <br />
It contains the following pages:<br />

<ul>
<li> Login: it allows the user to login. It just checks if the used login/password are saved in the localStorage.
</li>
    <li> Register: it allows to create a user account. It is simple stored in the localStorage.
    </li>
    <li> Home:
    <ul>
        <li> When User is Authenticated: get random 6 images or videos and display them in a slider allowing the user to switch them.
         </li>
        <li> When User is Not Authenticated: get random 6 images or videos and display automatically show a different one at each 5 seconds.
         </li>
        </ul>
    </li>
    <li>Today: this path is available when the used is loggedIn. It allows to get the image or video the current day.</li>
    <li>By date: this path is available when the used is loggedIn. It allows to get the image or video for a specified day.</li>
</ul>

## GitHub Page

This app is deploy in GithHub Pages and may be accessed in: <br /> https://nuno-almeida.github.io/nasa-apod-web-app/

### Run locally

Runs the app in the development mode with `npm run start` command.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
