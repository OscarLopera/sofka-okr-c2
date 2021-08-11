package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.mongo.entities.PreguntasEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface PreguntasDBRepository extends ReactiveMongoRepository<PreguntasEntity, String>, ReactiveQueryByExampleExecutor<PreguntasEntity> {
}
