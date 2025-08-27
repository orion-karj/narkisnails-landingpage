# Narkis Nails Landing Page

A beautiful, responsive landing page for Narkis Nails - a professional nail studio specializing in gel nail treatments.

## Features

- ✨ **Server-Side Rendered** using Express.js and Pug templates
- 📱 **Fully Responsive** design that works on all screen sizes
- 🎨 **Modern UI** with beautiful gradients and animations
- 🌐 **Hebrew RTL Support** with proper text direction
- 🔗 **WhatsApp Integration** for appointment booking
- 📱 **Mobile-First** approach with touch-friendly interactions

## Technologies Used

- **Backend**: Node.js + Express.js
- **Template Engine**: Pug (formerly Jade)
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Fonts**: Google Fonts (Heebo - Hebrew-friendly)
- **Icons**: Custom SVG icons (no external icon libraries)

## Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic restarts during development.

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
narkisnails-landingpage/
├── app.js                 # Main Express application
├── package.json          # Dependencies and scripts
├── views/
│   └── index.pug        # Main Pug template
├── public/
│   └── css/
│       └── style.css    # Stylesheet
└── README.md            # This file
```

## Customization

### Content Updates
- Edit the data in `app.js` to update services, prices, and contact information
- Modify the Pug template in `views/index.pug` for structural changes
- Update styles in `public/css/style.css` for visual changes

### Styling
The design uses a pink color scheme (`#FF6B9D`) that can be easily customized by changing the CSS variables and color values.

### Adding New Services
To add new services, simply add them to the `services` array in `app.js`:

```javascript
services: [
  { name: 'New Service Name', price: '150 ₪' },
  // ... existing services
]
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design ensures compatibility across all devices

## Deployment

The application can be deployed to any Node.js hosting platform:

- **Heroku**: Add a `Procfile` with `web: node app.js`
- **Vercel**: Configure as a Node.js application
- **DigitalOcean**: Deploy to a droplet with PM2
- **AWS**: Deploy to EC2 or use Elastic Beanstalk

## License

MIT License - feel free to use and modify as needed.

## Contact

For questions about this landing page template, please refer to the project documentation or create an issue in the repository.
