import { IonCol, IonContent, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

type comparatorModalProps = {
  showModal: boolean,
  setShowModal: (state: boolean) => void, 
}

const ComparatorModal: React.FC<comparatorModalProps> = ({showModal, setShowModal}) => {

  return(
    <>
      {/* MODAL EXPLICATION*/}
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonGrid className="ion-padding-horizontal headerPages">
              <IonRow className="ion-align-items-center">
                <IonCol size="8" >
                  <h1>EXPLICATIONS</h1>
                </IonCol>
                <IonCol size="1" offset="2">
                  <div className = "btn-header-modal" onClick={() => setShowModal(false)}> 
                    <span>X</span>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
          <div className="gradientBar"></div>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-padding-horizontal headerPages">
            <h2>COMMENT COMPARER ?</h2>
            <p>Il est possible de comparer deux tempéraments pour visualiser rapidement la différence de pureté des tierces et des quintes. Les quintes sont représentées à l'intérieur et les tierces à l'extérieur.</p>
            <p>Le 1er tempérament entoure la roue des notes : </p>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  )
};

export default ComparatorModal;