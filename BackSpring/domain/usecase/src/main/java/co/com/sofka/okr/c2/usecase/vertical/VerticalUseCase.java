package co.com.sofka.okr.c2.usecase.vertical;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@RequiredArgsConstructor
public class VerticalUseCase {

    private final VerticalRepository verticalRepository;

    public Flux<Vertical> execute() {
        return verticalRepository.listVertical();
    }


}
