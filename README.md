# Senorita 💕 Romantic Web App

A beautiful, fully responsive romantic web application built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🌸 **Landing Screen**: Envelope with floating hearts and sparkles
- 💌 **Interactive Envelope**: Click to open with smooth animations
- 📝 **Letter Screen**: Handwritten-style Shayari with elegant design
- 💖 **Final Message**: Glowing text with rising heart particles
- 📱 **Mobile-First**: Responsive design for all devices
- ✨ **Smooth Animations**: Framer Motion transitions throughout

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Google Fonts** - Playfair Display, Poppins, and Caveat

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Envelope.jsx      # Envelope component with opening animation
│   ├── Letter.jsx        # Letter component with Shayari
│   └── FinalMessage.jsx  # Final message with heart particles
├── App.jsx               # Main app with screen state management
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Colors & Theme
The app uses a soft pastel gradient theme. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    backgroundImage: {
      'pastel-gradient': 'linear-gradient(135deg, #fce4ec 0%, #e1bee7 25%, #ffe0b2 50%, #f8bbd0 75%, #e8f5e8 100%)',
    }
  }
}
```

### Shayari Text
Update the romantic message in `src/components/Letter.jsx`:

```javascript
const shayari = `Your custom message here...`;
```

### Background Music
Add a romantic instrumental file as `public/romantic-music.mp3` for auto-play on the final screen.

## Build & Deploy

1. Build for production:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Made with 💕 for Senorita

---

**Note**: The app includes background music that may be blocked by browser autoplay policies. Users may need to interact with the page first for audio to play.
