import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemVersion2Component } from './todo-item-version2.component';

describe('TodoItemVersion2Component', () => {
  let component: TodoItemVersion2Component;
  let fixture: ComponentFixture<TodoItemVersion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemVersion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
