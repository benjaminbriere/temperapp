/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import collapseMotion from "../../utils/collapseMotion";
import { IonButton, IonGrid, IonRow, IonCol, IonSearchbar } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";

import "../App/Collapse.css";
import "../App/ButtonTemper.css";
import { TemperamentDBType } from "../../engine/DB";
import ArrowCollapseSVG from "./ArrowCollapseSVG";
import { fetchTemperaments } from "../../engine/DataAccessor";
import UserContext from "../../store/user-context";
import { ascendingOrder, temperamentFavorite } from "../../utils/favorite";

const sort = (tmpmts: TemperamentDBType[]) => {
  return tmpmts.sort((t1, t2) => {
    const name1 = t1.nameFR.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const name2 = t2.nameFR.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return (name1 < name2)
      ? -1
      : (name1 > name2)
        ? 1
        : 0
  })
}



const SheetsMenu: React.FC = () => {

  const user = useContext(UserContext);
  const [favoriteTemperaments, setMyTemperaments] = useState<TemperamentDBType[]>([]);
  const [famousTemperaments, setFamousTemperaments] = useState<TemperamentDBType[]>([]);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);

  const [searchText, setSearchText] = useState("");
  const [request, setRequest] = useState<RegExp>(RegExp("([A-z])\\w+", "i"));

  useEffect(() => {
    (async () => {
      setMyTemperaments(sort(await fetchTemperaments()));
    })();
    (async () => {
      setFamousTemperaments(sort(await fetchTemperaments()));
    })();
    (async () => {
      setTemperamentsList(sort(await fetchTemperaments()));
    })();
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      setRequest(new RegExp(
        "\\b(\\w*" +
        searchText
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9\s-]/g, "") +
        "\\w*)\\b",
        "i"
      ));
    } else {
      setRequest(new RegExp("([A-z])\\w+", "i"));
    }
  }, [searchText]);

  const items = [
    {
      key: "0",
      label: "Mes Favoris",
      elements: favoriteTemperaments
    }, {
      key: "1",
      label: "Les plus courants",
      elements: famousTemperaments
    }, {
      key: "2",
      label: "Tous les temp??raments",
      elements: temperamentsList
    }
  ];

  return (
    <>
      <IonSearchbar
        className="px-8 pb-2 pt-4"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
      />
      <Collapse
        accordion={true}
        defaultActiveKey={items[2].key}
        openMotion={collapseMotion}
        expandIcon={(e: any) => <ArrowCollapseSVG isActive={e.isActive} />}
      >

        <Panel
          key={items[0].key}
          header={items[0].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[0].elements
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .search(request) !== -1
                )
                .sort(ascendingOrder)
                .filter(
                  (t: TemperamentDBType) =>
                  temperamentFavorite(t.idTemperament.toString(), user.favorite) === true
                )
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      routerLink={`/sheets/temperament/${t.idTemperament}`}
                    >
                      {t.nameFR}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>

        <Panel
          key={items[1].key}
          header={items[1].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[1].elements
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .search(request) !== -1
                )
                .sort(ascendingOrder)
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      routerLink={`/sheets/temperament/${t.idTemperament}`}
                    >
                      {t.nameFR}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>

        <Panel
          key={items[2].key}
          header={items[2].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[2].elements
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .search(request) !== -1
                )
                .sort(ascendingOrder)
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      routerLink={`/sheets/temperament/${t.idTemperament}`}
                    >
                      {t.nameFR}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>

      </Collapse>
    </>
  );
};

export default SheetsMenu;
