import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import './AboutUsCommon.css';
import emblem from '../Assets/emblem.png';

function Emblem() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">
        <img src={emblem} />
        <div className="content">
          <h1>Our Emblem</h1>
          <p>Vivekananda's motto for his organization, "Atmano Mokshartham Jagaddhitaya Cha" (For the liberation of the Self and service to the society), encapsulates the dual goals of personal spiritual liberation and societal welfare. The emblem he designed is rich with symbolism:</p>
          <ol>
            <li><p><strong>Elegant Swan</strong>: Represents purity and spiritual transcendence.</p></li>
            <li><p><strong>Rising Sun</strong>: Symbolizes the awakening of knowledge and enlightenment.</p></li>
          <li><p><strong>Wavy Waters</strong>: Reflect the continuous flow of life and the challenges faced.</p></li>
            <li><p><strong>Lotus Flower and Leaves</strong>: Signify purity and the unfolding of spiritual consciousness by devotion to Devine entity amidst the worldly challenges.</p></li>
            <li><p><strong>Hooded Serpent</strong>: Encircling the whole picture, represents the  regenerative and creative power of the divine inherent in all human beings.</p></li>
          </ol>
          <p>The emblem of the Ramakrishna Order, designed by Swami Vivekananda, stands as a remarkable artistic creation. This emblem, born from a moment of profound spiritual inspiration, symbolizes harmony and synthesis of four paths of realizing the Supreme truth those are wisdom,devotion,service for God and meditation, offering a point of reverential self dedication amidst an era marked by conflict and discord. It encapsulates Swamiji’s teachings on unity and integration, guiding individuals toward the fulfillment of life’s purpose. This emblem eloquently conveys his vision for humanity, aiming for realization and harmony across both Eastern and Western cultures.</p>
          <p>Romain Rolland described Sri Ramakrishna’s life as the fulfillment of the spiritual aspirations of three hundred million Hindus for the last two thousand years. Max Müller designated him as “a real mahatman,” or truly a great master. “No one,” said Mahatma Gandhi, “can read the story of his life without being convinced that God alone is real and all else is an illusion.”</p>
        </div>
      </div>
    </>
  );
}

export default Emblem;
