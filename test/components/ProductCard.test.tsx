import * as React from 'react';
import renderer from 'react-test-renderer';
import { product } from '../data/products';
import { ProductCard } from '../../src/components';

const { act } = renderer;

describe('ProductCard', () => {
  test('debe mostrar el componente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {() => <h1>Hola ProductCard</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
