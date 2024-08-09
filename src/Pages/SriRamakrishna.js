import './InspirationCommon.css';
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect, useRef } from "react";
import image from '../Assets/inspiration/Sri_Ramakrishna.jpg';
import { accordianCallback } from './util.js';

function AboutUs() {
  const[Sidebar,SetSidebar]=useState(true) 
  const acc = useRef(null);

  useEffect(() => {
    const child = acc.current.children;
    accordianCallback(child);
  }, []);
  
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="split">
        <div>
          <img src={image} />
          </div>
          <div className="content-2">
            <div className="header">
              <h1>Sri Ramakrishna</h1>
            </div>
            <p>Sri Ramakrishna was born on 18 February 1836 in the village of Kamarpukur about sixty miles northwest of Kolkata. His parents, Kshudiram Chattopadhyaya and Chandramani Devi, were poor but very pious and virtuous. As a child, Ramakrishna (his childhood name was Gadadhar) was dearly loved by the villagers.</p>

            <div ref={acc}>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Early Days</button>
              <div class="panel">
                <p>From early days, he was disinclined towards formal education and worldly affairs. He was, however, a talented boy, and could sing and paint well. He was fond of serving holy men and listening to their discourses. He was also very often found to be absorbed in spiritual moods. At the age of six, he experienced the first ecstasy while watching a flight of white cranes moving against the background of black clouds. This tendency to enter into ecstasy intensified with age. His father’s death when he was seven years old served only to deepen his introspection and increase his detachment from the world.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>As a Priest at Dakshineswar Temple</button>
              <div class="panel">
                <p>When Sri Ramakrishna was sixteen, his brother Ramkumar took him to Kolkata to assist him in his priestly profession. In 1855 the Kali Temple at Dakshineswar built by Rani Rasmani was consecrated and Ramkumar became the chief priest in that temple. When he died a few months later, Ramakrishna was appointed the priest. Ramakrishna developed intense devotion to Mother Kali and spent hours in loving adoration of her image, forgetting the rituals of priestly duties. His intense longing culminated in the vision of Mother Kali as boundless effulgence engulfing everything around him.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Intense spiritual practices</button>
              <div class="panel">
                <p>Sri Ramakrishna’s God-intoxicated state alarmed his relatives in Kamarpukur and they got him married to Saradamani, a girl from the neighboring village of Jayrambati. Unaffected by marriage, Sri Ramakrishna plunged into even more intense spiritual practices. Impelled by a strong inner urge to experience different aspects of God he followed, with the help of a series of Gurus, the various paths described in the Hindu scriptures, and realized God through each of them. The first teacher to appear at Dakshineswar (in 1861) was a remarkable woman known as Bhairavi Brahmani who was an advanced spiritual adept, well versed in scriptures. With her help, Sri Ramakrishna practised various difficult disciplines of the Tantrik path, and attained success in all of them. Three years later came a wandering monk by name Totapuri, under whose guidance Sri Ramakrishna attained Nirvikalpa Samadhi, the highest spiritual experience mentioned in the Hindu scriptures. He remained in that state of non-dual existence for six months without the least awareness of even his own body. In this way, Sri Ramakrishna relived the entire range of spiritual experiences of more than three thousand years of Hindu religion.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Following other faiths</button>
              <div class="panel">
                <p>With his unquenchable thirst for God, Sri Ramakrishna broke the frontiers of Hinduism, glided through the paths of Islam and Christianity, and attained the highest realization through each of them in a short span of time. He looked upon Jesus and Buddha as incarnations of God, and venerated the ten Sikh Gurus. He expressed the quintessence of his twelve-year-long spiritual realizations in a simple dictum: Yato mat, tato path “As many faiths, so many paths.” He now habitually lived in an exalted state of consciousness in which he saw God in all beings.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Worshipping his wife</button>
              <div class="panel">
                <p>In 1872, his wife Sarada, now nineteen years old, came from the village to meet him. He received her cordially, and taught her how to attend to household duties and at the same time lead an intensely spiritual life. One night he worshipped her as the Divine Mother in his room at the Dakshineswar temple. Although Sarada continued to stay with him, they lived immaculately pure lives, and their marital relationship was purely spiritual. It should be mentioned here that Sri Ramakrishna had been ordained a Sannyasin (Hindu monk), and he observed the basic vows of a monk to perfection. But outwardly he lived like a layman, humble, loving and with childlike simplicity. During Sri Ramakrishna’s stay at Dakshineswar, Rani Rasmani first acted as his patron. After her death, her son-in-law Mathur Nath Biswas took care of his needs.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Contact with some notables</button>
              <div class="panel">
                <p>Sri Ramakrishna’s name as an illumined saint began to spread. Mathur once convened an assembly of scholars, and they declared him to be not an ordinary human being but the Avatar of the Modern Age. In those days the socio-religious movement known as Brahmo Samaj, founded by Raja Ram Mohan Roy, was at the height of popularity in Bengal. Sri Ramakrishna came into contact with several leaders and members of Brahmo Samaj and exerted much influence on them. His teaching on the harmony of religions attracted people belonging to different denominations, and Dakshineswar became a veritable Parliament of Religions.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Coming of the devotees</button>
              <div class="panel">
                <p>As bees swarm around a fully blossomed flower, devotees now started coming to Sri Ramakrishna. He divided them into two categories. The first one consisted of householders. He taught them how to realize God while living in the world and discharging their family duties. The other more important category was a band of educated youths, mostly from the middle-class families of Bengal, whom he trained to become monks and to be the torchbearers of his message to humankind. The foremost among them was Narendranath, who years later, as Swami Vivekananda, carried the universal message of Vedanta to different parts of the world, revitalized Hinduism, and awakened the soul of India.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>The Gospel of Sri Ramakrishna</button>
              <div class="panel">
                <p>Sri Ramakrishna did not write any book, nor did he deliver public lectures. Instead, he chose to speak in a simple language using parables and metaphors by way of illustration, drawn from the observation of nature and ordinary things of daily use. His conversations were charming and attracted the cultural elite of Bengal. These conversations were noted down by his disciple Mahendranath Gupta who published them in the form of a book, Sri Sri Ramakrishna Kathamrita in Bengali. Its English rendering, The Gospel of Sri Ramakrishna, was released in 1942; it continues to be increasingly popular to this day on account of its universal appeal and relevance.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Last Days</button>
              <div class="panel">
                <p>The intensity of his spiritual life and untiring spiritual ministration to the endless stream of seekers told on Sri Ramakrishna’s health. He developed cancer of the throat in 1885. He was shifted to a spacious suburban villa where his young disciples nursed him day and night. He instilled in them love for one another, and thus laid the foundation for the future monastic brotherhood known as Ramakrishna Math. In the small hours of 16 August 1886 Sri Ramakrishna gave up his physical body, uttering the name of the Divine Mother, and passed into Eternity.</p>
              </div>
            </div>

            <div className="header">
              <h2>Message of Sri Ramakrishna</h2>
            </div>
            <ul>
              <li><p>The goal of human life is the realization of the Ultimate Reality which alone can give man supreme fulfilment and everlasting peace. This is the essence of all religions.</p></li>
              <li><p>The Ultimate Reality is one; but it is personal as well as impersonal, and is indicated by different names (such as God, Ishvar, etc) in different religions.</p></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
