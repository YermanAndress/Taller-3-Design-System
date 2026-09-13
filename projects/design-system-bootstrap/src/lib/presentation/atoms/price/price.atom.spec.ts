import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_PRICE_CURRENCY, MOCK_PRICE_VALUE } from '../../../mocks/product.mocks';
import { PriceAtom } from './price.atom';

describe('PriceAtom', () => {
  let component: PriceAtom;
  let fixture: ComponentFixture<PriceAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería usar value 0 y currency USD por defecto', () => {
    expect(component.value).toBe(0);
    expect(component.currency).toBe(MOCK_PRICE_CURRENCY);
  });

  it('debería mostrar el precio con formato moneda', () => {
    component.value = MOCK_PRICE_VALUE;
    component.currency = MOCK_PRICE_CURRENCY;
    fixture.detectChanges();
    const price = fixture.debugElement.query(By.css('.price'));
    expect(price.nativeElement.textContent).toContain('49.99');
    expect(price.nativeElement.textContent).toContain('$');
  });

  it('debería actualizarse cuando cambia value o currency', () => {
    component.value = 1200;
    component.currency = 'COP';
    fixture.detectChanges();
    const price = fixture.debugElement.query(By.css('.price'));
    expect(price.nativeElement.textContent).toContain('1,200');
  });
});
