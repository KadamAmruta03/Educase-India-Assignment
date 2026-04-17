# PopX Mobile App - Pixel Perfect UI Implementation

A high-fidelity, 4-page mobile-first React application built with precision following exact design tokens extracted from Adobe XD. This project focuses on achieving a 1:1 visual match with specialized design requirements.

## 🚀 Key Features

- **4-Page Seamless Flow**: Includes Landing, Login, Signup, and Profile pages.
- **Pixel-Perfect Alignment**: Every element's position (top, left, width, height) is mapped directly from Adobe XD specs.
- **Mobile-First Container**: The app is housed in a fixed 375x812px shell, centered on the webpage for a premium mobile-app simulation on desktop.
- **Dynamic Navigation**: Efficient routing implemented with `react-router-dom`.
- **Custom Design Tokens**: Precise font weights (Rubik), specific line-heights (e.g., 28px/17px), and custom brand colors (#6C25FF).

## 🛠️ Technology Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Navigation**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: Custom CSS & Inline Styling (for absolute coordinate precision)
- **Typography**: [Google Fonts - Rubik](https://fonts.google.com/specimen/Rubik)

## 🎨 Design Methodology

The styling logic for this project was derived directly from **Adobe XD** design files. By using the `{}` CSS extraction feature in Adobe XD, we ensured:
- **Absolute Positioning**: Elements are mapped within a relative 375x812px parent.
- **Floating Labels**: Custom implementations for input fields to mimic high-end mobile UI behavior.
- **Visual Accuracy**: Correct implementation of dashed borders, opacity levels, and shadow depths.

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd popx-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`.*

## 📂 Project Structure

```text
src/
├── assets/          # Project images and icons
├── pages/           # Individual page components
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   └── ProfilePage.jsx
├── App.jsx          # Route definitions
└── index.css        # Global resets and fonts
```

---

**Developed for the Educase assignment with a focus on UI/UX precision.**
