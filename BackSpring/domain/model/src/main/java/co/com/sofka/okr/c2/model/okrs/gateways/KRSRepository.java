package co.com.sofka.okr.c2.model.okrs.gateways;

import co.com.sofka.okr.c2.model.okrs.KRS;
import reactor.core.publisher.Flux;

public interface KRSRepository {
    Flux<KRS> listKr(String id);
}
