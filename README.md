# Video Capture App

A simple React application that captures photos using the WebRTC `getUserMedia` API.

## Features

- 📷 Access device camera (front-facing)
- ⏱️ 5-second countdown with visual progress bar
- 📸 Automatic photo capture
- 🎨 Clean, modern UI with responsive design
- ⚠️ Error handling with user-friendly messages

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **WebRTC API** - Native browser media access
- **CSS3** - Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
pnpm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Instructions.tsx      # Start button and instructions
│   ├── VideoPreview.tsx       # Video stream display with progress bar
│   └── PhotoCapture.tsx       # Canvas for captured photo
├── hooks/
│   └── useCamera.ts           # Custom hook for camera logic
├── constants.ts               # App constants (dimensions, timing)
├── App.tsx                    # Main app component
└── App.css                    # Global styles
```

## How It Works

1. User clicks "Start" button
2. Browser requests camera permission
3. Video stream displays with a 5-second progress bar
4. Photo is automatically captured to canvas
5. Camera stops and photo is displayed
