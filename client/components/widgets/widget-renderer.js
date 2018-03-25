import React from 'react';
import ToggleWidget from './toggle-widget';

export default function renderWidget(widget) {
  switch (widget.type) {
    case 'toggle':
      return <ToggleWidget {...widget} />;
    default:
      return <ToggleWidget {...widget} />; // TODO: throw error
  }
}
