import { Card } from './Card'
import womenImg1 from '../assets/images/women1.png'
import womenImg2 from '../assets/images/women2.png'
import womenImg3 from '../assets/images/women3.png'
import womenImg4 from '../assets/images/women4.png'


export const Fashion = () => {
    return (
        <section className="fashion">
            <h4 className="fashion__title">WOMEN’S FASHION</h4>
            <p className="fashion__text">Shop our new arrivals from established brands</p>
            <div className="container grid">
                <Card 
                    imgLink={womenImg1}
                    cardDesc="GREEN MUSCLE FIT POLO SHIRT"
                    oldPrice="$229.00"
                    newPrice="$129.00"
                />

                <Card 
                    imgLink={womenImg2}
                    cardDesc="GREEN MUSCLE FIT POLO SHIRT"
                    oldPrice="$229.00"
                    newPrice="$129.00"
                />

                <Card 
                    imgLink={womenImg3}
                    cardDesc="GREEN MUSCLE FIT POLO SHIRT"
                    oldPrice="$229.00"
                    newPrice="$129.00"
                /> 
                
                <Card 
                    imgLink={womenImg4}
                    cardDesc="GREEN MUSCLE FIT POLO SHIRT"
                    oldPrice="$229.00"
                    newPrice="$129.00"
                />

            </div>
        </section>
    )
}