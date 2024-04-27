// pages/api/random-picture.js

// Array of images stored locally
const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
  ];
  
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImage = images[randomIndex];
      
      res.status(200).json({ src: randomImage });
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  