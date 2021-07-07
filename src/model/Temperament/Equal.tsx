import NotesMap, { mapNotesMap } from "../Note/NotesMap";

const EqualTemperament = {
  idTemperament: 1,
  name: "Equal",
  nameFR: "Égal",
  deviation: {
    C:       0,
    C_sharp: 0,
    D:       0,
    E_flat:  0,
    E:       0,
    F:       0,
    F_sharp: 0,
    G:       0,
    G_sharp: 0,
    A:       0,
    B_flat:  0,
    B:       0,
  },
  cpExp5th: {
    F_sharp: "-1/12",
    C_sharp: "-1/12",
    G_sharp: "-1/12",
    E_flat:  "-1/12",
    B_flat:  "-1/12",
    F:       "-1/12",
    C:       "-1/12",
    G:       "-1/12",
    D:       "-1/12",
    A:       "-1/12",
    E:       "-1/12",
    B:       "-1/12",
  },
  csExp3rd: {
    F_sharp: "+7/11",
    C_sharp: "+7/11",
    G_sharp: "+7/11",
    E_flat:  "+7/11",
    B_flat:  "+7/11",
    F:       "+7/11",
    C:       "+7/11",
    G:       "+7/11",
    D:       "+7/11",
    A:       "+7/11",
    E:       "+7/11",
    B:       "+7/11",
  },
  csExp5th: {
    F_sharp: "-1/11",
    C_sharp: "-1/11",
    G_sharp: "-1/11",
    E_flat:  "-1/11",
    B_flat:  "-1/11",
    F:       "-1/11",
    C:       "-1/11",
    G:       "-1/11",
    D:       "-1/11",
    A:       "-1/11",
    E:       "-1/11",
    B:       "-1/11",
  },
  procedure: ""
};

export const fifthEqualQ = (): NotesMap<number|null> => (mapNotesMap(-1));
export const thirdEqualQ = (): NotesMap<number|null> => (mapNotesMap(7));
export const DivergenceEqual = (): NotesMap<number> => (mapNotesMap(0));

export default EqualTemperament;
