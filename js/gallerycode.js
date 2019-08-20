window.naturalGalleries = window.naturalGalleries || [];

var gallery = {
    id: 'gallery', // sends id of dom element or
    element: document.getElementById('gallery'), // sends dom element by reference
    options: { // Options

        format: 'natural',

        // Max row height. Works for both natural and square format. Prefer this option for a "responsive" approach
        rowHeight: 350,

        // Only for square format. Disables responsive
        imagesPerRow: 2,

        round: 3, // Rounded corner
        margin: 3, // Gap between thumbnails
        limit: 0, // Number of rows, activate pagination (disables infinite scroll)
        minRowsAtStart: 2, // Initial number of rows. If null, gallery tries to define the number of required rows to fill the viewport.

        showLabels: 'hover', // When to show the labels in thumbnails

        lightbox: true, // Open a lightbox with a bigger image -> activate a zoom effect on hover on thumbnails
        zoomRotation: true,

        // Number of pixels to offset the infinite scroll autoload
        // If negative, next rows will load before the bottom of gallery container is visible
        // If 0 the next rows will load when the bottom of the gallery will be visible
        // If positive, the next rows will load when the bottom of the gallery will be this amount above the end of the viewport.
        // If positive be sure to always have this number of pixels as margin, padding or more content after the gallery.
        infiniteScrollOffset: 0,

        // Header / Search options.
        showCount: false,
        searchFilter: false,
        categoriesFilter: false,
        showNone: false,
        showOthers: false,
        labelCategories: 'Category',
        labelNone: 'None',
        labelOthers: 'Others',
        labelSearch: 'Search',
        labelImages: 'Images',
    },
    images: [
        {
            "thumbnail": "https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=0653332e9c1498112a303c583c102f6a",
            "enlarged": "https://images.unsplash.com/photo-1461529959205-ba7d61debd0b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a74e25633c9c659c0778b71ca9aa33a0",
            "title": "Antonio Ron",
            "categories": [
                {
                    "id": 4,
                    "title": "Nature",
                    "photo_count": 41787,
                    "links": {
                        "self": "https://api.unsplash.com/categories/4",
                        "photos": "https://api.unsplash.com/categories/4/photos"
                    }
                }
            ],
            "tWidth": 443.74009508716324,
            "tHeight": 300,
            "eWidth": 2800,
            "eHeight": 1893
        },
       
    ]
};
window.naturalGalleries.push(gallery);