import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRating } from './product-rating';

describe('ProductRating', () => {
  let component: ProductRating;
  let fixture: ComponentFixture<ProductRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRating]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductRating);
    component = fixture.componentInstance;
    component.data = { rating: 4.5, reviewsCount: 120 };
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el número de reseñas', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.reviews-count')?.textContent).toContain('120');
  });

it('debería marcar como llenas las estrellas correctas', () => {
  component.data = { rating: 3.2, reviewsCount: 50 };
  fixture.detectChanges();

  expect(component.isFilled(3)).toBe(true);
  expect(component.isFilled(4)).toBe(false);
});

  it('debería generar la configuración del badge correctamente', () => {
    expect(component.ratingBadgeConfig).toEqual({ text: '4.5', variant: 'rating' });
  });
});
