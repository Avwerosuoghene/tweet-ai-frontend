# Tweet-AI Frontend

## Overview

The `tweet-ai-frontend` application provides a user interface to display the current count of Autobots created in real-time. It is built with Vue.js and uses Socket.IO for real-time updates.

## Features

- **Real-Time Updates:** Uses Socket.IO to display real-time updates of Autobots count.
- **Clean UI:** Designed with a modern and clean UI using Vuetify.

## Installation

### Prerequisites

- Node.js
- npm

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Avwerosuoghene/tweet-ai-frontend.git
    cd tweet-ai-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create an `.env` file:**

    In the root directory, create a file named `.env` and add the following environment variable:

    ```env
    VUE_APP_API_URL=your_backend_service_baseurl e.g "http://localhost:4000"
    ```

    This variable specifies the base URL for the API requests.

4. **Run the application:**

    ```bash
    npm run serve
    ```

## Configuration

- **API URL:** The `VUE_APP_API_URL` environment variable is used to specify the base URL for API requests. Ensure this URL points to your backend service.

Visit [http://localhost:8080](http://localhost:8080) in your browser to see the application in action.