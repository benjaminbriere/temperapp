import React, { useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import { useParams } from "react-router";
import { IonButton, IonIcon } from '@ionic/react';

const SheetTemperament: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(id));
    })();
  }, [id]);

  const period = "XXXe siècle"
  const geographicalArea = "Inconnu"
  const commaticNature = "X/XX de comma pythagoricien"
  const particularity = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia? Sequi, dicta vero numquam quo eum reiciendis aliquam alias accusantium placeat fugiat recusandae officiis doloremque error ab dolores earum. Modi!"

  return (
    <Sheet
      mainTitle={temperament.nameFR}
      subTitle="Tempérament"
    >
      <div>
        <p><b>Époque</b> : {period} </p>
        <p><b>Aire géographique</b> : {geographicalArea}</p>
        <p><b>Nature</b> : {commaticNature} </p>
        <p><b>Particularité scruturelle</b> : {particularity} </p>
      </div>

      <IonButton
        className="btn-round absolute right-4 bottom-4"
        routerLink={`/tune/`}
      >
        <IonIcon
          style={{ fontSize: "3rem" } /* TODO Find a better way */}
          src="/assets/logotypes/button-tune.svg"
        />
      </IonButton>
    </Sheet>
  );
};

export default SheetTemperament;
