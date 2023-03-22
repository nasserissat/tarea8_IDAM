import { Injectable } from '@angular/core';
import { vivencia } from 'src/models/vivencia.model';

@Injectable({
  providedIn: 'root'
})
export class VivenciaService {

  private vivencias: vivencia[] = [
    {
      id: 1,
      titulo: "Foto en la boda",
      fecha: '07/03/2020',
      descripcion: "Foto en la boda de mi tia",
      foto: '../assets/Captura.PNG',
      audio: '',
    },
    {
        id: 2,
        titulo: "Foto en la playa",
        fecha: '08/01/2022',
        descripcion: "Foto en el espejo en el dia de mi graduacion del colegio",
        foto: '../assets/nasser.jpg',
        audio: '',
      },
      {
        id: 3,
        titulo: "Foto de mi graduación",
        fecha: '26/07/2019',
        descripcion: "Fuimos a la sala VIP de downtown a tirarnos fotos para tenerlas de recuerdo",
        foto: '../assets/Screenshot_20210524_182429.jpg',
        audio: '',
      }
]
constructor() { }

  getAllVivencia(): vivencia[] {
    return this.vivencias;
  }

  getVivenciaById(id: number): vivencia {
    const vivencia = this.vivencias.find(v => v.id === id);
    return vivencia ? vivencia : {} as vivencia;
  }
}