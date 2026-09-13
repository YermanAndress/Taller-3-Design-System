import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_PRODUCT_IMAGE_ALT, MOCK_PRODUCT_IMAGE_SRC } from '../../../mocks/product.mocks';
import { ProductImageAtom } from './product-image.atom';

describe('ProductImageAtom', () => {
  let component: ProductImageAtom;
  let fixture: ComponentFixture<ProductImageAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería usar alt por defecto', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(component.alt).toBe('Imagen del producto');
    expect(img.attributes['alt']).toBe('Imagen del producto');
  });

  it('debería renderizar src y alt del producto', () => {
    component.src = MOCK_PRODUCT_IMAGE_SRC;
    component.alt = MOCK_PRODUCT_IMAGE_ALT;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.properties['src']).toBe(MOCK_PRODUCT_IMAGE_SRC);
    expect(img.attributes['alt']).toBe(MOCK_PRODUCT_IMAGE_ALT);
  });

  it('debería aplicar clases Bootstrap img-fluid y rounded', () => {
    component.src = MOCK_PRODUCT_IMAGE_SRC;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.classList).toContain('img-fluid');
    expect(img.nativeElement.classList).toContain('rounded');
  });
});
