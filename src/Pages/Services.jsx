import React, { useEffect } from 'react';
import { FaChild, FaGlobe, FaHeartbeat, FaMedkit, FaBuilding, FaBook, FaMountain, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import yogaclass from '../Assets/yogaclasses.jpeg';
import pregenancy from '../Assets/pregenancyyoga.jpg';
import online from '../Assets/onlineyoga.jpg';
import medical from '../Assets/medical yoga.jpeg';
import corporate from '../Assets/corporateimg.jpeg';
import retreat from '../Assets/yoga retreat.jpeg';
import workshop from '../Assets/yogaworkshop.jpeg';
import event from '../Assets/megaevent.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesPage.css'; // Import the new CSS file

const services = [
  {
    icon: <FaChild />,
    title: 'Yoga Classes',
    description: 'Join our regular yoga classes for a healthy lifestyle.',
    image: yogaclass,
  },
  {
    icon: <FaGlobe />,
    title: 'Online Yoga',
    description: 'Practice yoga from the comfort of your home.',
    image: online,
  },
  {
    icon: <FaHeartbeat />,
    title: 'Pregnancy Yoga',
    description: 'Specialized yoga sessions for expecting mothers.',
    image: pregenancy,
  },
  {
    icon: <FaMedkit />,
    title: 'Medical Yoga',
    description: 'Therapeutic yoga for medical conditions.',
    image: medical,
  },
  {
    icon: <FaBuilding />,
    title: 'Corporate Yoga',
    description: 'Yoga sessions designed for workplace wellness.',
    image: corporate,
  },
  {
    icon: <FaBook />,
    title: 'Yoga Courses',
    description: 'Comprehensive yoga courses for all levels.',
    image: yogaclass,
  },
  {
    icon: <FaMountain />,
    title: 'Yoga Retreats',
    description: 'Relax and rejuvenate with our yoga retreats.',
    image: retreat,
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Yoga Workshops',
    description: 'Interactive workshops to deepen your practice.',
    image: workshop,
  },
  {
    icon: <FaUsers />,
    title: 'Mega Events',
    description: 'Join our grand yoga events and connect with the community.',
    image: event,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="services-container" id="service">
      <h1 className="services-header">Our Services</h1>
      <div className="services-grid" data-aos="zoom-in-up" data-aos-duration="2000">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <div className="services-image-wrapper">
              <img src={service.image} alt={service.title} className="services-image" />
            </div>
            <div className="services-content">
              <div className="services-icon">{service.icon}</div>
              <h3 className="services-title">{service.title}</h3>
              <p className="services-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
