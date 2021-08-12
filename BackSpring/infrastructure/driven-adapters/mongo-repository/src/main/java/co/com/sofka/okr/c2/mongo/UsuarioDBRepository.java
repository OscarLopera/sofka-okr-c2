package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;

public interface UsuarioDBRepository extends ReactiveMongoRepository<UsuariosEntity, String>, ReactiveQueryByExampleExecutor<UsuariosEntity> {
    @Transactional(readOnly = true)
    Mono<UsuariosEntity> findByidUser(String idUser);
}

