import React from 'react';

import { Props } from './ActionPanel.types';

const ActionPanel: React.FC<Props> = ({
  title,
  description,
  bottom,
  right,
  gray = false,
  rightBottom = false,
  rightTop = false,
}) => {
  return (
    <div className={`action-panel ${gray ? 'action-panel--gray' : ''}`}>
      <div className="action-panel__content">
        <div>
          <h1 className="action-panel__title">{title}</h1>
          <p className="action-panel__description">{description}</p>
          {bottom ? (
            <div className="action-panel__bottom">{bottom}</div>
          ) : (
            <></>
          )}
        </div>
        {right ? (
          <div
            className={`action-panel__right ${
              rightBottom ? 'action-panel__right--bottom' : ''
            } ${rightTop ? 'action-panel__right--top' : ''}`}
          >
            {right}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActionPanel;
