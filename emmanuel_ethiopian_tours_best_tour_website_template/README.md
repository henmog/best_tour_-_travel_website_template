# Emmanuel Ethiopian Tours

A modern, responsive website for Emmanuel Ethiopian Tours featuring authentic Ethiopian travel experiences. Built with HTML5, Tailwind CSS, and Builder.io for dynamic content management.

## 🌟 Features

- **Responsive Design** - Mobile-first approach optimized for all devices
- **Builder.io Integration** - Editable content management for hero sections
- **Ethiopian Cultural Design** - Custom color palette and typography inspired by Ethiopian heritage
- **Interactive Components** - Hero carousel, testimonial slider, and interactive maps
- **Performance Optimized** - Fast loading with optimized images and CSS
- **SEO Ready** - Semantic HTML structure with proper meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Builder.io account (for content management)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/henmog/emmanuel_ethiopian_tours.git
cd emmanuel_ethiopian_tours
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
emmanuel-ethiopian-tours/
├── css/
│   ├── tailwind.css     # Tailwind source with custom styles
│   └── main.css         # Compiled CSS output
├── pages/
│   ├── homepage.html    # Main landing page
│   ├── about_emmanuel.html
│   ├── discover_ethiopia.html
│   ├── experience_collections.html
│   └── trip_planning_center.html
├── public/              # Built files for production
├── scripts/
│   └── build.js         # Custom build script
├── index.html           # Entry point with redirect
├── vercel.json          # Vercel deployment configuration
├── package.json
├── tailwind.config.js
└── DEPLOYMENT.md        # Detailed deployment guide
```

## 🎨 Design System

### Color Palette

The design uses an Ethiopian-inspired color palette:

- **Primary Gold**: `#B8860B` - Ethiopian gold warmth
- **Secondary Earth**: `#8B4513` - Ancient earth connection
- **Accent Warm**: `#CD853F` - Warm invitation moments
- **Success Green**: `#228B22` - Ethiopian highlands green

### Typography

- **Headers**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Accent Text**: Crimson Text (serif)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with CSS watching
- `npm run build` - Build for production
- `npm run build:css` - Compile Tailwind CSS
- `npm run preview` - Preview production build locally
- `npm run serve` - Start static file server

### Builder.io Integration

The hero section content is editable through Builder.io:

- `hero-headline` - Main hero title
- `hero-subheadline` - Hero subtitle

Configure your Builder.io API key in the environment variables.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Quick Deploy**:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/henmog/emmanuel_ethiopian_tours)

2. **Manual Setup**:
   - Connect your GitHub repository to Vercel
   - Set environment variable: `BUILDER_PUBLIC_KEY`
   - Deploy automatically on push to main branch

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BUILDER_PUBLIC_KEY` | Builder.io public API key | Yes |

### Detailed Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions including:
- Builder.io setup
- Custom domain configuration
- Environment variable management
- Troubleshooting guide

## 🌍 Content Management

### Builder.io Setup

1. Create a Builder.io account
2. Get your public API key
3. Configure content paths in Builder.io dashboard
4. Edit hero content directly through Builder.io visual editor

### Editable Content Paths

- `hero-headline` - Main hero section title
- `hero-subheadline` - Hero section subtitle

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions and title tags
- Open Graph tags for social sharing
- Structured data for rich snippets
- Fast loading performance

## 🛠️ Customization

### Adding New Pages

1. Create HTML file in `pages/` directory
2. Follow existing structure and classes
3. Update navigation menus
4. Add to build process if needed

### Styling Guidelines

- Use existing Tailwind classes when possible
- Follow the established color palette
- Maintain responsive design patterns
- Test on multiple devices

## 📈 Performance

- Optimized images with fallbacks
- Minified CSS in production
- Efficient font loading
- Fast server response times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🎯 About Emmanuel Tours

Emmanuel Ethiopian Tours specializes in authentic Ethiopian travel experiences, offering:
- UNESCO World Heritage site tours
- Cultural immersion experiences
- Adventure expeditions
- Expert local guides
- Sustainable tourism practices

## 📞 Contact

- **Website**: [emmanueltours.et](https://emmanueltours.et)
- **Email**: info@emmanueltours.et
- **Phone**: +251 11 123 4567
- **Location**: Addis Ababa, Ethiopia

---

Built with ❤️ for authentic Ethiopian travel experiences.
