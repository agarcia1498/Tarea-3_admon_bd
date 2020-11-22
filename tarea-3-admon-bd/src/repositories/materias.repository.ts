import {DefaultCrudRepository} from '@loopback/repository';
import {Materias, MateriasRelations} from '../models';
import {MaaimssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriasRepository extends DefaultCrudRepository<
  Materias,
  typeof Materias.prototype.id,
  MateriasRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(Materias, dataSource);
  }
}
