import { IonContent, IonHeader, IonToast, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {cloudUploadOutline, closeOutline } from 'ionicons/icons';
import ALILOGO from "../assets/ali tech logo.png";
import React, {useState, useEffect} from 'react';
import {loginUser, registerUser} from "../firebaseConfig";

const Register: React.FC = () => {
  const[busy, setBusy] = useState<boolean>(false);
  const[messageOk, setmessageOk] = useState<boolean>(false);
  const[messageNotOk, setmessageNotOk] = useState<boolean>(false);
  const[messageNotOk2, setmessageNotOk2] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[rePassword, setRePassword] = useState('');

 async function register()
{

if(password !== rePassword){
setmessageNotOk2(true);
}
if(email.trim() === "" || password.trim() === "" || rePassword.trim() === ""){
  setmessageNotOk(true); 
}

if(email.trim() !== "" && password.trim() !== ""  && (password.trim() === rePassword))
  {
    setBusy(true);
    const res =  await registerUser(email, password);

      setmessageOk(true);
      window.location.href = "./Home";
   
  }
else{

  setmessageNotOk(true); 
}

  setBusy(false);

}
  return (
    <IonPage>
      <IonHeader>
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
            <IonInput  className="ion-margin-top"  fill='outline' labelPlacement='floating' label="email" type="email" placeholder='prueba@gmail.com' 
            onIonChange={(e : any ) => setEmail(e.target.value)}></IonInput>
            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label="password" type="password" placeholder='xxxxxxxxxx'
            onIonChange={(e : any ) => setPassword(e.target.value)}></IonInput>
            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label=" Repeat password" type="password" placeholder='xxxxxxxxxx'
            onIonChange={(e : any ) => setRePassword(e.target.value)}></IonInput>
            <IonButton className="ion-margin-top" type="submit" expand='block' color="success" onClick={register}>
              Register
              <IonIcon icon={cloudUploadOutline} slot ="end"></IonIcon>
              </IonButton>
            <IonButton routerLink="/login" className="ion-margin-top" type="button" expand='block' color="medium">
              Cancel
            <IonIcon icon={closeOutline} slot ="end"></IonIcon>
            </IonButton>

        </IonCardContent>
      </IonCard>
 
      </IonContent>
      <IonToast trigger="open-toast" message="Error with you data" duration={5000} isOpen={messageNotOk}/>
      <IonToast trigger="open-toast" message="Password do not match" duration={5000} isOpen={messageNotOk2}/>
      <IonToast trigger="open-toast" message="Register done" duration={5000} isOpen={messageOk}/>
    </IonPage>
  );
};

export default Register;