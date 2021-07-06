import React from 'react';
import { ActiveNotes, NoteStates } from './NonClickablePitchCircleSVG';
import { TunerMode } from '../PitchCircle';
import { Notes } from '../../../model/Note/enums';
import Settings from '../../../engine/Settings';

const colorButton = (state: NoteStates) => {
  let temp: string;
  (Settings.darkTheme())?
    temp = "#233C3A"
    : temp = "#F7FBFC"
  switch (state) {
    case NoteStates.SELECTED: // bouton activé 
      return "#A7C5C3";
    case NoteStates.OCTAVE: // bouton activé à l'octave supérieur
      return "#F75D4E";
    default: //bouton déactivé
      return temp;
  }
}

type NonClickablePitchCircleButtonSVGProps = {
  position: string,
  state: NoteStates,
}

const NonClickablePitchCircleButtonSVG: React.FC<NonClickablePitchCircleButtonSVGProps> = ({
  position, state
}) => {

  return (
    <path
      fill={colorButton(state)} stroke="#A7C5C3"
      strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5"
      transform="translate(-2.04 -1.82)" d={position}
    />
  );
};

export default React.memo(
  NonClickablePitchCircleButtonSVG,
  (prevProps, nextProps) => (
    prevProps.state === nextProps.state)
    // TODO TunerMode.BPM
);
