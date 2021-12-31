import * as React from 'react';
import renderer from 'react-test-renderer';
import { product } from '../data/products';
import { ProductCard, ProductTitle } from '../../src/components';

describe('ProductTitle', () => {
  test('debe mostrar el componente con el titulo personalizado', () => {
    const title = 'Producto personalizado';
    const wrapper = renderer.create(<ProductTitle title={title} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with name of product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
