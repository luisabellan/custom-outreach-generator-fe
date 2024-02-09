# Custom Outreach Generator App

Designed, built, and maintained by [Ashalesh Tilawat](https://github.com/ashtilawat23). 

## Introduction

The Custom Outreach Generator App is a React-based web application that utilizes OpenAI's GPT-3.5 Turbo to craft unique and compelling outreach letters. This tool is designed to help users generate personalized outreach communications tailored to specific job titles, companies, and other relevant details they provide.

## Features

- **Authentication**: Secure access through a key phrase.
- **Custom Outreach Generation**: Input personal and target job details to generate a tailored outreach letter.
- **Responsive Design**: Ensures a smooth experience across different devices.

## Installation

To set up the Custom Outreach Generator App on your local environment, follow these steps:

1. Clone the repository to your machine.
2. Navigate to the project's directory.
3. Install dependencies with `npm install`.
4. Start the app using `npm start`. Access it at `http://localhost:3000`.

## Usage

After launching the app, users will be greeted with a login screen. Post-authentication, they can proceed to the homepage, fill out the required form, and submit it to generate a custom outreach letter. A confirmation page with the generated content will then be displayed.

## Components

- `App`: Main component for routing and authentication state management.
- `Login`: Handles user authentication.
- `Home`: Primary interface for user input.
- `Generator`: Form component for user data entry.
- `Confirmation`: Displays the generated outreach letter and additional details.

## Environment Variables

Include these environment variables in your `.env` file at the project's root:

```plaintext
VITE_OUTREACH_API_URI=SUPER_SECRET_URI
VITE_KEY_PHRASE=SUPER_SECRET_KEY_PHRASE
```

- `VITE_OUTREACH_API_URI`: API endpoint URI for outreach letter generation.
- `VITE_KEY_PHRASE`: Key phrase for user authentication.

Replace `SUPER_SECRET_URI` and `SUPER_SECRET_KEY_PHRASE` with your actual URI and key phrase.

## Contributing

Contributions are welcome. Please adhere to the project's code of conduct when making contributions or submitting pull requests.

## Support

For support, open an issue on the GitHub repository, and a contributor will assist you.