# myFlix

myFlix is the server side component of the **motionpics** application.

Through the REST API new users can be created and logged in, at which point a session token will be created for the user.

This token will be used to identify and authenticate the user throughout all other actions, as long as the session is live:

- Get a list of all movies
- Get information about a specific movie
- Get information about a specific genre
- Get information about a director
- Add a movie to favorites
- Remove a movie from favorites
- Update user information
- Deactivate user account

## Tech Stack

- JavaScript
- Node.js
- Express
- MongoDB

## Documentation

Find _endpoints_ and samples for _requests body data format_ and _responses body data format_ at
[https://motionpics.herokuapp.com/documentation.html](https://linktodocumentation)

## API Reference / Getting Started

#### Create a new user

```http
  POST /users
```

| Request body data format                            | Description                                       |
| :-------------------------------------------------- | :------------------------------------------------ |
| `A JSON object holding data about the user to add.` | **Required**. Username, Password, Email, Birthday |

#### Log in user

```http
  POST /login
```

| Parameter  | Description            | Note                                                                       |
| :--------- | :--------------------- | :------------------------------------------------------------------------- |
| `Username` | **Required**. Username | Session token is created once logged in. Required for all other endpoints. |
| `Password` | **Required**. Password |
