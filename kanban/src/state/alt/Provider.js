import React from 'react';
import AltContainer from 'alt-container';
import alt from './alt';

const AltProvider = ({ children }) => (
  <AltContainer flux={alt}>
    {children}
  </AltContainer>
);
AltProvider.childContextTypes = AltContainer.childContextTypes;

export default AltProvider;
