import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

// Local images array
const localImages = [
  `images/8npha5.jpg`,
  `images/8nu7so.jpg`,
  `images/8nh1ya.jpg`,
];

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time',
    },
    {
      action: 'post_redirect',
      label: 'Show Random Picture',
      target: `${NEXT_PUBLIC_URL}/api/random-picture`, // Ensure this points correctly
    },
  ],
  image: {
    src: localImages[0], // Default image
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`, // This handles the overall post behavior for the frame
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>ARF</h1>
    </>
  );
}
