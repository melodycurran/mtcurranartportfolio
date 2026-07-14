import {data} from './data.js';

const aboutContent = '<div class="about-content"><h2>About</h2><p>MT Curran is a Philippine-born American contemporary oil painter whose work sits at the intersection of imaginative realism and psychological figuration. Specializing in highly narrative, atmospheric oil paintings, Curran\'s practice explores themes of personal agency, systemic containment, and the arduous internal journey toward self-discovery. By placing the human form within surreal, shifting environments, their work captures the universal friction of navigating unspoken pressures, overwhelming circumstances, and reclaiming individual autonomy.Currently based in Kalispell, Montana, Curran is developing a distinct body of work tailored for both regional contemporary spaces and the international fine art sector. Their studio practice is heavily focused on producing technical, archival figurative masterworks alongside intimate nature studies that connect deeply with the local landscape of the Flathead Valley.</p><h3>On the Work: A Conceptual Focus</h3><p>My work investigates the delicate boundary between structural containment and the reclamation of personal agency. Through imaginative figurative oil painting, I explore the psychological friction of individuals trapped in internal and environmental architectures they did not choose. I focus specifically on the quiet, paralyzed moment of submission—the point at which we yield to external forces under the illusion that we are powerless to change our trajectory. By centering the human figure within surreal, shifting environments, my compositions serve as visual allegories for the universal vulnerability of feeling stripped of control over our own destiny.However, the final intent of my practice is to document the grueling, non-linear journey toward knowing the higher self. Building my surfaces through deliberate layers of oil glazing, value transitions, and anatomical precision, I use physical paint texture to mirror the psychological friction of spiritual awakening. Each painting acts as a demanding threshold where the figure must confront their restraints, map their struggles, and ultimately dismantle the constructs of their containment. Through this visual documentation of resistance and self-discovery, I aim to offer a space for viewers to confront their own unseen boundaries and recognize their innate capacity for self-determination.</p></div>';

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
	  <p> ${item.competition?.award} | ${item.competition?.event} </p>
    </div>
  `;
}


getContent();
getAboutContent();
getContactContent();


renderGallery();
