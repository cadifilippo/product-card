import * as React from 'react';
import renderer from 'react-test-renderer';
import { product2 } from '../data/products';
import { ProductCard, ProductImage } from '../../src/components';

describe('ProductImage', () => {
  test('debe mostrar el componente', () => {
    const image = '../../src/assets/no-image.jpg';
    const wrapper = renderer.create(<ProductImage img={image} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
