import React from 'react';

import { CgClose } from 'react-icons/cg';

import { Props } from './Notification.types';

const Notification: React.FC<Props> = ({
  title,
  description,
  Icon,
  iconColor,
  condensedLink,
  bottomLinks,
  rightLinks,
  image,
  large = false,
  BottomButtons,
}) => {
  return (
    <div className={`notification ${large ? 'notification--large' : ''}`}>
      <div className="notification__container">
        {Icon ? (
          <div className="notification__icon">
            <Icon className={`color-${iconColor}-400 `} />
          </div>
        ) : (
          <></>
        )}

        {image ? (
          <div className="notification__image">
            <img src={image} className="notification__image" />
          </div>
        ) : (
          <></>
        )}

        <div className="notification__content">
          <div className="notification__title">{title}</div>
          <p className="notification__description">{description}</p>

          {bottomLinks ? (
            <div className="notification__bottom-container">
              {bottomLinks.map(({ text, color, link }) => (
                <a key={text} href={link} className="notification__bottom">
                  <p className={`color-${color}`}>{text}</p>
                </a>
              ))}
            </div>
          ) : (
            <></>
          )}
          {BottomButtons ? (
            <div className="notification__bottom-buttons">{BottomButtons}</div>
          ) : (
            <></>
          )}
        </div>
        {condensedLink ? (
          <a
            href={condensedLink.link}
            className={`notification__condensed color-${condensedLink.color}-600`}
          >
            <div>{condensedLink.text}</div>
          </a>
        ) : (
          <></>
        )}
        {rightLinks ? (
          <div>
            <div className="notification__right-container">
              {rightLinks ? (
                rightLinks.map(({ text, color, link }) => (
                  <a key={text} href={link} className="notification__right">
                    <p className={`color-${color}`}>{text}</p>
                  </a>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div className="notification__close">
            <CgClose />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
