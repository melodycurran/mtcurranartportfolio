import {data} from './data.js';

const aboutContent = '<div class="about-content"><h2>About</h2><p>Melody Curran is a contemporary oil painter based in Kalispell, Montana. Her work explores the quiet, internal landscapes of the human psyche, capturing the subtle emotions and fleeting thoughts that connect us all. Through a deliberate interplay of light and shadow, Curran translates raw vulnerability, resilience, and introspection into luminous, permanent moments on canvas. Rather than creating standard portraits, her paintings serve as psychological mirrors, inviting viewers to pause and recognize their own inner worlds reflected in another. By bringing these hidden, deeply personal experiences to the surface, Curran\'s work celebrates the profound complexity, beauty, and shared emotional truth of the human condition.</p></div>';

const contactContent = '<div class="contact-content"><h2>Contact</h2><p>For inquiries email me at curranmelody02@gmail.com. Please do not send spam messages.</p></div>';

const content = document.querySelector('.content');


function renderGallery() {
  content.innerHTML = data.map(item => generateThumbnailHTML(item)).join('');
}

function getContent() {
  const recentWork = document.querySelector('.recent-work');
  
 
  recentWork.addEventListener('click', () => {
    renderGallery();
  });


  content.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('.artwork-link');
    
    if (clickedLink) {
      event.preventDefault();
      
    
      const parentItem = event.target.closest('.portfolio-item');
      const itemId = parseInt(parentItem.getAttribute('data-id'));
      
   
      const selectedArt = data.find(item => item.id === itemId);


      if (selectedArt) {
        content.innerHTML = `
          <div class="modal">
            <span class="close-btn">CLOSE</span>
            <img src="${selectedArt.image}" alt="${selectedArt.title}" class="image modal-content"/>
          </div>`;
      }
      return;
    }

   
    if (event.target.classList.contains('close-btn')) {
      renderGallery();
      return;
    }
  });
}

function getAboutContent() {
  const aboutLink = document.querySelector('.about-link');
  aboutLink.addEventListener('click', () => {
    content.innerHTML = aboutContent;
  });
}

function getContactContent() {
  const contactLink = document.querySelector('.contact-link');
  contactLink.addEventListener('click', () => {
    content.innerHTML = contactContent;
  });
}

function generateThumbnailHTML(item) {
  return `
    <div class="portfolio-item" data-id="${item.id}">
      <a href="#" class="artwork-link">
        <img src="${item.image}" alt="${item.title}" class="artwork-thumbnail"/>
      </a>
      <p> ${item.title} | ${item.dimensions} | ${item.medium} | ${item.year} </p>
    </div>
  `;
}


getContent();
getAboutContent();
getContactContent();


renderGallery();
