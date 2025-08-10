# WILDVIS ShareLM Explorer - Frontend Demo

An interactive web application for exploring and visualizing conversation data. Built with Next.js, React, and Deck.gl.

![WILDVIS ShareLM Explorer](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Deck.gl](https://img.shields.io/badge/Deck.gl-Visualization-orange?style=for-the-badge)

## 🚀 Live Demo

**[View Live Application](https://wildvis-sharelm-explorer.vercel.app)**

## Features

- 🔍 **Smart Search**: Filter conversations by keywords with real-time results
- 🗺️ **Interactive Visualization**: 2D scatter plot mapping of conversations
- 🎨 **Modern UI**: Clean, dark-themed interface built with Tailwind CSS
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Optimized frontend with mock data for demonstration

## Frontend-Only Version

This version uses mock conversation data to demonstrate the interface and functionality without requiring data preprocessing. Perfect for:

- Testing the user interface
- Demonstrating visualization capabilities
- Frontend development and customization
- Quick deployment and sharing

## Getting Started

### Prerequisites

- Node.js 18+
- Git

### Quick Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/wildvis-sharelm-explorer.git
   cd wildvis-sharelm-explorer
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to `http://localhost:3000`

That's it! No data preprocessing required.

## Project Structure

\`\`\`
wildvis-sharelm-explorer/
├── components/
│   └── Layout.js              # Shared navigation layout
├── pages/
│   ├── api/
│   │   └── data.js           # API endpoint with mock data
│   ├── _app.js               # Next.js app wrapper
├── pages/
│   ├── index.js              # Search page
│   └── visualizer.js         # Interactive visualization page
├── styles/
│   └── globals.css           # Global styles and Tailwind config
└── package.json              # Dependencies and scripts
\`\`\`

## API Endpoints

### GET `/api/data`
Returns all mock conversation data.

### GET `/api/data?search=query`
Returns filtered conversations matching the search query.

**Response Format:**
\`\`\`json
[
  {
    "conversation_id": "string",
    "full_text": "string",
    "x": number,
    "y": number
  }
]
\`\`\`

## Technologies Used

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Visualization**: Deck.gl, WebGL
- **Deployment**: Vercel
- **Data**: Mock conversation data for demonstration

## Deployment

### Deploy to Vercel (One-Click)

1. **Push to GitHub** (if not already done)

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings
   - No environment variables or data files needed!

### Deploy via Vercel CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## Extending with Real Data

To use real conversation data instead of mock data:

1. Replace the mock data in `pages/api/data.js` with your actual dataset
2. Implement data preprocessing pipeline
3. Add CSV parsing or database integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Built with ❤️ for the data visualization community**
