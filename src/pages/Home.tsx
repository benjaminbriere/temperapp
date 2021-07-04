import React, { useEffect, useState } from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import HomeContent from "../components/Home/HomeContent";
import ParameterModal from "../components/Home/ParameterModal";
import Settings from "../engine/Settings";

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="2" className="text-center"></IonCol>
              <IonCol className="text-center " size="8">
                <IonImg
                  src={
                    (Settings.darkTheme())
                      ? "../../assets/logotypes/temperapp_logo-dark.svg"
                      : "../../assets/logotypes/temperapp_logo.svg"
                  }
                  className="logo-home"
                />
              </IonCol>
              <IonCol size="2" className="text-center">
                <ParameterModal />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
