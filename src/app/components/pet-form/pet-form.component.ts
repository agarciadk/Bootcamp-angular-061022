import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet, PetType } from '../../../types';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  @Input() ownerId!: number;
  @Input() petTypes: PetType[];
  @Output() addPetEmitter = new EventEmitter<Pet>();
  @Output() closeFormEmitter = new EventEmitter<void>();

  pet: Pet = {
    id: 0,
    name: '',
    birthDate: '',
    type: { id: 0, name: '' },
    ownerId: 0,
    visits: [
      {
        date: '',
        description: '',
        id: 0,
        petId: 0
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.pet.ownerId = this.ownerId;
    this.pet.type = this.petTypes[0];
  }

  addPet(): void {
    this.addPetEmitter.emit(this.pet);
  }

  closeForm(): void {
    this.closeFormEmitter.emit();
  }

}
