package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface UsuarioDBRepository extends ReactiveMongoRepository<UsuariosEntity, String>, ReactiveQueryByExampleExecutor<UsuariosEntity> {
}

