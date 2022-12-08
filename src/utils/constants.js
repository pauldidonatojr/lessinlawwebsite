import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 0,
    text: 'Home',
    url: '/',
  },
  {
    id: 1,
    text: 'Firm Overview',
    url: '/firmoverview',
  },

  {
    id: 2,
    text: 'Practice Areas Overview',
    url: '/practiceareas',
  },
  {
    id: 3,
    text: 'Attorney Profiles',
    url: '/attorneyprofiles',
  },
  {
    id: 4,
    text: 'Resource Links',
    url: '/resourcelinks',
  },
  {
    id: 5,
    text: 'Communities',
    url: '/communities',
  },
  {
    id: 6,
    text: 'Contact Us',
    url: '/contactus',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]
export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaGoogle />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaYoutube />,
  },
]

export const profiles = [
  {
    id: 1,
    logo:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer3_d9h9li.jpg',
    icon: <GiCompass />,
    title: 'Jeffrey Lessin',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    logo:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer2_hpffed.jpg',

    icon: <GiDiamondHard />,
    title: 'Mark T. Richter',
    text: `
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
  },
  {
    id: 3,
    logo:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer1_lqnbws.webp',
    icon: <GiStabbedNote />,
    title: 'James Murphy',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi.
`,
  },
  //  {
  //   id: 4,
  //   logo:
  //   icon: <GiStabbedNote />,
  //   title: 'our commitment.',
  //   text: `Never have to worry about your lease being paid on time. We love what we do and our Landlords get a house that will be maintained better than they could ever hope for.`,
  //  },
]
export const Reviews = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_2_tiyzm1.webp',
    text: `You have options when it comes to renting your home, but most people know
       about it.`,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_1_rfakam.jpg',
    text: ` Renting your house doesn't have to be a succession of hope and
       disappointment with each tennant you approve.`,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_4_ajsjwl.jpg',
    text: `When you work with us, you
       get a hassle and worry free experience that makes your life so much
       easier. That is our guarantee!!!`,
  },
]
export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
