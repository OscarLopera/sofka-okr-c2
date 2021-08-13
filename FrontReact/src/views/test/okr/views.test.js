// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// import EmptyMessage from '../../components/okr/EmptyMessage';

// describe('Render components', () => {
//   let container = null;
//   beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   it('Renderizar sugerencia de OKR', () => {
//     act(() => {
//       render(<EmptyMessage />, container);
//     });
//     expect(container.textContent).toBe('No tienes OKRs');
//   });
// });
