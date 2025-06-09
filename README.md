# ThreatPulse 🔍

**AI-Powered Travel Safety Intelligence for Digital Nomads**

ThreatPulse is the world's first real-time travel threat intelligence platform that combines crowdsourced reports, AI analysis, and OSINT to reveal hidden risks, scams, and surveillance threats that traditional travel advice misses.

## 🎯 What Makes ThreatPulse Different

- **Hyper-Local Intelligence**: Street-level threat data, not generic country warnings
- **AI-Powered Analysis**: DeepSeek and Hugging Face models classify and validate threats
- **Real-Time Updates**: Fresh intelligence from nomads, locals, and news sources
- **Digital-First**: Covers WiFi risks, surveillance, and crypto-related threats
- **Personalized**: Risk assessment based on your travel profile and experience

## 🚀 Features

### Core Intelligence
- **Smart Search**: Natural language queries like "Is Roma Norte safe for solo female travelers?"
- **Threat Categories**: Street-Smart, Digital Risks, Local Intel
- **AI Report Analysis**: Automatic threat classification and confidence scoring
- **Personalized Recommendations**: Tailored safety advice based on your profile

### Data Sources
- Crowdsourced incident reports from travelers
- Local news monitoring and extraction
- Embassy alerts and government warnings
- Community-driven intelligence sharing

### Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **AI Models**: DeepSeek (primary), Hugging Face (fallback)
- **Maps**: Mapbox integration for threat visualization
- **Database**: MongoDB Atlas (recommended)
- **Deployment**: Vercel-ready

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- NPM or Yarn
- API keys for DeepSeek and/or Hugging Face
- Mapbox access token

### Installation

```bash
# Clone the repository
git clone https://github.com/Itsdex47/threatpulse-app.git
cd threatpulse-app

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local
# DEEPSEEK_API_KEY=your_deepseek_key
# HUGGINGFACE_API_KEY=your_hf_key
# MAPBOX_ACCESS_TOKEN=your_mapbox_token

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see ThreatPulse in action.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# AI Model APIs
DEEPSEEK_API_KEY=your_deepseek_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_api_key_here

# Mapbox for maps
MAPBOX_ACCESS_TOKEN=your_mapbox_token_here

# Database (optional for MVP)
MONGODB_URI=your_mongodb_connection_string

# App Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here
```

### API Keys Setup

1. **DeepSeek API** (Primary AI - Cost Effective)
   - Sign up at [platform.deepseek.com](https://platform.deepseek.com)
   - Get API key from dashboard
   - Much cheaper than OpenAI for similar quality

2. **Hugging Face** (Fallback AI)
   - Create account at [huggingface.co](https://huggingface.co)
   - Generate API token in settings
   - Free tier available for testing

3. **Mapbox** (Maps)
   - Sign up at [mapbox.com](https://mapbox.com)
   - Get access token from account dashboard
   - Free tier includes 50k map loads/month

## 🎨 Design Philosophy

**Minimalistic & Sleek**
- Dark gradient theme with purple/pink accents
- Clean typography with Inter font
- Subtle animations and micro-interactions
- Mobile-first responsive design
- Glass morphism effects for modern feel

**User Experience**
- Chat-like interface for natural queries
- Instant visual feedback with loading states
- Color-coded threat severity (Green/Yellow/Red/Purple)
- One-click quick searches for popular destinations

## 🧠 AI Integration

### DeepSeek Integration
```typescript
const analysis = await aiService.analyzeReport(
  "Fake taxi drivers at Mexico City airport",
  "Mexico City"
);
// Returns: threat type, severity, confidence, recommendations
```

### Threat Analysis Pipeline
1. **Input Validation**: Clean and normalize user reports
2. **AI Classification**: Extract threat type, location, severity
3. **Confidence Scoring**: Rate reliability of the report
4. **Personalization**: Match threats to user profiles
5. **Actionable Insights**: Generate specific prevention tips

## 📱 Mobile Experience

ThreatPulse is built mobile-first:
- Progressive Web App (PWA) capabilities
- Touch-optimized interface
- Offline threat caching (planned)
- Push notifications for location-based alerts (planned)

## 🗺️ Roadmap

### Phase 1 (MVP - Current)
- [x] Core search and AI analysis
- [x] Basic threat reporting
- [x] Responsive UI design
- [ ] User authentication
- [ ] Basic threat database

### Phase 2 (Growth)
- [ ] Interactive threat map
- [ ] Real-time notifications
- [ ] News scraping automation
- [ ] User reputation system
- [ ] Mobile app (React Native)

### Phase 3 (Scale)
- [ ] Predictive threat modeling
- [ ] Corporate travel integration
- [ ] API for travel companies
- [ ] Multi-language support
- [ ] Premium analytics dashboard

## 💼 Business Model

**Freemium Approach**
- **Free**: Basic threat search and reports
- **Premium ($5/month)**: Detailed analysis, personalized alerts, historical data
- **Enterprise**: API access, custom integrations, bulk licensing

**Revenue Streams**
- Subscription fees from travelers
- B2B sales to travel insurance companies
- Affiliate commissions (VPN, security products)
- Corporate travel management solutions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines
- Use TypeScript for all new code
- Follow the existing code style (Prettier + ESLint)
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help?
- 📧 Email: support@threatpulse.app
- 💬 Discord: [Join our community](https://discord.gg/threatpulse)
- 🐛 Issues: [GitHub Issues](https://github.com/Itsdex47/threatpulse-app/issues)

## 🌟 Acknowledgments

- DeepSeek team for cost-effective AI models
- Digital nomad communities for inspiration
- Open source contributors
- Travel safety researchers and experts

---

**Built with ❤️ for the global nomad community**

Stay safe. Travel smart. Use ThreatPulse.# Force deployment refresh
