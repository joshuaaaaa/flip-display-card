# License File

Create a file named `LICENSE` with this content:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

# Contributing Guide

Create a file named `CONTRIBUTING.md`:

```markdown
# Contributing to Flip Display Card

Thank you for your interest in contributing! 🎉

## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Your Home Assistant version
   - Screenshots if applicable

### Suggesting Features
1. Check [Issues](../../issues) for similar suggestions
2. Create a new issue describing:
   - The feature you'd like to see
   - Why it would be useful
   - How it might work

### Pull Requests
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

1. Clone your fork
2. Make changes to `flip-display-card.js`
3. Test in Home Assistant:
   - Copy file to `/config/www/`
   - Clear browser cache (Ctrl+F5)
   - Test the card

## Code Style
- Use clear, descriptive variable names
- Add comments for complex logic
- Follow existing code structure
- Test with both `digits_per_card: 1` and `digits_per_card: 2`

## Questions?
Feel free to open an issue for any questions!

Thank you for contributing! 🙏
```

---

# .gitignore

Create a file named `.gitignore`:

```
# Node modules
node_modules/

# Build files
dist/
*.map

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Test files
test/
*.test.js

# Logs
*.log
npm-debug.log*

# Temporary files
*.tmp
*.bak
*~
```
