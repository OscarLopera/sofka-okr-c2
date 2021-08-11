package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.mongo.entities.KREntity;
import co.com.sofka.okr.c2.mongo.entities.OKREntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;
import reactor.core.publisher.Flux;

public interface KRsDBRepository extends ReactiveMongoRepository<KREntity, String>, ReactiveQueryByExampleExecutor<KREntity> {

    Flux<KREntity> findAllByIdOkr(String id);
}
