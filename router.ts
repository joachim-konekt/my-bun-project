// Ensure Bun types are available for TypeScript
/// <reference types="bun-types" />

import { FileSystemRouter } from 'bun';

// Initialize the FileSystemRouter
const router = new FileSystemRouter({
    dir: './src/pages', // Path to your pages directory
    style: 'nextjs', // Specify the routing style
    origin: 'https://mydomain.com', // Set the origin
    assetPrefix: '_next/static/' // Define the asset prefix
});

// Example of matching a route
const match = router.match('/page');
if (match) {
    console.log('Matched Route:', match);
}

// Remember to reload the router if your file system changes
router.reload();
