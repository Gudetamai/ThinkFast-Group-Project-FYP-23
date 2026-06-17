# ThinkFast – Multiplayer Quiz Buzzer System

A real-time IoT-based multiplayer quiz system with a web application and physical button controller, built as our final-year Computer Science diploma project at Universiti Teknologi Malaysia (UTM SPACE).  
ThinkFast combines a Kahoot-style web quiz platform with ESP32-powered hardware buzzers — allowing students to participate without needing their own devices, and making it harder to cheat by removing screen-based inputs.

## Team – Group 23

| Name | Role |
|------|------|
| Wan Nur Maisarah Binti Wan Hashim | Scrum Master / Leader |
| Nur Qumairah Binti Fariz Nazrul | Programmer |
| Syed Hassan Al Haddad Bin Syed Osman Al Haddad | Programmer |
| Nuryn Azalea Binti Mohd Nazarudin | Quality Assurance / Test Lead |

**Supervisor:** Ts. Ahmad Fahmi Adzha Bin Mohd Nasaruddin  
**Course:** DSPD 2794 Project

---

## Features

- **Teacher Portal** – Secure login and sign-up for teachers; full session and quiz management from one dashboard.
- **Question Bank** – Add, edit, and delete quiz questions with 4 answer choices (A/B/C/D); category tags and image upload support.
- **Quiz Library** – Browse, organise, duplicate, and launch quiz sets; grid and list view with search and category filters.
- **Discover Page** – Browse public quiz sets shared by other teachers; save favourites directly to your own library.
- **Launch Session** – Generate a unique 6-digit game PIN; configure time per question, shuffle, and leaderboard settings before going live.
- **Remote Assignment** – Toggle to assign student names to physical ESP32 controllers before a session starts.
- **Student Join Page** – Students join using the PIN and a chosen nickname and avatar — no login or phone required.
- **Live Answer Feedback** – Correct (green ✅) and wrong (red ❌) animations with confetti, ring bursts, and screen flash after each question is revealed.
- **Game Results** – Full session report with podium, leaderboard, per-question breakdown and individual student drill-down; exportable to CSV.
- **Final Ranking** – Student-facing end-of-game screen showing the podium, full ranking with score bars, and a shareable result.
- **System Report** – Developer evaluation dashboard measuring ESP32 latency, detection accuracy, WiFi stability, and usability against project objectives.
- **Light / Dark Mode** – Toggle between themes across all pages.
- **IoT Controller** – ESP32-S3 receives button presses (A/B/C/D) and sends answers to the web app via WiFi HTTP POST or USB Serial (Web Serial API).
- **Responsive UI** – Works on desktop and mobile browsers.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (Vanilla, inline) |
| Backend | Node.js, Express.js |
| IoT Firmware | C++ (Arduino Framework for ESP32-S3) |
| IoT Hardware | ESP32-S3, Tactile push buttons, 22 AWG hookup wire |
| Project Management | Taiga (Scrum), GitHub, Google Docs |
| Documentation | Microsoft Word, Microsoft PowerPoint, Canva |
| Development Tools | Visual Studio Code, XAMPP |

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- Arduino IDE or PlatformIO (for ESP32 firmware)
- Google Chrome or Microsoft Edge (required for Web Serial API)

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/your-username/thinkfast.git
   cd thinkfast
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the development server**
   ```
   npm start
   ```

### ESP32 Firmware Setup

1. Open Arduino IDE and install the **ESP32 board package**
2. Open `firmware/esp32_controller/esp32_controller.ino`
3. Update the WiFi credentials and server IP in the config section:
   ```cpp
   const char* WIFI_SSID     = "your_wifi_ssid";
   const char* WIFI_PASSWORD = "your_wifi_password";
   const char* SERVER_URL    = "http://192.168.x.x:3000/answer";
   ```
4. Flash the firmware to the ESP32-S3 board
5. Wire 4 tactile buttons to GPIO pins as defined in the pin config

