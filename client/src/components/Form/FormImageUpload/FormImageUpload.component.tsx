// STILL NEEDS TO BE WORKED ON

import React from 'react';

type Props = {
  multiple: boolean;
  size: string;
  selected: boolean;
};

const FormImageUpload: React.FC<Props> = ({
  multiple,
  size,
  selected,
  ...otherProps
}) => {
  return (
    <>
      <div className="form__current-image" />
      <div className="form__image">
        <label htmlFor="images">
          {multiple ? 'Images' : 'Image'}
          <span>
            {`Your ${
              multiple ? 'images' : 'image'
            } should be at least ${size} wide`}
          </span>
        </label>
        <div className="form__images-dummy-container">
          {multiple ? (
            <input
              type="file"
              id="images"
              className="sepcific-input"
              multiple
              {...otherProps}
            />
          ) : (
            <input
              type="file"
              id="images"
              className="sepcific-input"
              {...otherProps}
            />
          )}

          <div
            className={`form__images-dummy  ${
              selected ? 'form__images-dummy--selected' : ''
            }`}
          >
            <div className="success">
              {`              Great, your ${
                multiple ? 'files are selected' : 'file is selected'
              }
              .`}
            </div>
            <div className="default">
              {` 
${multiple ? 'Please select some images' : 'Replace image'}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormImageUpload;
