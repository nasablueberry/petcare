# Contributing to WarmPaws

## Git Commit Guidelines

This project follows a structured commit message format for better version control and project history.

### Commit Message Format

```
<type>: <subject>

<body> (optional)
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Example Commits for This Project

Here are 10+ meaningful commit examples you can use:

```bash
# Initial Setup
git commit -m "chore: initialize project with Vite and React"
git commit -m "chore: configure Tailwind CSS and global styles"

# Firebase & Authentication
git commit -m "feat: setup Firebase configuration with environment variables"
git commit -m "feat: implement authentication context with login and signup"
git commit -m "feat: add Google OAuth authentication"
git commit -m "feat: implement password reset functionality"

# Components
git commit -m "feat: create responsive navbar with conditional rendering"
git commit -m "feat: build footer component with contact information"
git commit -m "feat: develop service card component with booking button"
git commit -m "feat: implement protected route wrapper for secure pages"

# Pages
git commit -m "feat: design home page with hero slider using Swiper"
git commit -m "feat: create service details page with booking form"
git commit -m "feat: build login page with password toggle and validation"
git commit -m "feat: implement registration page with form validation"
git commit -m "feat: add forgot password page with email prefill"
git commit -m "feat: create user profile page with statistics"
git commit -m "feat: implement profile update functionality"

# Features
git commit -m "feat: add winter care tips section to home page"
git commit -m "feat: create expert vets showcase section"
git commit -m "feat: implement customer testimonials section"
git commit -m "feat: add toast notifications for user feedback"
git commit -m "feat: integrate AOS animations throughout the app"

# Data & Content
git commit -m "chore: add services JSON data with 8 winter care services"
git commit -m "style: optimize images and add proper alt texts"

# Styling & UX
git commit -m "style: implement responsive design for mobile devices"
git commit -m "style: enhance button hover effects and transitions"
git commit -m "style: add loading states for async operations"
git commit -m "style: improve form field styling and error states"

# Bug Fixes
git commit -m "fix: resolve route refresh issue for SPA behavior"
git commit -m "fix: correct password validation error messages"
git commit -m "fix: ensure user redirect after successful login"
git commit -m "fix: handle image loading errors gracefully"

# Documentation
git commit -m "docs: create comprehensive README with setup instructions"
git commit -m "docs: add setup guide for Firebase configuration"
git commit -m "docs: include deployment instructions for Netlify"
git commit -m "docs: document npm packages and their usage"

# Final Touches
git commit -m "chore: add .gitignore for Node and environment files"
git commit -m "chore: create environment variables template"
git commit -m "refactor: optimize component structure and imports"
git commit -m "test: verify all routes and authentication flows"
```

## Best Practices

### Commit Message Rules

1. **Use present tense**: "add feature" not "added feature"
2. **Be descriptive**: Explain what and why, not how
3. **Keep it concise**: Subject line should be 50 chars or less
4. **Capitalize subject**: Start with a capital letter
5. **No period at end**: Don't end the subject with a period

### Good vs Bad Examples

#### ✅ Good
```bash
git commit -m "feat: add user authentication with Firebase"
git commit -m "fix: resolve navbar mobile menu toggle issue"
git commit -m "docs: update README with deployment steps"
```

#### ❌ Bad
```bash
git commit -m "changes"
git commit -m "fixed stuff"
git commit -m "Updated files"
git commit -m "asdfasdf"
```

## Development Workflow

1. **Create a new branch** (optional, for feature development)
   ```bash
   git checkout -b feature/service-booking
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the project's coding style
   - Test your changes locally

3. **Stage your changes**
   ```bash
   git add .
   ```

4. **Commit with a meaningful message**
   ```bash
   git commit -m "feat: implement service booking form validation"
   ```

5. **Push to repository**
   ```bash
   git push origin main
   ```

## Commit Frequency

- Commit after completing a logical unit of work
- Don't commit broken code
- Aim for 10-20 commits for this project
- Each commit should represent a single purpose

## Example Commit History

A good commit history for this project might look like:

```
* docs: add comprehensive README and setup guide
* feat: implement profile update functionality
* feat: add forgot password feature
* style: create responsive design for all pages
* feat: integrate AOS animations
* feat: add winter care tips section
* feat: create service details page with booking
* feat: build authentication pages (login/register)
* feat: implement protected routes
* feat: create service card components
* feat: setup Firebase authentication
* feat: design home page with hero slider
* feat: create navbar and footer components
* chore: configure environment variables
* chore: setup project with React and Tailwind
```

## Code Review Checklist

Before committing, ensure:

- [ ] Code runs without errors
- [ ] No console errors or warnings
- [ ] Responsive on all screen sizes
- [ ] All new features tested
- [ ] Environment variables properly configured
- [ ] Imports are clean and organized
- [ ] Comments added where necessary
- [ ] No sensitive data committed

---

Remember: Good commits make good developers! 🚀
