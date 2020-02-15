import React from 'react';
import Videos from '~/containers/videos';
import ReferenceEditor from '~/components/ReferenceEditor';
import CompositionPlayer from '~/containers/composition-player';
import PageNotFound from '~/components/PageNotFound';
import {
  Page,
  HOME_PAGE,
  REFERENCE_EDITOR_PAGE,
  COMPOSITION_PLAYER_PAGE,
  NOT_FOUND_PAGE
} from './pages';

type PagesToComponents = { [P in Page]: JSX.Element };

const pagesToComponents: PagesToComponents = {
  [HOME_PAGE]: <Videos />,
  [REFERENCE_EDITOR_PAGE]: <ReferenceEditor />,
  [COMPOSITION_PLAYER_PAGE]: <CompositionPlayer />,
  [NOT_FOUND_PAGE]: <PageNotFound />
};

export default pagesToComponents;
