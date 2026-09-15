# AGENTS.md

## Project Overview

This project is an Airbnb-style property listing web application built with Next.js.

The application includes:
- Home page with property listings
- Property listing/details page
- Property image gallery
- Full-page Photo Tour
- Image Lightbox
- Category-based photo navigation
- Responsive UI

## Technology Stack

- Next.js
- React
- TypeScript
- JavaScript/JSX
- CSS
- Next.js Image component
- Webpack for production builds

## Development Guidelines

### General

- Inspect the existing project structure before making changes.
- Make focused changes related to the requested feature.
- Do not rewrite or remove working functionality unnecessarily.
- Keep components reusable and readable.
- Preserve the existing UI and interaction behavior when modifying code.

### UI

- Maintain the Airbnb-inspired visual style already used in the project.
- Use consistent spacing, typography, borders, rounded corners, and image sizing.
- Ensure layouts work on different screen sizes.
- Avoid introducing unnecessary UI elements.

### Photo Gallery

The photo browsing experience consists of three distinct states:

1. **Listing Page**
   - Displays property information and preview images.
   - Clicking an image or "Show all photos" opens the Photo Tour.

2. **Photo Tour**
   - A separate full-page gallery.
   - Displays photos grouped into categories.
   - Category thumbnails navigate to the corresponding gallery section.
   - Clicking an image opens the Lightbox.
   - The Photo Tour is not a modal.

3. **Lightbox**
   - Opens over the Photo Tour.
   - Uses a white background.
   - Displays the selected image.
   - Supports previous/next navigation.
   - Displays the current image number.
   - Supports keyboard navigation using:
     - ArrowLeft
     - ArrowRight
     - Escape
   - Closing the Lightbox should return to the Photo Tour rather than the Listing Page.

### Image Data

- Use a consistent image dataset wherever possible.
- Avoid duplicating image definitions across components.
- Preserve image ordering so that the selected image can be opened correctly in the Lightbox.
- Use the clicked image's index when opening the Lightbox.

### Navigation

Expected navigation flow:

Home
→ Listing Page
→ Photo Tour
→ Lightbox

Closing the Lightbox:
→ Photo Tour

Back from Photo Tour:
→ Listing Page

Back from Listing Page:
→ Home

## Code Quality

- Prefer clear component names.
- Keep event handlers understandable.
- Avoid unnecessary state.
- Avoid duplicated logic.
- Use TypeScript types where appropriate.
- Keep accessibility in mind for buttons, images, and navigation controls.

## Testing

Before considering a change complete:

1. Run the development server.
2. Test the affected interaction manually.
3. Check browser console for errors.
4. Test the production build.

The production build currently uses Webpack:

```bash
npm run build