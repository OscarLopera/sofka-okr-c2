package co.com.sofka.okr.c2.model.okrs.gateways;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import reactor.core.publisher.Flux;

public interface OKRSRepository {

    Flux<OKRS> getAllOkrByUser();
}
