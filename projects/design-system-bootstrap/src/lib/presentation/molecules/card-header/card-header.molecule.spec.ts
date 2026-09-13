import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardHeaderMolecule } from './card-header.molecule';

describe('CardHeaderMolecule', () => {
  let component: CardHeaderMolecule;
  let fixture: ComponentFixture<CardHeaderMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHeaderMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería usar valores por defecto', () => {
    expect(component.imageUrl).toBe('');
    expect(component.title).toBe('');
    expect(component.discountText).toBe('');
  });

  it('debería mostrar imagen y título del producto', () => {
    component.imageUrl = 'https://picsum.photos/400/300';
    component.title = 'Audífonos Bluetooth';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('dsb-product-image-atom'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('h5')).nativeElement.textContent).toContain('Audífonos Bluetooth');
  });

  it('debería mostrar badge de descuento cuando hay discountText', () => {
    component.discountText = '-20%';
    fixture.detectChanges();
    const badge = fixture.debugElement.query(By.css('dsb-badge-atom'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent).toContain('-20%');
  });

  it('no debería mostrar badge cuando discountText es vacío', () => {
    component.discountText = '';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('dsb-badge-atom'))).toBeNull();
  });
});
