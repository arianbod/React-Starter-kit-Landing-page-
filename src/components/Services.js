import React from 'react'
import Title from './Title'
import data from '../data/en.json';
const Services = () => {
    const { services } = data;
    return (
        <section className="section services" id="services">

            <Title titlePart1="our" titlePart2="services" />
            <div className="section-center services-center">
                {services.map((service, index) => (
                    <article className="service" key={service.id}>
                        <span className="service-icon"><i className={service.icon}></i></span>
                        <div className="service-info">
                            <h4 className="service-title">  {service.title}</h4>
                            <p className="service-text">
                                {service.text}
                            </p>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Services