package co.com.sofka.okr.c2.usecase.vertical;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class ListVerticalUseCase {
    private final VerticalRepository verticalRepository;

    public Mono<Vertical> listVertical(String id){
        return  verticalRepository.getVerticalById(id);

    }
}
