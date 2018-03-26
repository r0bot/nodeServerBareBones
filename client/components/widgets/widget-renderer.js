import React from 'react';
import { WidgetType } from '../../constants/widgets';
import ToggleWidget from './toggle-widget';
import GraphWidget from './graph-widget';

export default function renderWidget(widget) {
  switch (widget.type) {
    case WidgetType.Toggle:
      return (<ToggleWidget {...widget} />);
    case WidgetType.Graph:
      return (<GraphWidget {...widget} />);
    default:
      throw new Error(`Unexpected widget type: ${widget.type}`);
  }
}
