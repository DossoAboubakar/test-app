import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ApiSimulateService implements InMemoryDbService {

  createDb() {
    return {
      products: [
        {
          id: 1,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40'
        },
        {
          id: 2,
          name: 'T-shirt',
          description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
          price: '$80'
        },
        {
          id: 3,
          name: 'Back Pack',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          price: '$30'
        }
      ],
      personnages: [
        {
          id: 1,
          nom: 'dosso',
          prenom: 'aboubakar',
          statut: 'etudiant'
        },
        {
          id: 2,
          nom: 'kone',
          prenom: 'tokafolo',
          statut: 'securite'
        }
      ]
    };
  }
}
