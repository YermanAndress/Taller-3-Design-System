import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductCardOrganism } from './product-card.organism';

describe('ProductCardOrganism', () => {
  let component: ProductCardOrganism;
  let fixture: ComponentFixture<ProductCardOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardOrganism],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería usar valores por defecto', () => {
    expect(component.price).toBe(0);
    expect(component.currency).toBe('USD');
    expect(component.buttonId).toBe('btn-add-cart');
    expect(component.buttonText).toBe('Añadir al carrito');
  });

  it('debería componer header, rating, precio y botón', () => {
    component.imageUrl = 'https://picsum.photos/400/300';
    component.title = 'Audífonos Bluetooth';
    component.discountText = '-20%';
    component.rating = 4.5;
    component.reviewsCount = 120;
    component.price = 49.99;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('dsb-card-header-molecule'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('dsb-rating-molecule'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('dsb-price-atom'))).toBeTruthy();
    const button = fixture.debugElement.query(By.css('dsb-button-atom'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('Añadir al carrito');
  });

  it('debería mostrar el precio dentro del organismo', () => {
    component.price = 49.99;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('dsb-price-atom')).nativeElement.textContent).toContain('49.99');
  });

  it('debería emitir addToCart al hacer click en el botón', () => {
    const spy = jest.spyOn(component.addToCart, 'emit');
    component.onAddToCart('btn-add-cart');
    expect(spy).toHaveBeenCalledWith('btn-add-cart');
  });
});
