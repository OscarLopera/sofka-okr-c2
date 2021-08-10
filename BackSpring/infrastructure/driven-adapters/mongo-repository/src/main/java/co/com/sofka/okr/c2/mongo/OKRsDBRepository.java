package co.com.sofka.okr.c2.mongo;


import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;

public interface OKRsDBRepository extends ReactiveMongoRepository<Object/* change for adapter model */, String>, ReactiveQueryByExampleExecutor<Object/* change for adapter model */> {

}
