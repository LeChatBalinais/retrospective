import { State } from '~/state';

const getIDsOfVideosInComposition = (
  state: State,
  compositionID: string
): string[] => {
  const {
    entities: {
      formalCompositions: {
        byID: {
          [compositionID]: { firstFormalReferenceID, secondFormalReferenceID }
        }
      }
    }
  } = state;

  const {
    entities: {
      tags: {
        byID: {
          [firstFormalReferenceID]: firstFormalReference,
          [secondFormalReferenceID]: secondFormalReference
        }
      }
    }
  } = state;

  return [firstFormalReference.videoID];
};

export default getIDsOfVideosInComposition;
