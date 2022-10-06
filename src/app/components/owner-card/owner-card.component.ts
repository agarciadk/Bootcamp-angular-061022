import { Component, Input } from '@angular/core';
import { FuseConfirmationService } from '../../../@fuse/services/confirmation';
import { Owner, Pet, PetType } from '../../../types';
import { OwnerService } from '../../modules/admin/owner/owner.service';

@Component({
  selector: 'owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.scss'],
})
export class OwnerCardComponent {

  @Input() owner!: Owner;
  @Input() petTypes!: PetType[];
  mode: 'añadir' | 'mostrar' = 'mostrar';

  constructor(private ownerService: OwnerService, private dialog: FuseConfirmationService) { }

  removePet(petId: number): void {
    this.dialog.open({
      title: 'Eliminar Mascota',
      message: '¿Está seguro que desea eliminar esta mascota?',
      actions: {
        confirm: { label: 'Eliminar' },
        cancel: { label: 'Cancelar' }
      }
    }).afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        this.ownerService.deletePet(petId).subscribe(() => {
          this.owner.pets = this.owner.pets.filter(pet => pet.id !== petId);
        });
      }
    });
  }

  changeMode(): void {
    if (this.mode === 'mostrar') {
      this.mode = 'añadir';
    } else {
      this.mode = 'mostrar';
    }
  }

  addPet(pet: Pet): void {
    this.ownerService.addPet(pet).subscribe((data) => {
      console.log({ data });
      this.owner.pets.push(data);
      this.changeMode();
    });
  }

}
