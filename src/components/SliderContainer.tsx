import './SliderContainer.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

interface ContainerProps { }

const SliderContainer: React.FC<ContainerProps> = () => {

  const Card = (cardTitle: string, cardSubTitle: string, cardContent: string) => {
    return (
      <>
        <IonCard className='slide_card'>
          <IonCardHeader>
            <IonCardTitle>{cardTitle}</IonCardTitle>
            <IonCardSubtitle>{cardSubTitle}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{cardContent}</IonCardContent>
        </IonCard >
      </>
    )
  }
  return (
    <div className="container">
      <Swiper>
        <SwiperSlide>{Card("Card 1", "Card 1 Title", "Card 1 Description")}</SwiperSlide>
        <SwiperSlide>{Card("Card 2", "Card 2 Title", "Card 2 Description")}</SwiperSlide>
        <SwiperSlide>{Card("Card 3", "Card 3 Title", "Card 3 Description")}</SwiperSlide>
      </Swiper>
      <IonGrid>
        <IonRow className='ion-justify-content-end'>
          <IonCol>
            <IonButton size='small' className='cme_btn'>Add Card</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default SliderContainer;
