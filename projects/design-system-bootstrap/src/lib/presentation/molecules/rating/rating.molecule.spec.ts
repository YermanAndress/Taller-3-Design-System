import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_RATING_LOW, MOCK_RATING_REVIEWS, MOCK_RATING_VALUE } from '../../../mocks/rating.mocks';
import { RatingMolecule } from './rating.molecule';

describe('RatingMolecule', () => {
  let component: RatingMolecule;
  let fixture: ComponentFixture<RatingMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería usar valores por defecto', () => {
    expect(component.rating).toBe(0);
    expect(component.reviewsCount).toBe(0);
    expect(component.maxStars).toBe(5);
    expect(component.size).toBe(1);
  });

  it('debería renderizar 5 estrellas por defecto', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('i.bi')).length).toBe(5);
  });

  it('debería redondear 4.5 a 5 rellenas', () => {
    component.rating = MOCK_RATING_VALUE;
    fixture.detectChanges();
    const stars = fixture.debugElement.queryAll(By.css('i.bi'));
    expect(stars.filter((s) => s.nativeElement.classList.contains('bi-star-fill')).length).toBe(5);
  });

  it('debería redondear 3.2 a 3 rellenas y 2 vacías', () => {
    component.rating = MOCK_RATING_LOW;
    fixture.detectChanges();
    const stars = fixture.debugElement.queryAll(By.css('i.bi'));
    expect(stars.filter((s) => s.nativeElement.classList.contains('bi-star-fill')).length).toBe(3);
    expect(stars.filter((s) => s.nativeElement.classList.contains('bi-star')).length).toBe(2);
  });

  it('debería mostrar badge con promedio y conteo de reseñas', () => {
    component.rating = MOCK_RATING_VALUE;
    component.reviewsCount = MOCK_RATING_REVIEWS;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('dsb-badge-atom')).nativeElement.textContent).toContain('4.5');
    expect(fixture.debugElement.query(By.css('span.text-muted')).nativeElement.textContent).toContain('120 reseñas');
  });

  it('debería aplicar size como fontSize', () => {
    component.size = 1.25;
    fixture.detectChanges();
    fixture.debugElement.queryAll(By.css('i.bi')).forEach((s) => {
      expect(s.nativeElement.style.fontSize).toBe('1.25rem');
    });
  });

  it('getStarClass debería retornar la clase correcta', () => {
    expect(component.getStarClass(true)).toBe('bi-star-fill');
    expect(component.getStarClass(false)).toBe('bi-star');
  });

  it('debería limitar rating fuera de rango', () => {
    component.rating = 7;
    expect(component.getRoundedRating()).toBe(5);
    component.rating = -1;
    expect(component.getRoundedRating()).toBe(0);
  });

  it('getNormalizedMaxStars debería tratar negativos y no finitos', () => {
    component.maxStars = -3;
    expect(component.getNormalizedMaxStars()).toBe(0);
    component.maxStars = NaN;
    expect(component.getNormalizedMaxStars()).toBe(5);
  });

  it('isFilled debería comparar contra el redondeo', () => {
    component.rating = MOCK_RATING_VALUE;
    expect(component.isFilled(5)).toBe(true);
    component.rating = MOCK_RATING_LOW;
    expect(component.isFilled(4)).toBe(false);
  });

  it('ratingBadgeText debería retornar 0.0 si rating no es finito', () => {
    component.rating = NaN;
    expect(component.ratingBadgeText).toBe('0.0');
  });

  it('debería exponer aria-label', () => {
    component.rating = MOCK_RATING_VALUE;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div[role="img"]')).attributes['aria-label']).toBe('Valoración 4.5 de 5');
  });
});
