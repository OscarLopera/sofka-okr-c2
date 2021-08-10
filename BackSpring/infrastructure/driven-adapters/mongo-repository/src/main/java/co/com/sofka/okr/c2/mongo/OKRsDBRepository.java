package co.com.sofka.okr.c2.mongo;


import co.com.sofka.okr.c2.mongo.entities.OKREntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface OKRsDBRepository extends ReactiveMongoRepository<OKREntity, String>, ReactiveQueryByExampleExecutor<OKREntity> {

}
