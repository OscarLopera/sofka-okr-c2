package co.com.sofka.okr.c2.model.vertical.gateways;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import reactor.core.publisher.Flux;

public interface VerticalRepository {

    Flux<Vertical> listVertical();
}
