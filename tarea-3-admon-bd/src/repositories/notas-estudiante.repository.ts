import {DefaultCrudRepository} from '@loopback/repository';
import {NotasEstudiante, NotasEstudianteRelations} from '../models';
import {MaaimssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotasEstudianteRepository extends DefaultCrudRepository<
  NotasEstudiante,
  typeof NotasEstudiante.prototype.id,
  NotasEstudianteRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(NotasEstudiante, dataSource);
  }
}
