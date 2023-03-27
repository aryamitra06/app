import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SliderContainer from '../components/SliderContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CME Direct Mobile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SliderContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
