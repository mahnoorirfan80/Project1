import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAirbnb, faTwitter, faFacebook, faInstagram, faLinkedin, faGithub, faYoutube, faPinterest 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faGlobe,faForward,faBackward, faBars, faUser, faIcons, faHome, faBell, faEnvelope, faHeart, faComment, faCamera, faCog, faMusic 
} from "@fortawesome/free-solid-svg-icons";
import "./Cards_grid.css";
import Card from './Card';

function Cards_grid() {

 const cardsitems=[
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnypost.com%2F2024%2F09%2F30%2Fentertainment%2Fairbnb-offers-princes-purple-rain-house-in-minneapolis-to-rent-for-7-per-person%2F&psig=AOvVaw3e_iyq-oEw6fjKd4OUQaxr&ust=1728406511109000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDS5Y2b_IgDFQAAAAAdAAAAABAE",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd61I09-HuuZGYNqnj9XNiQGUVZklVmcgy0A&s"
        ],
        location:"Stay in Prince’s Purple Rain house",
        hostedby:"Hosted by Wendy And Lisa",
        price:"$7 per guest",
    },
    {
        images:["https://www.google.com/imgres?q=train%20at%20x%20mansion&imgurl=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2Fhosting%2FHosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%253D%253D%2Foriginal%2Ff4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg%3Fim_w%3D720%26im_q%3Dhighq&imgrefurl=https%3A%2F%2Fwww.airbnb.com%2Frooms%2F1208022985954091133&docid=PNXqLHtn32pz9M&tbnid=tC9XfzDPQbmTJM&vet=12ahUKEwi-9J2c7vyIAxUU0gIHHTQ9IawQM3oECBcQAA..i&w=720&h=480&hcb=2&ved=2ahUKEwi-9J2c7vyIAxUU0gIHHTQ9IawQM3oECBcQAA",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Stay in Polly Pocket's Compact",
        hostedby:"Hosted by Polly Pocket",
        price:"$17 per night",
    },
    {
        images:["https://www.google.com/imgres?q=go%20vip%20with%20kevin%20hart&imgurl=https%3A%2F%2Fwww.getlostmagazine.com%2Fwp-content%2Fuploads%2F2024%2F08%2FGL00-KevinHart-1-1920x1280-1.jpg&imgrefurl=https%3A%2F%2Fwww.getlostmagazine.com%2Fcategory-highlight%2Fgo-vip-with-kevin-hart%2F&docid=r3dOYj54un5kEM&tbnid=rBmSiW4hiyXalM&vet=12ahUKEwjk7bOb9vyIAxU3xQIHHfGCGIAQM3oECGYQAA..i&w=1920&h=1280&hcb=2&ved=2ahUKEwjk7bOb9vyIAxU3xQIHHfGCGIAQM3oECGYQAA",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Go VIP with Kevin Heart",
        hostedby:"Hosted by Kevin Heart",
        price:"Sold out",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Train at the X-Manison",
        hostedby:"Hosted by Jubillee",
        price:"$107 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Make Memories by inside out 2",
        hostedby:"Hosted by Jolly",
        price:"$22 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Go on tour with Fade",
        hostedby:"Hosted by Fade",
        price:"$117 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Drift off in up house",
        hostedby:"Hosted by Carl fredrickson",
        price:"$112 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Barbie's dream house",
        hostedby:"Hosted by Ken",
        price:"$90 per guest",
    },
  ]
  return (
    <div>
      <div className="c">
            {cardsitems.map((item,index) => 
            (
              <Card key={index} object={item}  />
            ))}
      </div>
    </div>
  )
}

export default Cards_grid