---

## Usage

### Teacher

- **Login / Sign Up** – Access the teacher portal at `/login`. Register a new account or log in with an existing one.
- **Question Bank** – Navigate to `/questionbank` to add, edit, or delete individual questions with 4 answer choices, a category, and an optional image.
- **Quiz Library** – Go to `/library` to manage full quiz sets. Create new quizzes, duplicate existing ones, or delete them.
- **Discover** – Visit `/discover` to browse public quizzes from other teachers and save them to your library.
- **Launch Session** – Go to `/launchsession`, select a quiz, configure settings (timer, shuffle, leaderboard), and launch. A 6-digit PIN is generated for students to join.
- **Remote Assignment** – Toggle the assignment mode to link student names to specific ESP32 controllers before the game starts.
- **Feedback & Results** – After each question, view live correct/wrong animations and student response stats. At the end, access the full game report at `/gameresults`.

### Student

- **Join Game** – Open `/joinpage` in any browser, enter the 6-digit PIN from the teacher, choose a nickname and avatar — no login needed.
- **Answer via Controller** – Press A, B, C, or D on the physical ESP32 buzzer. The answer is sent to the web app in real time.
- **See Results** – After the game ends, the final ranking screen (`/finalranking`) shows the podium, all player scores, and your personal result.

### Developer

- **System Report** – Navigate to `/systemreport` to view evaluation results including ESP32 latency measurements, detection accuracy, WiFi stability, usability scores, and pass/fail status against all project objectives.
- **Export** – Download results as CSV or print as PDF directly from the report page.

---

## Project Structure

```
thinkfast/
├── public/
│   ├── thinkfast-login.html
│   ├── style.css
│   ├── questionbank.html
│   ├── questionbank.css
│   ├── library.html
│   ├── library.css
│   ├── discover.html
│   ├── discover.css
│   ├── launchsession.html
│   ├── launchsession.css
│   ├── remoteassign.html
│   ├── remoteassign.css
│   ├── joinpage.html
│   ├── joinpage.css
│   ├── feedback.html
│   ├── feedback.css
│   ├── gameresults.html
│   ├── gameresults.css
│   ├── finalranking.html
│   ├── finalranking.css
│   ├── systemreport.html
│   └── systemreport.css
├── server/
│   ├── index.js
│   └── routes/
├── firmware/
│   └── esp32_controller/
│       └── esp32_controller.ino
├── package.json
└── README.md
```

---

## Hardware Components

| No. | Component | Quantity | Unit Price | Total |
|-----|-----------|----------|------------|-------|
| 1 | ESP32 Microcontroller | 1 | RM 15.00 | RM 15.00 |
| 2 | 22 AWG Stranded Hookup Wire | 2 | RM 8.00 | RM 16.00 |
| 3 | Shaped / Coloured Buttons | 8 | RM 0.50 | RM 4.00 |
| 4 | Tactile Push Button | 8 | RM 0.20 | RM 1.60 |
| 5 | Arduino Uno R3 Board | 1 | RM 27.70 | RM 27.70 |
| | | | **Total** | **RM 64.30** |

---

## Security Notes

- Passwords are hashed server-side; plain-text passwords are never stored.
- Session management is handled via server-side tokens.
- Students join using a PIN only — no personal data is collected.
- Quiz sessions expire when the teacher ends the session.

---

## Testing

- **Unit testing** – Use Postman or Thunder Client to test API endpoints individually.
- **Hardware testing** – Press each button 20 times and verify detection rate ≥ 95% and average latency < 500ms.
- **Browser compatibility** – Test on Chrome and Edge (required for Web Serial API). Firefox does not support Web Serial.
- **Concurrent press testing** – Simulate two players pressing simultaneously to verify first-come-first-serve locking.

---

## License

This project is for educational purposes as part of a Diploma in Computer Science final year project at UTM SPACE. Free to use and modify for learning.
