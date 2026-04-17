# PopX Mobile App | Pixel-Perfect UI Implementation

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?style=flat-square&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter)
![Adobe XD](https://img.shields.io/badge/Design-Adobe_XD-FF61F6?style=flat-square&logo=adobexd)
![CSS3](https://img.shields.io/badge/CSS3-Pixel_Perfect-1572B6?style=flat-square&logo=css3)

</div>

> A professional mobile-first frontend showcase built to demonstrate absolute UI precision — transforming high-fidelity Adobe XD design tokens into a seamless, 4-page React application with rigorous attention to layout coordinates and typography.

<div align="center">

  <img width="850" alt="Landing Page" src="https://github.com/user-attachments/assets/d78be8e8-fb2d-437e-99b2-be47868996dd" />
  <p><i>Landing Page — Hero section with primary and secondary design-token buttons</i></p>

  <br/>

  <img width="850" alt="Login Page" src="https://github.com/user-attachments/assets/53c7f8fd-378d-4a4e-9dae-614dd2cc5d9b" />
  <p><i>Login Page — Implementation of custom floating label inputs and validation states</i></p>

  <br/>

  <img width="850" alt="Signup Page" src="https://github.com/user-attachments/assets/2acc9ce2-7746-4ba3-836a-a1be4fe0bea7" />
  <p><i>Signup Page — Multi-input registration flow with pixel-perfect coordinate mapping</i></p>

  <br/>

  <img width="850" alt="Profile Page" src="https://github.com/user-attachments/assets/db22399c-2198-4e5d-977b-285e7acbe8e0" />
  <p><i>Profile Page — User dashboard featuring 4px/4px custom dashed dividers and header shadows</i></p>

</div>

**🔗 Live Demo:** [your-live-url.up.railway.app](https://scholarsphere-pied.vercel.app)

---

## Overview

PopX is a **pure frontend challenge** focused on achieving a 1:1 visual match with specialized design requirements. The project simulates a modern mobile application environment by housing the interface in a fixed **375x812px container**, centered on the webpage for a premium desktop viewing experience.

Every coordinate, font-weight, and color hex was extracted directly from the **Adobe XD `{}` CSS panel** to ensure that the digital implementation is indistinguishable from the original design.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Core Framework | React 18+ (Vite-powered) |
| Routing | React Router DOM v6 — Seamless Navigation |
| Styling | CSS3 & Precision Inline Styling (for coordinate mapping) |
| Typography | Google Fonts - Rubik (exact weights 400/500/600) |
| Design Source | Adobe XD Design Tokens |
| Deployment | Production Ready |

---

## Technical Highlights

### 1. Adobe XD Precision Mapping
Every element in the app (from the "Welcome" text to the radio buttons) is positioned using absolute coordinates derived from design tokens. For example, the **Create Account** text is mathematically placed to hit exactly `top: 683px` and `left: 127px` relative to the mobile container.

### 2. Custom Floating Label Architecture
To achieve the "cut-border" look of the input fields, we implemented a custom layered approach:
- **Label Background**: A `span` with `#F7F8F9` background placed strictly to "cut" the field border.
- **Floating Labels**: Precisely positioned at `left: 34px` to ensure the text alignment transition feels premium.

### 3. Mobile-First Shell Centering
The app uses a `relative` positioning strategy within a centered `margin: 0 auto` wrapper. This ensures that while the app is built for a 375px wide viewport, it remains perfectly anchored and accessible on full-screen desktop browsers.

### 4. Optimized Navigation
Using `react-router-dom`, the application maintains high performance during transitions. Navigation from the **Landing Page** to **Signup** or **Login**, and eventually to the **Profile**, happens instantly without page reloads.

---

## Project Structure

```plaintext
popx-app/
├── public/              # Static assets and favicons
├── src/
│   ├── assets/          # High-fidelity images & SVG icons (Camera icon, Profile pic)
│   ├── pages/
│   │   ├── LandingPage.jsx   # Initial entry with dual routing options
│   │   ├── LoginPage.jsx     # Credential entry with precision placeholders
│   │   ├── SignupPage.jsx    # Complex form with radio button logic
│   │   └── ProfilePage.jsx   # Dash-lined info summary & bio view
│   ├── components/       # Reusable pixel-perfect atomic units
│   ├── styles/           # Global resets and Rubik font imports
│   ├── App.jsx           # Root router and layout management
│   └── main.jsx          # Vite entry point
├── index.html
├── vite.config.js
└── README.md
```

---

## Local Setup

```bash
# Clone the repository
git clone https://github.com/KadamAmruta03/Educase-India-Assignment.git

# Enter the directory
cd popx-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open: `http://localhost:5173`

---

## What I Learned

This project was a deep dive into **UI/UX precision engineering**:
- **Atomic Layout Control**: Mastered the art of translating absolute design coordinates into responsive React components.
- **Font Rendering**: Dealing with specialized `line-height` requirements (like 28px/17px) where character bleeding must be managed for baseline accuracy.
- **State-Driven Styles**: Implementing custom radio button logic where the border and inner-dot colors change dynamically based on selection (`#642AF5` focus).
- **CSS Resets**: Building a clean environment to ensure standard browser margins don't interfere with Adobe XD positioning.

---

## Contributing

Suggestions for UI optimizations are always welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is open-source and intended for the Educase-India-Assignment portfolio.
