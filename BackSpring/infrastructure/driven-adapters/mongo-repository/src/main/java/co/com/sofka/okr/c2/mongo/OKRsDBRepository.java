package co.com.sofka.okr.c2.mongo;

import co.com.sofka.okr.c2.mongo.entities.OKRS;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface OKRsDBRepository extends ReactiveMongoRepository<OKRS, String>, ReactiveQueryByExampleExecutor<OKRS> {

}
