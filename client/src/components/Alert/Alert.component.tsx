import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';

import { Props } from './Alert.types';

const Alert: React.FC<Props> = ({
  Icon,
  title,
  description,
  color,
  list,
  actions,
  rightLink,
  close,
  open = true,
  accent,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  return isOpen ? (
    <div className="alert">
      <div
        className={`alert__container bg-${color}-50 ${
          accent ? `alert__accent border--color-${color}-400` : ''
        }`}
      >
        <div>
          <Icon className={`alert__icon color-${color}-400`} />
        </div>
        <div className="alert__content">
          <p
            className={`alert__title color-${color}-800 ${
              rightLink ? 'alert__title--right-action' : ''
            } ${close ? 'alert__title--close' : ''}`}
          >
            {title}
          </p>
          {description ? (
            <p className={`alert__description color-${color}-700`}>
              {description}
            </p>
          ) : (
            <></>
          )}
          {list ? (
            <ul className={`color-${color}-700`}>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          {actions ? (
            <div className="alert__actions">
              {actions.map(({ text, link }) => (
                <a key={text} href={link} className={`color-${color}-800`}>
                  {text}
                </a>
              ))}
            </div>
          ) : (
            <></>
          )}
          {rightLink ? (
            <div className="alert__right-action">
              <a className={`color-${color}-800`} href={rightLink.link}>
                {rightLink.text}
              </a>
            </div>
          ) : (
            <></>
          )}
          {close ? (
            <div className={`alert__close color-${color}-500`}>
              <MdClose onClick={() => setIsOpen(!isOpen)} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Alert;
