import React from 'react';

import Input from '../../components/Input';

import { AiFillQuestionCircle } from 'react-icons/ai';

const InputsPage = () => {
  return (
    <div className="inputs">
      <div className="inputs__container">
        <Input placeholder="you@example.com" label="Email" />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="password1234"
          label="Password"
          helpText="Make your password short and easy to guess"
        />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="password1234"
          label="Password"
          helpText="Make your password short and easy to guess"
          valid={false}
        />
        <div className="u-margin-bottom-medium" />
        <Input placeholder="you@example.com" />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="you@example.com"
          label="Email"
          cornerHint="Optional"
        />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="000-00-0000"
          label="Account number"
          cornerHint="Optional"
          TrailingIcon={AiFillQuestionCircle}
        />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="www.example.com"
          label="Company Website"
          leadingAddOn="https://"
        />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="www.example.com"
          label="Company Website"
          leadingAddOn="https://"
          leadingInlineAddOn={true}
        />
        <div className="u-margin-bottom-medium" />
        <Input
          placeholder="0.00"
          label="Price"
          leadingAddOn="$"
          leadingInlineAddOn={true}
          trailingAddOn="USD"
          trailingInlineAddOn={true}
        />
        <div className="u-margin-bottom-medium" />
      </div>
    </div>
  );
};

export default InputsPage;
