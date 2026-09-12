import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Badge } from './badge';

describe('Badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge]
    }).compileComponents();

    fixture = TestBed.createComponent(Badge);
    component = fixture.componentInstance;
    component.config = { text: '4.5', variant: 'rating' };
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el texto recibido en config', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.badge')?.textContent).toContain('4.5');
  });

  it('debería aplicar la clase correspondiente a la variante', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.badge')?.classList).toContain('rating');
  });
});
