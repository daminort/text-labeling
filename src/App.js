import React, { useState, useCallback } from 'react';

import { TextSection } from './TextSection';
import { LabelsList } from './LabelsList';

import { CONTEXT_MENU_IDS as IDs, LABELS } from './constants';

import { Wrapper } from './App.style';
import { originText, createLabels } from './utils';

const labelTypes = {
  [IDs.confirmEmail]: LABELS.email,
  [IDs.confirmUserID]: LABELS.userID,
  [IDs.confirmPassword]: LABELS.password,
  [IDs.confirmFauxEmail]: LABELS.fauxEmail,
  [IDs.confirmFauxUserID]: LABELS.fauxUserID,
  [IDs.confirmFauxPassword]: LABELS.fauxPassword,
  [IDs.confirmIWord]: LABELS.iWord,
};

const App = () => {

  const [labels, setLabels] = useState([]);

  const onAddLabel = useCallback((selectedText, contextMenuID) => {
    if (!selectedText) {
      return;
    };
    const newLabels = createLabels(originText, selectedText, labelTypes[contextMenuID]);

    setLabels([...labels, ...newLabels]);
  }, [labels]);

  const onRemoveLabel = useCallback((start) => {
    const newLabels = labels.filter(item => item.start !== start);
    setLabels(newLabels);
  }, [labels]);

  return (
    <Wrapper>
      <TextSection
        text={originText}
        labels={labels}
        onAddLabel={onAddLabel}
      />
      <LabelsList
        labels={labels}
        onRemove={onRemoveLabel}
      />
    </Wrapper>
  );
}

export default App;
export { App };
