import { IonButton, IonCard, IonCardContent, IonContent, IonToast, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import ALILOGO from "../assets/ali tech logo.png";
import React, {useState, useEffect} from 'react';
import {loginUser} from "../firebaseConfig";


const login: React.FC = () => {
  const[busy, setBusy] = useState<boolean>(false);
  const[messageOk, setmessageOk] = useState<boolean>(false);
  const[messageNotOk, setmessageNotOk] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 async function login()
{
setBusy(true);
const res =  await loginUser(email, password);
if(!res){
  setmessageNotOk(true);

}
else{
  setmessageOk(true);
  window.location.href = "./Home";
}
setBusy(false);

}

  return (
    <IonPage>
      <IonHeader>
        <IonLoading message="Pleasee wait..." duration={0} isOpen={busy}/>
        <IonToolbar color="tertiary">
          <IonTitle>ALI APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={true}>
        <div className='ion-text-center ion-padding'>
        <img src={ALILOGO} alt="Ali Logo" width={"40%"}/>
        </div>

      <IonCard>
        <IonCardContent>
            <IonInput fill='outline' labelPlacement='floating' label="email" type="email" placeholder='prueba@gmail.com'
             onIonChange={(e : any ) => setEmail(e.target.value)}></IonInput>
            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label="password" type="password" placeholder='xxxxxxxxxx' 
            onIonChange={(e : any ) => setPassword(e.target.value)}></IonInput>
            <IonButton className="ion-margin-top" expand='block' color="warning" onClick={login}>
              Login
              <IonIcon icon={logInOutline} slot ="end"></IonIcon>
              </IonButton>
            <IonButton routerLink="/Register" className="ion-margin-top" type="button" expand='block' color="secondary">
            Create Acount
            <IonIcon icon={personCircleOutline} slot ="end"></IonIcon>
            </IonButton>

        </IonCardContent>
      </IonCard>
      </IonContent>
      <IonToast trigger="open-toast" message="Error with your credentials" duration={5000} isOpen={messageNotOk}/>
      <IonToast trigger="open-toast" message="You have logged in" duration={5000} isOpen={messageOk}/>
    </IonPage>
  );
};

export default login;