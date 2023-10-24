import React from 'react'
import Title from './Title'
import data from '../data/en.json';
import Service from './Service';
const Services = () => {
    const { services } = data;
    return (
        <section className="section services" id="services">

            <Title titlePart1="our" titlePart2="services" />
            <div className="section-center services-center">
                {services.map((service, index) => {
                    return (
                        <Service key={service.id} {...service} />
                    )
                })}

            </div>
        </section>
    )
}

export default Services