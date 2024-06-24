import './InspirationCommon.css';
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect, useRef } from "react";
import image from '../Assets/inspiration/Sri-Sarada-Devi.jpg';

function SriSaradaDevi() {
  const[Sidebar,SetSidebar]=useState(true) 
  const acc = useRef(null);

  useEffect(() => {
    const child = acc.current.children;
    for (let i = 0; i < child.length; i++) {
      let ac = child[i];      
      ac.onclick = function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      }
    }
  }, []);
  
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="split">
        <div>
          <img src={image} />
          </div>
          <div className="content">
            <div className="header">
              <h1>Sri Sarada Devi</h1>
            </div>
            <p>Endearingly known as ‘Holy Mother’, Sri Sarada Devi, the spiritual consort of Sri Ramakrishna, was born on 22 December 1853 in a poor Brahmin family in Jayrambati, a village adjoining Kamarpukur in West Bengal. Her father, Ramachandra Mukhopadhyay, was a pious and kind-hearted person, and her mother, Shyama Sundari Devi, was a loving and hard-working woman.</p>

            <div ref={acc}>
              <button className="accordian">Marriage</button>
              <div class="panel">
                <p>As a child Sarada was devoted to God, and spent most of her time helping her mother in various household chores like caring for younger children, looking after cattle and carrying food to her father and others engaged in work in the field. She had no formal schooling, but managed to learn the Bengali alphabet. When she was about six years old, she was married to Sri Ramakrishna, according to the custom prevalent in India in those days. However, after the event, she continued to live with her parents, while Sri Ramakrishna lived a God-intoxicated life at Dakshineshwar.</p>
              </div>
              <button className="accordian">Visit to Dakshineshwar</button>
              <div class="panel">
                <p>At the age of eighteen she walked all the way to Dakshineshwar to meet her husband. Sri Ramakrishna, who had immersed himself in the intense practice of several spiritual disciplines for more than twelve years, had reached the highest state of realization in which he saw God in all beings. He received Sarada Devi with great affection and allowed her to stay with him. He taught her how to lead a spiritual life while discharging her household duties. They led absolutely pure lives, and Sarada Devi served Sri Ramakrishna as his devoted wife and disciple, while remaining a virgin nun and following the spiritual path.</p>
              </div>
              <button className="accordian">Life at Dakshineshwar</button>
              <div class="panel">
                <p>Sri Ramakrishna looked upon Sarada Devi as a special manifestation of Divine Mother of the universe. In 1872, on the night of the Phala-harini-Kali-puja, he ritualistically worshipped Sarada Devi as the Divine Mother, thereby awakening universal Motherhood latent in her. When disciples began to gather around Sri Ramakrishna, Sarada Devi learned to look upon them as her own children. The room in which she stayed at Dakshineshwar was too small to live in and had hardly any amenities; and on many days she did not get the opportunity of meeting Sri Ramakrishna. But she bore all difficulties silently and lived in contentment and peace, serving the increasing number of devotees who came to see Sri Ramakrishna.</p>
              </div>
              <button className="accordian">Worshipped by Sri Ramakrishna</button>
              <div class="panel">
                <p>In 1872, his wife Sarada, now nineteen years old, came from the village to meet him. He received her cordially, and taught her how to attend to household duties and at the same time lead an intensely spiritual life. One night he worshipped her as the Divine Mother in his room at the Dakshineswar temple. Although Sarada continued to stay with him, they lived immaculately pure lives, and their marital relationship was purely spiritual. It should be mentioned here that Sri Ramakrishna had been ordained a Sannyasin (Hindu monk), and he observed the basic vows of a monk to perfection. But outwardly he lived like a layman, humble, loving and with childlike simplicity. During Sri Ramakrishna’s stay at Dakshineswar, Rani Rasmani first acted as his patron. After her death, her son-in-law Mathur Nath Biswas took care of his needs.</p>
              </div>
              <button className="accordian">Leading the Sangha after the Master’s Passing</button>
              <div class="panel">
                <p>After Sri Ramakrishna’s passing away in 1886, Sarada Devi spent some months in pilgrimage, and then went to Kamarpukur where she lived in great privation. Coming to know of this, the disciples of Sri Ramakrishna brought her to Kolkata. This marked a turning point in her life. She now began to accept spiritual seekers as her disciples, and became the open portal to immortality for hundreds of people. Her great universal mother-heart, endowed with boundless love and compassion, embraced all people without any distinction, including many who had lived sinful lives.</p>
                <p>When the Western women disciples of Swami Vivekananda came to Kolkata, the Holy Mother accepted them with open arms as her daughters, ignoring the restrictions of the orthodox society of those days. Although she had grown up in a conservative rural society without any access to modern education, she held progressive views, and whole-heartedly supported Swami Vivekananda in his plans for rejuvenation of India and the uplift of the masses and women. She was closely associated with the school for girls started by Sister Nivedita.</p>
                <p>She spent her life partly in Kolkata and partly in her native village Jayrambati. During the early years of her stay in Kolkata, her needs were looked after by Swami Yogananda, a disciple of Sri Ramakrishna. In later years her needs were looked after by another disciple of Sri Ramakrishna, Swami Saradananda, who built a new house for her in Kolkata.</p>
              </div>
              <button className="accordian">Simplicity and Forbearance</button>
              <div class="panel">
                <p>Although she was highly venerated for her spiritual status, and literally worshipped as the Divine Mother, she continued to live like a simple village mother, washing clothes, sweeping the floor, bringing water from the pond, dressing vegetables, cooking and serving food. At Jayrambati she lived with her brothers and their families. They gave her endless troubles but, established as she was in the awareness of God and in Divine Motherhood, she always remained calm and self-possessed, showering love and blessings on all who came into contact with her. As Sister Nivedita stated, “Her life was one long stillness of prayer.”</p>
              </div>
              <button className="accordian">Mother of All</button>
              <div class="panel">
                <p>In the history of humanity, there has never been another woman who looked upon herself as the Mother of all beings, including animals and birds, and spent her whole life in serving them as her children, undergoing unending sacrifice and self-denial. About her role in the mission of Sri Ramakrishna on earth, she stated: “My son, you know the Master had a maternal attitude (matri-bhava) towards everyone. He has left me behind to manifest that Divine Motherhood in the world.”</p>
              </div>
              <button className="accordian">Ideal Woman</button>
              <div class="panel">
                <p>On account of her immaculate purity, extraordinary forbearance, selfless service, unconditional love, wisdom and spiritual illumination, Swami Vivekananda regarded Sri Sarada Devi as the ideal for women in the modern age. He believed that with the advent of Holy Mother, the spiritual awakening of women in modern times had begun.</p>
              </div>
              <button className="accordian">Last Days</button>
              <div class="panel">
                <p>Under the strain of constant physical work and repeated attacks of malaria, her health deteriorated in the closing years of her life, and she left the mortal world on 21 July 1920.</p>
              </div>
            </div>

            <div className="header">
              <h2>Message of Sri Sarada Devi</h2>
            </div>
            <ul>
              <li><p>Ordinary human love results in misery. Love for God brings blessedness.</p></li>
              <li><p>I tell you one thing – if you want peace, do not find fault with others. Rather see your own faults. Learn to make the whole world your own. No one is a stranger, my child; the whole world is your own.</p></li>
            </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SriSaradaDevi;
