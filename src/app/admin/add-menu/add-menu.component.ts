import { Component } from '@angular/core';
import { DanhmucService } from '../../danhmuc.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Imenu } from '../../component/interfaces/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  standalone: true, // Make this a standalone component
  imports: [
    CommonModule, // Import CommonModule to use ngIf and other common directives
    ReactiveFormsModule // Import ReactiveFormsModule to use reactive forms
  ],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'] // Correct property name for styles
})
export class AddMenuComponent {
  constructor(private danhmucService: DanhmucService) { }

  menuforms = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    desc: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  menus: Imenu[] = [];

  ngOnInit() {
    this.danhmucService.Get_All_Menu().subscribe(data => {
      this.menus = data;
    });
  }
  
  router = new Router()

  onSubmit() {
    if (this.menuforms.valid) {
      console.log(this.menuforms.value);
      this.danhmucService.AddMenu(this.menuforms.value as Imenu).subscribe(data => {
        this.menus.push(data);
        alert("Thêm sản phẩm thanhf công");
        this.router.navigate(['product']);
      });
    }
  }
}
