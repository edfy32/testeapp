import React from 'react';
import Opportunitie from '../components/Opportunitie/Opportunitie';
import './styled.css';

interface Building {
  id: number;
  name: string;
  thumbImage: string;
  images: string[];
  description: string;
  location: string;
  price: string;
}

const Home: React.FC = () => {
  const buildings: Building[] = [
    {
      id: 1,
      name: 'Serenity Residence',
      thumbImage: '/img01.png',
      images: ['/img01.png','/img03.png','/img05.png'],
      description: 'Apartamento 502',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 500.000,00'

    },
    {
      id: 2,
      name: 'Horizon Palace',
      thumbImage: '/img02.png',
      images: ['/img01.png','/img02.png','/img01.png'],
      description: 'Apartamento 202',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 400.000,00'

    },
    {
      id: 3,
      name: 'Lisboa Residence',
      thumbImage: '/img03.png',
      images: ['/img01.png','/img04.png','/img02.png'],
      description: 'Apartamento 603',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 650.000,00'
    },
    {
      id: 4,
      name: 'Cannes Residence',
      thumbImage: '/img04.png',
      images: ['/img01.png','/img01.png','/img01.png'],
      description: 'Apartamento 1202',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 700.000,00'
    },
    {
      id: 5,
      name: 'Acqua blue residence',
      thumbImage: '/img05.png',
      images: ['/img01.png','/img04.png','/img03.png'],
      description: 'Apartamento 704',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 540.000,00'

    },

  ];

  return (
    <div className="carousel-page">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="white-line"></div>
        <h1 className="title-page">Oportunidades de Terceiros</h1>
      </div>
      <Opportunitie buildings={buildings} />
    </div>
  );
};

export default Home;
