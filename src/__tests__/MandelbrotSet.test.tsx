import { render } from '@testing-library/react';
import { MandelbrotSet } from '../components/MandelbrotSet';

describe('MandelbrotSet', () => {
  it('renders without crashing', () => {
    render(<MandelbrotSet width={400} height={400} />);
  });

  it('applies custom dimensions', () => {
    const { container } = render(<MandelbrotSet width={300} height={200} />);
    const canvas = container.querySelector('canvas');
    
    expect(canvas).toHaveAttribute('width', '300');
    expect(canvas).toHaveAttribute('height', '200');
  });

  it('applies custom className', () => {
    const { container } = render(
      <MandelbrotSet width={400} height={400} className="custom-class" />
    );
    const canvas = container.querySelector('canvas');
    
    expect(canvas).toHaveClass('custom-class');
  });
});
