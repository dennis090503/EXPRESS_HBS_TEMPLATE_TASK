const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars Template Engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Register the layout directory for structural layouts
hbs.registerPartials(path.join(__dirname, 'views', 'layouts'));

// Serve Static Assets out of the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route: Dynamic Homepage
app.get('/', (req, res) => {
    const homeData = {
        title: 'Phase Shift - Home',
        layout: 'layouts/main',
        
        // Dynamic Banner texts
        banner: {
            highlightText: 'Phase Shift',
            description: 'a responsive HTML5 site template freebie by TEMPLATED. Released for free under the Creative Commons Attribution license, so use it for whatever (personal or commercial) – just give us credit! Check out more of our stuff at our site or follow us on Twitter.',
            buttonText: 'Read More',
            buttonLink: '#'
        },

        // --- SPLIT INTO TWO DISTINCT ROWS OF 3 CARDS EACH ---
        featuredRow1: [
            { image: '/images/pic01.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' },
            { image: '/images/pic02.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' },
            { image: '/images/pic03.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' }
        ],
        featuredRow2: [
            { image: '/images/pic01.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' },
            { image: '/images/pic02.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' },
            { image: '/images/pic03.jpg', description: 'Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum wisi maecenas ligula.', buttonLink: '#' }
        ],

        // Dynamic Main Content features
        mainLeftFeatures: [
            { iconClass: 'fa-wrench', title: 'Integer ultrices', details: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.' },
            { iconClass: 'fa-leaf', title: 'Aliquam luctus', details: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.' }
        ],
        mainRightFeatures: [
            { iconClass: 'fa-cogs', title: 'Integer ultrices', details: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.' },
            { iconClass: 'fa-road', title: 'Aliquam luctus', details: 'In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.' }
        ]
    };

    res.render('index', homeData);
});

// Route: Left Sidebar
app.get('/left-sidebar', (req, res) => {
    res.render('left-sidebar', { title: 'Phase Shift - Left Sidebar', layout: 'layouts/main' });
});

// Route: Right Sidebar
app.get('/right-sidebar', (req, res) => {
    res.render('right-sidebar', { title: 'Phase Shift - Right Sidebar', layout: 'layouts/main' });
});

// Route: No Sidebar
app.get('/no-sidebar', (req, res) => {
    res.render('no-sidebar', { title: 'Phase Shift - No Sidebar', layout: 'layouts/main' });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});