# Contributing to ThreatPulse 🤝

First off, thank you for considering contributing to ThreatPulse! Your help makes the travel community safer.

## 📜 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a safe, inclusive environment for travelers worldwide. By participating, you agree to:

- Be respectful and inclusive
- Focus on what's best for the community
- Show empathy towards other community members
- Respect different viewpoints and experiences

## Getting Started

### Ways to Contribute

1. **📝 Report Bugs**: Found a security issue or bug? Report it!
2. **✨ Suggest Features**: Have ideas for new threat detection capabilities?
3. **📝 Improve Documentation**: Help make our docs clearer
4. **💻 Code Contributions**: Implement features, fix bugs, improve performance
5. **🌍 Translate**: Help make ThreatPulse accessible globally
6. **🗺️ Add Location Data**: Contribute threat intelligence for your area

### What We're Looking For

**High Priority**:
- AI model improvements for threat classification
- Real-time data ingestion from news sources
- Mobile app development (React Native)
- Map integration and visualization
- Security and privacy enhancements

**Medium Priority**:
- UI/UX improvements
- Performance optimizations
- Testing coverage
- Documentation improvements

## Development Setup

### Prerequisites

- Node.js 18+ 
- Git
- Code editor (VS Code recommended)
- API keys for DeepSeek/Hugging Face

### Local Development

```bash
# 1. Fork the repo on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/threatpulse-app.git
cd threatpulse-app

# 3. Install dependencies
npm install

# 4. Copy environment variables
cp .env.example .env.local

# 5. Add your API keys to .env.local
# 6. Start development server
npm run dev
```

### Project Structure

```
src/
├── app/           # Next.js app directory
├── components/     # React components
├── lib/           # Utilities and services
├── types/         # TypeScript type definitions
└── styles/        # Global styles
```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces for data structures
- Avoid `any` type - use proper typing
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use proper prop typing
- Implement error boundaries for critical features

### AI Integration
- Always include fallback mechanisms
- Implement proper error handling
- Add confidence scoring for AI outputs
- Test with edge cases and malformed data

### Security
- Never commit API keys or sensitive data
- Validate all user inputs
- Sanitize data before AI processing
- Follow OWASP guidelines for web security

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Check linting
npm run lint

# Fix formatting
npm run lint:fix
```

**Key Rules**:
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects/arrays
- Use meaningful commit messages

## Commit Guidelines

We follow conventional commits for clear history:

```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

### Examples
```bash
feat(ai): add DeepSeek fallback for threat analysis
fix(map): resolve marker clustering performance issue
docs(api): update threat analysis endpoint documentation
refactor(components): simplify ThreatCard component structure
```

## Pull Request Process

### Before Submitting

1. **Test Thoroughly**
   - Run all tests: `npm test`
   - Test in different browsers
   - Verify mobile responsiveness
   - Test with real API keys

2. **Check Code Quality**
   - Run linting: `npm run lint`
   - Check TypeScript: `npm run type-check`
   - Ensure no console errors

3. **Update Documentation**
   - Update README if needed
   - Add JSDoc comments for new functions
   - Update API documentation

### Submitting

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/threat-map-clustering
   ```

2. **Make Your Changes**
   - Keep commits atomic and logical
   - Write descriptive commit messages
   - Test each commit

3. **Push and Create PR**
   ```bash
   git push origin feature/threat-map-clustering
   ```
   - Create PR on GitHub
   - Use our PR template
   - Link related issues

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing
- [ ] Mobile testing

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Review Process

1. **Automated Checks**: CI/CD runs tests and linting
2. **Code Review**: Maintainer reviews code quality and design
3. **Testing**: Reviewer tests functionality
4. **Merge**: Once approved, PR is merged to main

### Review Criteria
- Code quality and readability
- Test coverage
- Performance impact
- Security considerations
- Documentation completeness

## Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special mentions in community updates

## Getting Help

**Stuck?** We're here to help!

- **Discord**: [Join our community](https://discord.gg/threatpulse)
- **Issues**: [GitHub Issues](https://github.com/Itsdex47/threatpulse-app/issues)
- **Email**: dev@threatpulse.app

## First-Time Contributors

Look for issues labeled `good-first-issue` - these are specifically chosen to be approachable for newcomers.

Some great starter tasks:
- Improve error messages
- Add loading states
- Enhance mobile responsiveness
- Write unit tests
- Update documentation

## AI/ML Contributions

Special guidelines for AI-related contributions:

1. **Model Performance**: Include benchmarks and accuracy metrics
2. **Bias Testing**: Test for geographic and demographic bias
3. **Fallback Logic**: Always include fallback mechanisms
4. **Cost Analysis**: Consider API costs for new AI features
5. **Privacy**: Ensure no sensitive data is sent to AI models

## Thank You! 🙏

Every contribution, no matter how small, makes the travel community safer. Thank you for being part of ThreatPulse!

---

**Questions?** Don't hesitate to ask in our Discord or open an issue. We're excited to work with you!