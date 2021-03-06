import { Appareil } from '../models/Appareil';

export class AppareilsService {

    appareilsList: Appareil[] = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litre',
                'Temps de lavage: 2h',
                'Conso: 173Kwh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'TV',
            description: [
                'Dimensions: 40 pouces',
                'Conso: 22Kwh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Ordi',
            description: [
                'Marque: MSI',
                'Conso: 500Kwh/an'
            ],
            isOn: false,
            startTime: '',
            endTime: ''
        }
    ];
    
    addAppareil(appareil: Appareil) {
        this.appareilsList.push(appareil);
    }
}