const HeroSection = () => {
    return(
        <main className="Hero container">
            <div className="Hero-contain">
                <h1>UNLEASH YOUR POTENTIAL WITH THE POWER OF NIKE WHERE STYLE MEETS PERFORMANCE</h1>
                <p>Nike clothes are known for their perfect blend of style, comfort, and performance. Designed for athletes and casual wearers alike, they feature innovative technologies and premium materials that ensure durability, flexibility, and breathability. From activewear to streetwear, Nike’s apparel delivers modern designs that inspire confidence and support every lifestyle.</p>
            </div>  
            <div className="Shopping">
                <p>Also Available On</p>
            </div>
            <div className="Brand-icon">
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
            <div className="Hero-button">
                <button>Shop Know</button>
                <button className="secondery-but">Category</button>
            </div>
            <div className="Hero-image">
                <img src="/images/cloth.png" alt="cloth photo" />
            </div>
        </main>
    );
};
export default HeroSection;