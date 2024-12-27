# DPR_Discord_Bot

This is a Discord Bot that provides various functionalities including generating short URLs and responding to commands.

## Features

- Responds to the `/create` command to generate a short URL.
- Responds to the `/ping` command with "Pong!".
- Replies with a default message for any other messages.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/DPR_Discord_Bot.git
    cd DPR_Discord_Bot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Create a `.env` file in the root directory and add your Discord bot token and client ID:
    ```env
    DISCORD_BOT_TOKEN = TOKEN
    DISCORD_CLIENT_ID = CLIENT_ID
    ```

    Replace `TOKEN` and `CLIENT_ID` with the actual values from your Discord Developer account.

2. Start the bot:
    ```sh
    npm start
    ```

## Commands

- `/create <url>`: Generates a short URL for the given URL.
- `/ping`: Replies with "Pong!".

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the ISC License.