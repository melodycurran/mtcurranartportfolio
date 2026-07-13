import {data} from './data.js';

const aboutContent = '<div class="about-content"><h2>About</h2><p>MT Curran is an emerging oil painter based in Montana who found her passion drawing on the walls of her parent\'s home. Born into poverty, she had to work odd jobs to make ends meet all while developing herself into an artist she is today-- one that has deep empathy and love for humanity. Working in oil, Curran channels her inner thoughts influenced by her life experiences the struggles and desires to preserve oneself despite the relentless pressures of external forces.</p></div>';

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
