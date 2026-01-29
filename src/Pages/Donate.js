import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import "./AboutUsCommon.css";

function Projects() {
    const [Sidebar, SetSidebar] = useState(true);
    return (
        <>
            <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
            <div className="center">
                <div className="header">
                    <h2>
                        Appeal for Renovation and Rejuvenation of Ramakrishna
                        Mission, Rourkela
                    </h2>
                </div>
                <div className="content">
                    <p>
                        With heartfelt reverence and a sense of urgency, I reach
                        out to you on behalf of Ramakrishna Mission, Rourkela,
                        nestled amidst the tribal villages of Sundargarh,
                        Odisha. Our center, initiated in 1978 by devoted souls
                        under the divine guidance of Srimat Swami
                        Vireswaranandaji Maharaj, stands as a beacon of
                        spiritual light in this region.
                    </p>
                    <p>
                        Over the decades, the center has been a sanctum of
                        devotion and service, drawing inspiration from the
                        timeless ideals of Swami Vivekananda and Sri
                        Ramakrishna. However, circumstances have led to a state
                        of dilapidation, urging us to seek your benevolent
                        support.
                    </p>
                    <p>
                        The transition of our center into the Ramakrishna
                        Mission fold in 2019 heralded a new chapter in our
                        journey, with a renewed commitment to propagate and
                        strengthen the Ramakrishna movement in western Odisha.
                        Yet, the lack of steady patronage and the dispersal of
                        many founding devotees have left our center in dire need
                        of rejuvenation.
                    </p>
                    <p>
                        We humbly appeal to you, the inheritors of this noble
                        legacy, to join hands in reviving the golden dream of
                        our predecessors. Your generous contributions will
                        facilitate the urgent repair and renovation of our
                        temple, the construction of monks' quarters, and an
                        office building, essential for our mission to flourish.
                    </p>
                    <p>
                        The estimated costs for these endeavors are
                        significant—approximately ₹50 lakhs for temple
                        restoration and ₹1.0 crore for new infrastructure. Your
                        support, however, transcends monetary value; it
                        symbolizes a shared commitment to the ideals of service,
                        spirituality, and community upliftment.
                    </p>
                    <p>
                        We assure you that every donation, no matter the size,
                        will be utilized judiciously and transparently for the
                        betterment of our center. Furthermore, your
                        contributions are eligible for tax exemption under
                        section 80G of the Income Tax Act.
                    </p>
                    <p>
                        In the spirit of unity and compassion, let us come
                        together to breathe new life into Ramakrishna Mission,
                        Rourkela, and continue our sacred mission of serving
                        humanity. May the blessings of the Holy Trio inspire and
                        guide us in this noble endeavor.
                    </p>
                    <p>
                        For further details and donations, please reach out to
                        us via email at rkmrourkela@gmail.com or WhatsApp us at +91
                        89181 21261 & +91 94343 02156 providing your details and PAN number. You
                        may also directly contribute to our bank account:
                    </p>
                    <span className="highlight">
                        <strong><p><u>Bank Name</u>: Bank of Baroda Branch: Sector-19, Rourkela</p>
                        <p><u>Account Name</u>: Ramakrishna Mission</p></strong>
                    <strong>
                        <p><u>Account Number</u>: 00490100017712</p> 
                        <p><u>IFSC Code</u>: BARB0ROURKE</p> 
                        <p><u>MICR Code</u>: 769012002</p>
                    </strong>
                    </span>
                    
                    <p>
                        With profound gratitude and anticipation, we await your
                        kind support and cooperation in our collective endeavor
                        to uplift our beloved center.
                    </p>
                    <p>Yours affectionately,</p>
                    <p>
                        Swami Divyaswarupananda, Secretary, Ramakrishna Mission,
                        Rourkela
                    </p>
                </div>
            </div>
        </>
    );
}

export default Projects;
