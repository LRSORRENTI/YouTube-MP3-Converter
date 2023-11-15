# JavaScript YouTube to MP3
![Project Image](/assets/YT-Convert.jpg.png)
**This project is a web application for converting YouTube videos into MP3 audio files. It's written in JavaScript and runs on Node.js, using the Express.js framework for routing.**

## How It Works

**When the user submits a YouTube URL through the web interface, the backend server uses the ytdl-core and fluent-ffmpeg libraries to download the video's audio track and convert it into an MP3 file. The resulting MP3 file is saved on the server, and a link to download the file is then sent back to the client.**

## Features

- Convert any YouTube Video to MP3 File
- Allows users to specify filename for download
- Responsive web interface

## Installation

**First, you'll need to have Node.js installed. You can download it here** **[Node.js](https://nodejs.org)**

**Clone the repository**

```console
git clone git@github.com:LRSORRENTI/YouTube-MP3-Converter.git
cd YouTube-MP3-Converter
```

**Install the project dependencies**

```console
npm install
```

**Start the server:**

```console
npm run start
```

**The server will start on port 3000. You can access the web interface by navigating to 'http://localhost:3000' in your web browser.**

## Usage

**Simply paste a YouTube URL into the input field and click "Convert". You'll be prompted to enter a filename for the MP3. Once the conversion is finished, press 'Click Here To Download', and the converted MP3 will be inside of your downloads folder, it will also be inside of the MP3-Files directory.**

## Legal Note

**This application is intended for personal use and educational purposes. It's your responsibility to respect YouTube's Terms of Service and the copyright of content creators.**

## Contributing

**Contributions are welcome. Please feel free to submit a pull request or open an issue.**
