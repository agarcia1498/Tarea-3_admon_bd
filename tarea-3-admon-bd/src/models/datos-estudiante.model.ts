import {Entity, model, property} from '@loopback/repository';

@model()
export class DatosEstudiante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  carrera: string;


  constructor(data?: Partial<DatosEstudiante>) {
    super(data);
  }
}

export interface DatosEstudianteRelations {
  // describe navigational properties here
}

export type DatosEstudianteWithRelations = DatosEstudiante & DatosEstudianteRelations;
