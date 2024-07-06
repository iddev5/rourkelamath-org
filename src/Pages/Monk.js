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
        <div className="center">
          </div>
        <div className="center">
          <div className="content">
            <div className="header">
              <h1>FAQs on joining the Ramakrishna Order</h1>
            </div>
              <h3>(Frequently Asked Questions)</h3>
            <p>Many youngsters when they come across the inspiring life and teachings of Swami Vivekananda, feel an urge to embrace monastic life in the Ramakrishna Order. For others, the urge to renounce the world may come as a result of their watching/listening to inspiring talks on Spiritual aspects of Hinduism. Disillusionment with worldly attainments and relationships also drive quite a few to the doors of a monastery. Then there are “Be good and Do Good” youth who are impressed by the work of the Ramakrishna Mission and want to dedicate themselves to its service activities. Whatever may be the immediate inspiration, they need to carefully consider quite a few factors before joining the Ramakrishna Order. To help such would-be monks to arrive at the right decision, here is a set of Frequently asked Questions and Answers.</p>

            <div ref={acc}>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>What Does It Mean To “Join The Ramakrishna Order”?</button>
              <div class="panel">
                <p>It means to leave behind one’s family and friends, profession and attainments, all worldly interests, pleasures and concerns, and embrace the monastic life. The person will henceforth live in a monastery of the Ramakrishna Order, usually known as Math or Ashrama, devoting his life exclusively to spiritual pursuits and selfless service. In course of his monastic life he has to take up vows of Brahmacharya (celibacy) and Sannyasa (monkhood) which will be the cornerstone of his monastic life. The Ramakrishna Order is a well-defined body of monks which owes its origin to Sri Ramakrishna and his eminent disciples headed by Swami Vivekananda.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>What Are The Essential Conditions For Becoming A Monk In The Ramakrishna Order?</button>
              <div class="panel">
              <p>Interested young men within the age-group 18 to 30 (or 36 in case of Westerners) who are at least graduates, are eligible to join the Ramakrishna Order. The actual age limit, however, depends on the educational qualification of the candidate. For more details one may write to the Sri Ramakrishna Math Mylapore, Chennai at <a href="mailt:mail@chennaimath.org">mail@chennaimath.org</a></p>
              </div>

              <button className="accordian"><i className="fa-solid fa-angle-up"></i>What Are The Options For Young Women Who Are Interested In Embracing Monastic Life?</button>
              <div class="panel">
                <p>The Ramakrishna Order is a monastic organization for men only. For women there is a parallel organization known as Sri Sarada Math which follows the same ideals as ours. Interested women may directly contact the Sarada Math at any of its branch centers or its headquarters in Dakshineshwar, Kolkata.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m Married. Can I Join The Ramakrishna Order?</button>
              <div class="panel">
                <p>No, only unmarried men are allowed to join the Ramakrishna Order. A person who had married but now divorced is not eligible either.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m A College/University Student. Can I Join The Order Now?</button>
              <div class="panel">
                <p>It is strongly recommended that you continue your studies and finish the course which you have started. You may join the Order soon after that. Let not your studies be the first casualty of your spirit of renunciation!</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Why Is Academic Qualification Insisted Upon For A Man Who Wants To Renounce Everything?</button>
              <div class="panel">
                <p>Here are a few reasons:</p>
                <p>(a) Embracing monastic life is a bold and far-reaching decision which needs maturity on the part of the aspirant. Formal education, apart from everything else, usually helps to develop this maturity.</p>
                <p>(b) The monks of Ramakrishna Order need to run schools, colleges, hospitals and many other institutions serving people in various ways. Such activities need educational background.</p>
                <p>(c) Spiritual studies for one’s own spiritual development and preaching for the sake of spiritual development of others is a part and parcel of monastic life. These necessitate a sound educational background.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’ve Some Health Issue. Will That Be An Obstacle To My Joining The Order?</button>
              <div class="panel">
                <p>Persons with a major physical or mental disorder are not allowed to join the Order. As part of the joining procedure, candidates need to compulsorily undergo a thorough medical test to prove their fitness.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Can I Pursue My College Or Higher Studies After Joining The Order?</button>
              <div class="panel">
                <p>Candidates, in general, are expected to have finished their formal education before entering the monastery.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’ve Not Read Books On Sri Ramakrishna Or Swami Vivekananda. Can I Join The Order?</button>
              <div class="panel">
                <p>It is not advisable for you to join immediately. Please make time to read at least a few important books of Ramakrishna–Vivekananda literature. The life and teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi and Swami Vivekananda are the foundation of the spiritual life of the entire Order. The joining of a person who has not read the basic literature is not advisable.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m Not A Hindu By Birth. Can I Join The Order?</button>
              <div class="panel">
                <p>That is not an issue. Ramakrishna Order is open for people of all religions, nationalities and ethnic groups. It is but necessary to accept Sri Ramakrishna as a divine incarnation and believe his grace to be of supreme importance in one’s spiritual well-being and spiritual goal.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m A Devotee Of Krishna (Or Shiva, Kali, Christ Or Any Other Deity). Can I Join The Order?</button>
              <div class="panel">
                <p>You are welcome! If you have respectful regard for Sri Ramakrishna and his teachings and are convinced that he is the embodiment of all gods and goddesses, you can join the Order.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I Want To Serve My Country, Especially The Poor And The Helpless. Can I Join The Order?</button>
              <div class="panel">
                <p>Yes, you can join the Order provided you are willing to broaden your idea of service. Our organization is not just another NGO engaged in social service. Spirituality is the basis, guiding force and also the ultimate aim of this organization. Our monks consider service activities as another form of their spiritual discipline. So, this spiritual outlook (and not just a compassionate heart or patriotic spirit) is indispensable to be a part of the Order.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’ve Led Rather A Morally Impure Life. Am I Eligible To Join The Order?</button>
              <div class="panel">
                <p>You have to contact our authorities and freely discuss the matter if you feel it is going to affect your future life. The authorities will guide you further.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I Want To Become A Monk. But My Parents Are Against It. What Should I Do? (OR) I Am The Only Son Of My Parents. Who Will Look After Them If I Become A Monk?</button>
              <div class="panel">
                <p>Only in rare cases do parents encourage their son to become a monk. But most candidates need to face the opposition and even wrath of their parents for cherishing monastic aspiration.</p>
                <p>A son with monastic inclination need to explain his stand to parents and try to win them over. He should also make, as far as possible, suitable arrangements to at least take care of their basic needs for the rest of their lives.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’ve Some Property In My Name. What Will Happen To It If I Join?</button>
              <div class="panel">
                <p>Monks by definition can’t own personal properties. You need to dispose of your movable and immovable assets, including bank accounts, before joining or immediately after that.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Can I Remain In Touch With My Parents And Relatives After Joining?</button>
              <div class="panel">
                <p>A monk is required to dissociate himself from all of his pre-monastic life. Since this is something that can’t be achieved overnight, the spirit of detachment is to be cultivated by tapering off all worldly relationships.</p>
                <p>During the initial years, a novice is allowed to talk to his parents occasionally and inquire about their well-being.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Will I Be Paid Salary In The Order?</button>
              <div class="panel">
                <p>No salary is paid to monks. Monastic life is not like working at a job in expectation of salary. Here you give, voluntarily and entirely, your body and mind, your talents and capacities without expecting any material gain.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>If I Join The Order, Who Will Take Care Of My Personal Needs? Who Will Look After Me When I Become Old?</button>
              <div class="panel">
                <p>The Order will take care of you and support you in every way. There is no need to worry on that account.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>How Should I Dress After Joining The Order?</button>
              <div class="panel">
                <p>The members of the Order usually wear a kurta-like shirt (loose & collarless), dhoti (cloth tied around waist extending up to the feet) and uttariya (cloth wrapped around the upper part). The colour of these garments would be either white (in case of novices or Brahmacharins) or ochre/gerua (in case of Sannyasins).</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>If I Join Tomorrow, How Long Will It Take To Become A Monk In The Full Sense Of The Term?</button>
              <div class="panel">
                <p>It will take a minimum of nine years. This is the period allowed for a candidate to prepare himself to receive the final monastic vows. Seeing his life and conduct the authorities will take the ultimate decision regarding his sannyasa.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>What Am I Expected To Do After Joining The Order?</button>
              <div class="panel">
                <p>For the rest of your life, you will immerse yourself in japa, meditation, prayer, worship, chanting of hymns, singing of bhajans, study of sacred literature, work and other spiritual practices. Some of these you will do on your own, while others, in the company of monastic brothers in the ashrama. The nature, time and duration of work will be decided by the authorities and will have to be diligently followed with a worshipful outlook.</p>
                <p>Through all these, you will strive to grow in the qualities of a Sadhu (monk) such as purity, devotion, detachment, unselfishness, truthfulness and Brahmacharya (celibacy), which are essential to realize God.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Are There Any Spiritual Teachers (Gurus) Who Can Help Me?</button>
              <div class="panel">
                <p>The fundamental spiritual practices will be told to the aspirant by his Guru during his Initiation. He has to himself practise and struggle for spiritual perfection. In case of need, guidance by senior sadhus will always be available.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m Interested In Pranayama Or Raja Yoga. Can I Learn And Practise Them In The Order?</button>
              <div class="panel">
                <p>The essence of spiritual life in the Ramakrishna Order is love and devotion to the spiritual ideal which is Sri Ramakrishna, and worshipful service to Him. The combination of the four yoga’s- Jnana (Knowledge), Bhakti (Devotion), Karma (Detached work) and Raja (Meditative Practices) yoga- find ample expression in this ideal. Pursuing any one yoga to the exclusion of others is not encouraged in our Order.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I’m Interested In Studying Vedanta In Depth. Can I Do That After Joining The Order?</button>
              <div class="panel">
                <p>Yes, a number of opportunities are available in the Order to study Vedantic scriptures such as the Upanishads, Bhagavad Gita etc. Every novice, after about three years of joining, is made to undergo a two-year rigorous course at our seminary – the Probationers’ Training Center (TC for short) in Belur Math – where a number of subjects are taught.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Can I Join At Any Branch Of The Order?</button>
              <div class="panel">
                <p>With the exception of a few, all our branches admit novices. Ramakrishna Math Chennai is a traditional joining center with many novices joining each year.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Can I Join At Belur Math?</button>
              <div class="panel">
                <p>Belur Math is the heart of the Ramakrishna Order where the central monastery is located. Because of its sacred associations, some wish to begin their monastic life here. For such people, there is the Pre-Probationers’ Training Center (PPTC) in Belur Math. After keeping the new entrants in PPTC for six to twelve months, they are posted to different branch centers.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>There Is A Ramakrishna Ashrama In My Neighbourhood. Can I Join There?</button>
              <div class="panel">
                <p>Not all Ashramas bearing the name of Sri Ramakrishna or Swami Vivekananda are our branches. So please check if the particular Ashrama you are referring to is a recognized branch of ours. The list of our official branches can be had from our website <a href="https://belurmath.org/branch-centres">https://belurmath.org/branch-centres</a></p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>I Like One Particular Branch Of Yours. Can I Spend The Rest Of My Life There As A Monk?</button>
              <div class="panel">
                <p>You may join the Order at that center and continue there for about three years at the most. After that, it is up to the Belur Math Headquarters to decide your place of stay and work.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Will I Be Posted In Foreign Countries?</button>
              <div class="panel">
                <p>You may or may not. The authorities at the Headquarters decide on whom to send to foreign countries, and they do so after considering a number of factors. It is best to join the Order in a spirit of self-surrender to the Lord giving up expectations.</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Suppose I’m Unable To Continue In The Order, Can I Quit?</button>
              <div class="panel">
                <p>Yes, you can quit at any point in your monastic life. People enter this life of their own accord and can also step out of their own accord. No legal obligations on either side!</p>
              </div>
              <button className="accordian"><i className="fa-solid fa-angle-up"></i>Fine. My Questions Are All Answered. But I’m Still Not Sure Whether To Join The Order Or Get Married. Can You Help Me?</button>
              <div class="panel">
              <p>This is a matter which you alone have to decide. Study your own mind to understand where your real interest lies. You may consult wise people and seek their advice in the matter, but the final decision should come from within YOU. If you are still interested in joining, please  email us at <a href="mail@chennaimath.org">mail@chennaimath.org</a></p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default AboutUs;
