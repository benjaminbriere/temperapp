import { IonImg } from '@ionic/react';
import React from 'react';

import "../../pages/Learn.css"


type diagramProps = {
    titreText:string,
    contentImg: string
    darkTheme: boolean,
  }


const DiagramLearn : React.FC<diagramProps> = ({titreText, contentImg, darkTheme}) => {

return (
    <div className ="LearnBox">
        <h3>{titreText}</h3>
        <IonImg className="LearnElement" src={"../assets/icon/imageType.png"} />
    </div>
)


}; 


export default DiagramLearn;