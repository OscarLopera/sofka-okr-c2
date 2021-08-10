package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.mongo.entities.VerticalEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface VerticalDBRepository extends ReactiveMongoRepository<VerticalEntity, String>, ReactiveQueryByExampleExecutor<VerticalEntity> {
}
