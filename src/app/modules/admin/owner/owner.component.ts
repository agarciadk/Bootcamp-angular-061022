import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Owner, PetType } from '../../../../types';
import { OwnerService } from './owner.service';
import { PetTypeService } from './pettypes.service';

@Component({
    selector     : 'owner',
    templateUrl  : './owner.component.html',
    encapsulation: ViewEncapsulation.None
})
export class OwnerComponent implements OnInit {

  owners: Owner[] = [];
  petTypes: PetType[] = [];

  constructor(
    private ownerService: OwnerService,
    private petTypesService: PetTypeService,
  ) { }

  ngOnInit(): void {
    this.getOwners();
    this.getPetTypes();
  }
  private getOwners(): void {
    this.ownerService.getOwners().subscribe((data: Owner[]) => {
      this.owners = data;
    });
  }
  private getPetTypes(): void {
    this.petTypesService.getPetTypes().subscribe((data: PetType[]) => {
      this.petTypes = data;
    });
  }

}
