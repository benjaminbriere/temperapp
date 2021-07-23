import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import './Learn.css'

const Learn: React.FC = () => {

  const items = [
    {
      label: "Definition",
      routerLink: "/learn/definition",
      src: "/assets/logotypes/logo-def.svg",
    }, {
      label: "Caractéristiques",
      routerLink: "/learn/characteristics",
      src: "/assets/logotypes/logo-def.svg",
    }, {
      label: "Physique",
      routerLink: "/learn/physics",
      src: "/assets/logotypes/logo-phys.svg",
    }, {
      label: "Histoire",
      routerLink: "/learn/history",
      src: "/assets/logotypes/logo-def.svg",
    }
  ]

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle="Apprendre"
        />
      </IonHeader>

      <IonContent fullscreen scrollY={true}>

        {items.map(({ label, routerLink, src }, idx) => (
          <IonButton
            key={idx}
            className="h-28 item-btn"
            expand="full"
            fill="clear"
            style={{ "--ripple-color": "var(--color-contrast)" }}
            routerLink={routerLink}
          >
            <div className="flex w-full items-center justify-start">
              <IonIcon className="ml-8 item-icon" 
                src={src}
              />
              <IonLabel className="pl-6 item-label">
                <h3>{label}</h3>
              </IonLabel>
            </div>
          </IonButton>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Learn;
