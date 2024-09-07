import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ALILOGO from "../assets/ali tech logo.png";
const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>ALI APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <div className='ion-text-center ion-padding'>
        <img src={ALILOGO} alt="Ali Logo" width={"60%"}/>
        </div>
        <IonNote>
            Bienvenido a mi app!!!!
        </IonNote>
    </IonContent>
    </IonPage>
  );
};

export default Home;