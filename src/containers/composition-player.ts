import { connect } from 'react-redux';
import CompositionPlayer, {
  ValueProps as CompositionPlayerValueProps
} from '~/components/CompositionPlayer';
import { State } from '~/state';

const mapStateToProps = ({
  location: {
    payload: { compositionID }
  },
  entities
}: State): CompositionPlayerValueProps => {
  const {
    formalCompositions: {
      byID: { [compositionID]: composition }
    }
  } = entities;

  const {
    tags: { byID: tagsByID, allIDs: allTagIDs },
    videos: { byID: videosByID, allIDs: allVideoIDs }
  } = entities;

  if (allTagIDs === undefined)
    return {
      reel: {
        segments: []
      }
    };

  const firstRefID = allTagIDs.find(
    (id: string): boolean => id === composition.firstFormalReferenceID
  );

  const firstRef = tagsByID[firstRefID];

  if (firstRef === undefined)
    return {
      reel: {
        segments: []
      }
    };

  const secondRefID = allTagIDs.find(
    (id: string): boolean => id === composition.secondFormalReferenceID
  );

  const secondRef = tagsByID[secondRefID];

  if (secondRef === undefined)
    return {
      reel: {
        segments: []
      }
    };

  const firstVideoID: string = allVideoIDs.find(
    (id: string): boolean => videosByID[id].globalID === firstRef.videoID
  );

  if (firstVideoID === undefined)
    return {
      reel: {
        segments: []
      }
    };

  const secondVideoID: string = allVideoIDs.find(
    (id: string): boolean => videosByID[id].globalID === secondRef.videoID
  );

  if (secondVideoID === undefined)
    return {
      reel: {
        segments: []
      }
    };

  return {
    reel: {
      segments: [
        {
          videoID: firstVideoID,
          refID: firstRefID,
          interval: {
            from: firstRef.path[0].time,
            to: firstRef.path[firstRef.path.length - 1].time
          }
        },
        {
          videoID: secondVideoID,
          refID: secondRefID,
          interval: {
            from: secondRef.path[0].time,
            to: secondRef.path[secondRef.path.length - 1].time
          }
        }
      ]
    }
  };
};

export default connect(mapStateToProps)(CompositionPlayer);
