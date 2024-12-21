import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { FlowProvider } from './context';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: FlowProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
