import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () =>
{
let component: ProductListComponent;
let fixture: ComponentFixture<ProductListComponent>;

beforeEach(async() => {
  await TestBed.configureTestingModule({
    declarations: [ProductListComponent],
  }).compileComponents();
})

beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the correct title', () => {
    const cardHeader= fixture.nativeElement.querySelector('.card-header')
    expect(cardHeader.textContent.trim()).toBe('Product List');
  })

  it('should display the correct name', () => {
    const colMd = fixture.nativeElement.querySelector('.col-md-2')
    expect(colMd.textContent.trim()).toBe('Filter by:')
  })

  it('should display the correct name',()=> {
    const colMd = fixture.nativeElement.querySelector('.col-md-6')
    expect(colMd.textContent.trim()).toBe('Filtered by:')
  })

})
