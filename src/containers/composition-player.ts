import { connect } from 'react-redux';
import CompositionPlayer, {
  ValueProps as CompositionPlayerValueProps
} from '~/components/CompositionPlayer';
import { State, Tag } from '~/state';

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
    tags: { byID: tagsByID },
    videos: { byID: videosByID, allIDs: allVideoIDs }
  } = entities;

  const firstRef: Tag = Object.values(tagsByID).find(
    (t: Tag): boolean => t.globalID === composition.firstFormalReferenceID
  );

  if (firstRef === undefined)
    return {
      reel: {
        segments: []
      }
    };

  const secondRef: Tag = Object.values(tagsByID).find(
    (t: Tag): boolean => t.globalID === composition.secondFormalReferenceID
  );

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
          refID: firstRef.globalID,
          interval: {
            from: firstRef.path[0].time,
            to: firstRef.path[firstRef.path.length - 1].time
          }
        },
        {
          videoID: secondVideoID,
          refID: secondRef.globalID,
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
