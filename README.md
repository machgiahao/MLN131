# Video Narrative Website

A scroll-based narrative experience built with Next.js, featuring 5 video chapters with smooth animations.

## Features

- 🎬 **5 Video Chapters** - Each chapter tells part of the story
- 📜 **Scroll-Based Navigation** - Smooth scrolling between sections
- ✨ **Framer Motion Animations** - Text fades, video scaling, background transitions
- 📊 **Progress Indicator** - Visual guide showing current chapter
- 🎨 **Minimal Design** - Clean, documentary-style interface
- 🚫 **No Autoplay** - Videos only play when user chooses

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page with chapters
│   └── globals.css       # Global styles
├── components/
│   ├── Chapter.tsx       # Chapter component
│   └── ProgressIndicator.tsx  # Side progress bar
└── public/               # Static assets
```

## Customization

To customize the chapters, edit the `chapters` array in [app/page.tsx](app/page.tsx):

```typescript
const chapters = [
  {
    id: 1,
    number: "01",
    title: "Your Chapter Title",
    description: "Your chapter description",
    videoUrl: "your-video-url.mp4",
    bgColor: "#hexcolor"
  },
  // ... more chapters
];
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
