import { type ContainerBuilder } from 'node-dependency-injection'
import { registerFactory } from '..'
import { PostgresPoolFactory } from '../../../../../Contexts/Shared/infrastructure/persistence/PoostgresPoolFactory'
import { MysqlPoolFactory } from '../../../../../Contexts/Shared/infrastructure/persistence/MysqlPoolFactory'
import WinstonLogger from '../../../../../Contexts/Shared/infrastructure/WinstonLogger'
import { Responses } from '../../../../../Contexts/Shared/infrastructure/Responses'

export function loadSharedDependencies (container: ContainerBuilder): void {
  container.register('Shared.Logger', WinstonLogger)
  container.register('Shared.Responses', Responses)

  registerFactory(PostgresPoolFactory, 'create', 'Shared.domain.PostgresPoolFactory')
  registerFactory(MysqlPoolFactory, 'create', 'Shared.domain.MysqlPoolFactory')
}
