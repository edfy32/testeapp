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
      images: [
        'https://node1.eltok.com.br/ars_kammer_api/files/ecc48f0b51b75a311c5a5f9ba1823ce1-13.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/6582a31d260cf76c46f8835b780313d7-2.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/5ed30bb4e05047cc60d5e22d40dd9992-1.jpg'
      ],
      description: 'Apartamento 502',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 500.000,00'

    },
    {
      id: 2,
      name: 'Horizon Palace',
      thumbImage: '/img02.png',
      images: [
        'https://node1.eltok.com.br/ars_kammer_api/files/c8c2dd169893029d5dc74e1c19ff18fd-living.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/aa7f46d09aa8886aecb8b914cb9a458c-suite.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/0bf2ef20c425c5682de18fa24f75e4c7-sacada.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/b3849a6a522e65d45a3e5654ab0430fe-longe-externa.jpg'
      ],
      description: 'Apartamento 202',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 400.000,00'

    },
    {
      id: 3,
      name: 'Lisboa Residence',
      thumbImage: '/img03.png',
      images: [
        'https://node1.eltok.com.br/ars_kammer_api/files/27c880529d258f9173487c12cdbd793d-Horizon-Externa-RF-A-03.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/ca48a4c9283c7f10d80bdf11bfd4ac00-Kammer-Horizon-Su%C3%ADte-RF-A-03.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/c2c8ba61a7ae32a409da12dced06fea5-Kammer-Horizon-Living-RF-A-03.jpg'
      ],
      description: 'Apartamento 603',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 650.000,00'
    },
    {
      id: 4,
      name: 'Cannes Residence',
      thumbImage: '/img04.png',
      images: [
        'https://node1.eltok.com.br/ars_kammer_api/files/8e6ea5e7b1ae2295edf53937e7ffdc42-Soltero-Suite-R0-A-02(1).jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/3ae1399e02627789d0828aa63c1d3469-Soltero-Gourmet-R0-A-01(1).jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/231860f5d9ea011506575f528cda580e-Kammer-Soltero-ExternaNoturna-R2-A-03(2).jpg'
      ],
      description: 'Apartamento 1202',
      location: 'Centro, Itapema SC',
      price: 'R$ 700.000,00'
    },
    {
      id: 5,
      name: 'Acqua blue residence',
      thumbImage: '/img05.png',
      images: ['https://node1.eltok.com.br/ars_kammer_api/files/aa9f3cf7736f3cf0a29173fe0951625c-acqua_apto1.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/87fa0678826c4c349ab98c07edfada1b-acqua_apto3.jpg',
        'https://node1.eltok.com.br/ars_kammer_api/files/5fde09bbea8f8d4dc6bacd8be87bdbcd-acqua_apto2.jpg'],
      description: 'Apartamento 704',
      location: 'Meia praia, Itapema SC',
      price: 'R$ 640.000,00'

    },

  ];

  return (
    <div className="carousel-page">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="white-line"></div>
        <h1 className="title-page">Oportunidades de Terceiros</h1>
      </div>
      <Opportunitie buildings={buildings} />
    </div>
  );
};

export default Home;
