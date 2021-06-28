import { IonCol, IonContent, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

type headerProps = {
  buttonModal: boolean,
  buttonModalText: string,
  setShowModal: (state: boolean) => void, 
}

const HeaderPage: React.FC<headerProps> = ({buttonModal,buttonModalText, setShowModal}) => {

  let title = "COMPARATOR";

  if(buttonModal){
    return(
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid className="ion-padding-horizontal headerPages">
            <IonRow className="ion-align-items-center">
              <IonCol size="8" >
                <h1>{buttonModalText}</h1>
              </IonCol>
              <IonCol size='1' offset='2'>
                <div className = 'btn-header-modal' onClick={() => setShowModal(true)}>
                  <span>?</span>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <div className="gradientBar"></div>
      </IonHeader>
    )
  }

  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid className="ion-padding-horizontal headerPages">
            <IonRow className="ion-align-items-center">
              <IonCol size="8" >
                <h1>{title}</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <div className="gradientBar"></div>
      </IonHeader>
    </>
  );
};

export default HeaderPage;