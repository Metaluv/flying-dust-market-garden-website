# Flying Dust Market Garden Website

A modern, responsive website for Flying Dust Market Garden Ltd., showcasing fresh, locally-grown produce and sustainable farming practices.

## 🌱 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Team Section**: Showcase of 10 team members with profile displays
- **Product Gallery**: Highlighted fresh produce categories
- **Services Overview**: CSA boxes, farmers market, tours, and wholesale
- **Contact Information**: Easy access to location, phone, and email

## 🎨 Brand Colors

- **Primary Dark**: `#00122b` - Used for header and footer backgrounds
- **Primary Accent**: `#ff990a` - Orange accent for buttons and highlights
- **Text Colors**: White on dark backgrounds, appropriate grays for content

## 📁 Project Structure

```
flying-dust-market-garden-website/
├── index.html                 # Main HTML file
├── assets/
│   ├── images/
│   │   ├── products/         # Product images
│   │   ├── team/            # Team member photos
│   │   └── gallery/         # General gallery images
│   ├── logos/               # Logo variations and favicon
│   └── icons/              # Custom icons
├── css/
│   └── styles.css          # Custom styles and animations
├── js/
│   └── main.js            # JavaScript for interactions
├── pages/                 # Additional pages (future)
├── components/           # Reusable components (future)
├── data/                # Data files (future)
└── docs/               # Documentation

```

## 🚀 Quick Start

1. **Open the website**:
   - Navigate to the project folder
   - Open `index.html` in your browser

2. **Required Internet Connection**:
   - The site uses CDN-hosted libraries:
     - Tailwind CSS for styling
     - Lucide Icons for iconography
     - Alpine.js for interactions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS for interactions
- **Lucide Icons**: Open-source icon library
- **Alpine.js**: Lightweight framework for reactivity

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Update Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --primary-dark: #00122b;
  --primary-orange: #ff990a;
  /* Add more custom properties */
}
```

### Add New Sections
1. Add HTML section in `index.html`
2. Update navigation links
3. Add corresponding styles in `css/styles.css`

### Replace Placeholder Images
1. Add real images to appropriate folders in `assets/images/`
2. Update image sources in `index.html`
3. Optimize images for web (recommended: WebP format)

## 📈 Future Enhancements

- [ ] Contact form functionality
- [ ] Newsletter subscription
- [ ] Product catalog with filtering
- [ ] Online ordering system
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration

## 📝 Content Management

### Team Members
Team profiles are currently hardcoded in the HTML. To update:
1. Locate the "Team Section" in `index.html`
2. Update names, titles, and descriptions
3. Add real photos to `assets/images/team/`

### Products
Product cards are in the "Products Section". Update:
- Product names and descriptions
- Seasonal availability badges
- Add product images

## 🌐 Deployment

The website is ready for static hosting on:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

Simply upload all files maintaining the folder structure.

## 📞 Support

For updates or modifications to the website, contact the development team.

## 📄 License

© 2024 Flying Dust Market Garden Ltd. All rights reserved.

---

**Website Development**: Built with modern web technologies for optimal performance and user experience.