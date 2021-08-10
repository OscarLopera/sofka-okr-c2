package co.com.sofka.okr.c2.model.vertical.gateways;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VerticalRepository {

    Flux<Vertical> listVertical();
    Mono<Vertical> getVerticalById(String id);
}
