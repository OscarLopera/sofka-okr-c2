package co.com.sofka.okr.c2.model.okrs.gateways;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface OKRSRepository {

    Flux<OKRS> getAllOkrByUser(String id);
    Flux<OKRS> findByCompleted(String id);
    Flux<OKRS> findByProgress(String id);
}
